import {
  AmountText,
  ButtonsWrapper,
  ContentItemWrapper,
  ItemWrapper,
  TimeText,
} from './TodayListItem.styled';

import sprite from '../../assets/sprite.svg';

const TodayListItem = ({ amount, time }) => {
  return (
    <ItemWrapper>
      <ContentItemWrapper>
        <svg className="edit" width={17} height={22} fill="none">
          <use href={sprite + '#icon-glass'}></use>
        </svg>
        <AmountText>{amount} ml</AmountText>
        <TimeText>{time}</TimeText>
      </ContentItemWrapper>
      <ButtonsWrapper>
        <button>
          <svg className="edit" width={16} height={16} fill="none">
            <use href={sprite + '#icon-pencil-square'}></use>
          </svg>
        </button>
        <button>
          <svg className="trash" width={16} height={16} fill="none">
            <use href={sprite + '#icon-trash'}></use>
          </svg>
        </button>
      </ButtonsWrapper>
    </ItemWrapper>
  );
};

export default TodayListItem;
