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
        {portions.map(({ id, amount, time }) => (
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
