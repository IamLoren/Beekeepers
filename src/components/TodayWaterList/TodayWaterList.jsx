import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../assets/sprite.svg';
import { selectIsModalOpen, selectPortions } from '../../redux/selectors';
import TodayListItem from '../TodayListItem/TodayListItem';
import Modal from '../Modal/Modal';
import {
  TodayList,
  TodayListButton,
  TodayListTitle,
} from './TodayWaterList.styled';
import {
  changeAddModal,
  changeModalOpen,
} from '../../redux/modals/modalsSlice';

const TodayWaterList = () => {
  const dispatch = useDispatch();
  const portions = useSelector(selectPortions);
  const isModalOpen = useSelector(selectIsModalOpen);
  const [selectedItem, setSelectedItem] = useState(null);

  const sortedPortions = [...portions].sort((a, b) => {
    const timeA = new Date(`1970/01/01 ${a.time}`).getTime();
    const timeB = new Date(`1970/01/01 ${b.time}`).getTime();
    return timeA - timeB;
  });

  const showModal = (item) => {
    setSelectedItem(item);
  };

  const onAddPortionClick = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeAddModal(true));
  };

  return (
    <div>
      <TodayListTitle>Today</TodayListTitle>
      <TodayList>
        {sortedPortions.map(({ id, amount, time }) => (
          <TodayListItem
            key={id}
            id={id}
            amount={amount}
            time={time}
            showModal={showModal}
          />
        ))}
      </TodayList>
      <TodayListButton onClick={onAddPortionClick}>
        <svg width={16} height={16}>
          <use href={sprite + '#icon-plus-small'}></use>
        </svg>
        Add water
      </TodayListButton>
      {isModalOpen && (
        <Modal
          id={selectedItem.id}
          amount={selectedItem.amount}
          time={selectedItem.time}
        />
      )}
    </div>
  );
};

export default TodayWaterList;
