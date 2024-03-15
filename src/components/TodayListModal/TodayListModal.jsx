import { useEffect, useState } from 'react';

import sprite from '../../assets/sprite.svg';

import {
  AmountText,
  ContentItemWrapper,
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
  ResultSaveWrapper,
} from './TodayListModal.styled';
import { useDispatch } from 'react-redux';
import { editPortion } from '../../redux/statisticData/statisticDataSlice';

const TodayListModal = ({ id, amount, time, closeModal }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(amount);
  const [selectedTime, setSelectedTime] = useState(time);
  const [inputValue, setInputValue] = useState(count);

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
    setCount(inputValue || 0);
  };

  const onSaveClick = () => {
    dispatch(editPortion({ id, amount: count, time: selectedTime }));
    closeModal();
  };

  useEffect(() => {
    setInputValue(count);
  }, [count]);

  return (
    <ModalWrapper>
      <TitleModal>Edit the entered amount of water</TitleModal>
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
          <span>{count} ml</span>
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
        <SaveButton onClick={onSaveClick}>Save</SaveButton>
      </ResultSaveWrapper>
    </ModalWrapper>
  );
};

export default TodayListModal;
