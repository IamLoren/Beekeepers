// import { nanoid } from '@reduxjs/toolkit';
// import { useDispatch, useSelector } from 'react-redux';

// import sprite from '../../assets/sprite.svg';
// import { changeModalOpen } from '../../redux/normaCounter/normaCounterSlice';
// import { selectIsModalOpen, selectPortions } from '../../redux/selectors';
// import TodayListItem from '../TodayListItem/TodayListItem';
// import TodayListModal from '../TodayListModal/TodayListModal';

// import {
//   TodayList,
//   TodayListButton,
//   TodayListTitle,
// } from './TodayWaterList.styled';

const TodayWaterList = () => {
  //   const dispatch = useDispatch();
  //   const portions = useSelector(selectPortions);
  //   const isModalOpen = useSelector(selectIsModalOpen);
  //   const openModal = () => {
  //     dispatch(changeModalOpen(!isModalOpen));
  //   };
  //   return (
  //     <div>
  //       <TodayListTitle>Today</TodayListTitle>
  //       <TodayList>
  //         {portions.map(({ amount, time }) => {
  //           return (
  //             <TodayListItem
  //               key={nanoid()}
  //               amount={amount}
  //               time={time}
  //             ></TodayListItem>
  //           );
  //         })}
  //       </TodayList>
  //       <TodayListButton>
  //         <svg width={16} height={16}>
  //           <use href={sprite + '#icon-plus-small'}></use>
  //         </svg>
  //         Add water
  //       </TodayListButton>
  //       <TodayListModal
  //         key={nanoid()}
  //         amount={portions[0].amount}
  //         time={portions[0].time}
  //       />
  //     </div>
  //   );
};

export default TodayWaterList;
