import { useState } from 'react';

import sprite from '../../assets/sprite.svg';

import {
  AmountText,
  ButtonDelete,
  ContentItemWrapper,
  CloseButton,
  CounterWrapper,
  ModalWrapper,
  SubtitleModal,
  TextModal,
  TimeText,
  TitleModal,
  TimeSelect,
  AmountInput,
  AmountResult,
  SaveButton,
  ButtonsWrapper,
  ResultSaveWrapper,
} from './TodayListModal.styled';

const TodayListModal = ({ amount, time }) => {
  const [count, setCount] = useState(amount);
  const [selectedTime, setSelectedTime] = useState(time.padStart(2, '0'));
  const [inputValue, setInputValue] = useState(amount);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 50);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 50);
  };

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 5) {
        const formattedHour = hour.toString().padStart(2, '0');
        const formattedMinute = minute.toString().padStart(2, '0');
        options.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return options;
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputBlur = () => {
    setCount(parseInt(inputValue) || 0);
  };

  return (
    <div>
      {/* Edit Modal Content */}
      <ModalWrapper>
        <TitleModal>Edit the entered amount of water</TitleModal>
        <CloseButton>
          <svg className="edit-close" width={14} height={14}>
            <use href={sprite + '#icon-close'}></use>
          </svg>
        </CloseButton>

        <ContentItemWrapper>
          <svg className="edit" width={17} height={22} fill="none">
            <use href={sprite + '#icon-glass'}></use>
          </svg>
          <AmountText>{amount} ml</AmountText>
          <TimeText>{time}</TimeText>
        </ContentItemWrapper>

        <div>
          <SubtitleModal>Correct entered data:</SubtitleModal>
          <TextModal>Amount of water:</TextModal>
          <CounterWrapper>
            <button onClick={handleDecrement}>
              <svg width={24} height={24}>
                <use href={sprite + '#icon-minus-small'}></use>
              </svg>
            </button>
            <span defaultValue={amount}>{count} ml</span>
            <button onClick={handleIncrement}>
              <svg width={24} height={24}>
                <use href={sprite + '#icon-plus-small'}></use>
              </svg>
            </button>
          </CounterWrapper>
        </div>

        <div>
          <TextModal>Recording time:</TextModal>
          <TimeSelect
            value={selectedTime}
            onChange={(event) => setSelectedTime(event.target.value)}
          >
            {generateTimeOptions().map((timeOption, index) => (
              <option key={index} value={timeOption}>
                {timeOption}
              </option>
            ))}
          </TimeSelect>
        </div>

        <div>
          <SubtitleModal>Enter the value of the water used:</SubtitleModal>
          <AmountInput
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
        </div>

        <ResultSaveWrapper>
          <AmountResult>{count} ml</AmountResult>
          <SaveButton type="submit">Save</SaveButton>
        </ResultSaveWrapper>
      </ModalWrapper>

      {/* Delete Modal Content */}
      <ModalWrapper className="delete-modal">
        <TitleModal>Delete entry</TitleModal>
        <CloseButton>
          <svg width={14} height={14}>
            <use href={sprite + '#icon-close'}></use>
          </svg>
        </CloseButton>
        <SubtitleModal className="delete-subtitle">
          Are you sure you want to delete the entry?
        </SubtitleModal>
        <ButtonsWrapper>
          <ButtonDelete>Delete</ButtonDelete>
          <ButtonDelete className="cancel-btn">Cancel</ButtonDelete>
        </ButtonsWrapper>
      </ModalWrapper>
    </div>
  );
};

export default TodayListModal;
