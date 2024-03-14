import sprite from '../../assets/sprite.svg';

import {
  AmountText,
  ButtonsWrapper,
  ContentItemWrapper,
  ItemWrapper,
  TimeText,
} from './TodayListItem.styled';

const TodayListItem = ({ amount, time }) => {
  return (
    <ItemWrapper>
      <ContentItemWrapper>
        <svg width={17} height={22} fill="none">
          <use href={sprite + '#icon-glass'}></use>
        </svg>
        <AmountText>{amount} ml</AmountText>
        <TimeText>{time}</TimeText>
      </ContentItemWrapper>
      <ButtonsWrapper>
        <button className="edit">
          <svg width={16} height={16} fill="none">
            <use href={sprite + '#icon-pencil-square'}></use>
          </svg>
        </button>
        <button className="trash">
          <svg width={16} height={16} fill="none">
            <use href={sprite + '#icon-trash'}></use>
          </svg>
        </button>
      </ButtonsWrapper>
    </ItemWrapper>
  );
};

export default TodayListItem;
