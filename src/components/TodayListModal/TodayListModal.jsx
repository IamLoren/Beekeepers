import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import sprite from '../../assets/sprite.svg';
import {
  fetchDailyPortionsThunk,
  updatePortionThunk,
} from '../../redux/statisticData/operations';
import { selectDailyNorma, selectSelectedItem } from '../../redux/selectors';
import { closeModals } from '../../redux/modals/modalsSlice';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { formingTodayDate } from '../../serviceFunctions/serviceFunctions';

import {
  AmountText,
  ContentItemWrapper,
  CounterWrapper,
  ModalWrapper,
  SubtitleModal,
  TextModal,
  TimeText,
  TitleModal,
  AmountInput,
  AmountResult,
  SaveButton,
  ResultSaveWrapper,
  StyledTimePicker,
} from './TodayListModal.styled';

const TodayListModal = () => {
  const dispatch = useDispatch();
  const selectedItem = useSelector(selectSelectedItem);
  const dailyNorma = useSelector(selectDailyNorma) || 0;
  const [count, setCount] = useState(selectedItem.amount);
  const [selectedTime, setSelectedTime] = useState(selectedItem.time);
  const [inputValue, setInputValue] = useState(count);

  const handleDecrement = () => {
    if (count >= 50) {
      setCount(count - 50);
    }
  };

  const handleIncrement = () => {
    if (count < 1500) {
      setCount(count + 50);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputBlur = () => {
    let newValue = inputValue.trim();

    if (/^0/.test(newValue)) {
      newValue = newValue.replace(/^0+/, '');

      if (newValue === '') {
        newValue = '0';
      }
    }
    setInputValue(newValue);
    setCount(parseInt(newValue, 10));
  };

  const onSaveClick = () => {
    const consumeRatio = dailyNorma / count;
    dispatch(
      updatePortionThunk({
        id: selectedItem.id,
        amount: count,
        time: selectedTime,
        dailyNorma,
        consumeRatio,
      })
    );
    const today = new Date();
    dispatch(fetchDailyPortionsThunk(formingTodayDate(today)));
    dispatch(closeModals());
  };

  useEffect(() => {
    setInputValue(count);
  }, [count]);

  const unformattedTime = new Date();
  const year = unformattedTime.getFullYear();
  const month = String(unformattedTime.getMonth() + 1).padStart(2, '0');
  const day = String(unformattedTime.getDate()).padStart(2, '0');

  const datetime = `${year}-${month}-${day}T${selectedTime}`;

  const onTimePickerChange = (value) => {
    const formattedHour = String(value.$H).padStart(2, '0');
    const formattedMinute = String(value.$m).padStart(2, '0');
    const formattedValue = `${formattedHour}:${formattedMinute}`;
    setSelectedTime(formattedValue);
  };

  return (
    <ModalWrapper>
      <TitleModal>Edit the entered amount of water</TitleModal>
      <ContentItemWrapper>
        <svg className="edit" width={17} height={22} fill="none">
          <use href={sprite + '#icon-glass'}></use>
        </svg>
        <AmountText>{selectedItem.amount} ml</AmountText>
        <TimeText>{selectedItem.time}</TimeText>
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
        {/* <TimeSelect
          value={selectedTime}
          onChange={(event) => setSelectedTime(event.target.value)}
        >
          {generateTimeOptions().map((timeOption, index) => (
            <option key={index} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </TimeSelect> */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StyledTimePicker
            ampm={false}
            disableFuture={true}
            minutesStep={5}
            value={dayjs(datetime)}
            onChange={(value) => onTimePickerChange(value)}
          />
        </LocalizationProvider>
      </div>

      <div>
        <SubtitleModal>Enter the value of the water used:</SubtitleModal>
        <AmountInput
          type="number"
          value={inputValue}
          min={0}
          max={1500}
          step={10}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
      </div>
      <ResultSaveWrapper>
        <AmountResult>{count} ml</AmountResult>
        <SaveButton onClick={onSaveClick} disabled={count < 0 || count > 1500}>
          Save
        </SaveButton>
      </ResultSaveWrapper>
    </ModalWrapper>
  );
};

export default TodayListModal;
