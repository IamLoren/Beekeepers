import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import sprite from '../../assets/sprite.svg';
import { selectIsModalOpen, selectPortions } from '../../redux/selectors';
import TodayListItem from '../TodayListItem/TodayListItem';
import Modal from '../Modal/Modal';
import {
  TodayList,
  TodayListButton,
  TodayListTitle,
} from './TodayWaterList.styled';

const TodayWaterList = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const portions = useSelector(selectPortions);
  const isModalOpen = useSelector(selectIsModalOpen);

  const showModal = (item) => {
    setSelectedItem(item);
  };

  useEffect;
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
      <TodayListButton>
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
