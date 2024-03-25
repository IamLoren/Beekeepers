import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import sprite from '../../assets/sprite.svg';
import {
  fetchDailyPortionsThunk,
  fetchMonthlyPortionsThunk,
  updatePortionThunk,
} from '../../redux/statisticData/operations';
import { selectDailyNorma, selectSelectedItem } from '../../redux/selectors';
import { closeModals } from '../../redux/modals/modalsSlice';
import { LocalizationProvider } from '@mui/x-date-pickers';
import {
  formingTodayDate,
  getCurrentData,
} from '../../serviceFunctions/serviceFunctions';

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
import '../../Internationalization/i18n';
import '../../Internationalization/i18n';
import { useTranslation } from 'react-i18next';

const TodayListModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const selectedItem = useSelector(selectSelectedItem);
  const dailyNorma = useSelector(selectDailyNorma) || 0;
  const [count, setCount] = useState(selectedItem.amount);
  const [selectedTime, setSelectedTime] = useState(selectedItem.time);
  const [inputValue, setInputValue] = useState(count);
  const [isSaveDisabled, setIsSaveDisabled] = useState(
    count < 0 || count > 1500
  );

  const handleDecrement = () => {
    if (count >= 50) {
      setCount(count - 50);
      setIsSaveDisabled(count - 50 === 0);
    }
  };

  const handleIncrement = () => {
    if (count < 1500) {
      setCount(count + 50);
      setIsSaveDisabled(count + 50 > 1500);
    }
  };

  const handleInputChange = (event) => {
    let value = Number(event.target.value);
    if (value < 0) {
      value = 0;
    } else if (value > 1500) {
      value = 1500;
      console.error("You can't add more than 1500ml");
    }
    setCount(value);
  };

  // const handleInputBlur = () => {
  //   let newValue = inputValue;

  //   if (/^0/.test(newValue)) {
  //     newValue = newValue.replace(/^0+/, '');

  //     if (newValue === '') {
  //       newValue = '0';
  //     }
  //   }
  //   setInputValue(newValue);
  //   setCount(parseInt(newValue, 10));
  // };

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
    ).then(() => {
      dispatch(closeModals());
      const today = new Date();
      const currentDate = getCurrentData();
      dispatch(fetchDailyPortionsThunk(formingTodayDate(today)));
      dispatch(fetchMonthlyPortionsThunk(currentDate));
    });
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
      <TitleModal>
        {t('todayListModal.Edit the entered amount of water')}
      </TitleModal>
      <ContentItemWrapper>
        <svg className="edit" width={17} height={22} fill="none">
          <use href={sprite + '#icon-glass'}></use>
        </svg>
        <AmountText>
          {selectedItem.amount} {t('ml')}
        </AmountText>
        <TimeText>{selectedItem.time}</TimeText>
      </ContentItemWrapper>
      <div>
        <SubtitleModal>
          {t('todayListModal.Correct entered data')}:
        </SubtitleModal>
        <TextModal>{t('todayListModal.Amount of water')}:</TextModal>
        <CounterWrapper>
          <button onClick={handleDecrement}>
            <svg width={24} height={24}>
              <use href={sprite + '#icon-minus-small'}></use>
            </svg>
          </button>
          <span>
            {count} {t('ml')}
          </span>
          <button onClick={handleIncrement}>
            <svg width={24} height={24}>
              <use href={sprite + '#icon-plus-small'}></use>
            </svg>
          </button>
        </CounterWrapper>
      </div>
      <div>
        <TextModal>{t('todayListModal.Recording time')}:</TextModal>
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
        <SubtitleModal>
          {t('todayListModal.Enter the value of the water used')}:
        </SubtitleModal>
        <AmountInput
          type="number"
          value={inputValue}
          min={0}
          max={1500}
          onChange={handleInputChange}
          // onBlur={handleInputBlur}
        />
      </div>
      <ResultSaveWrapper>
        <AmountResult>
          {count} {t('ml')}
        </AmountResult>
        <SaveButton onClick={onSaveClick} disabled={isSaveDisabled}>
          {t('save')}
        </SaveButton>
      </ResultSaveWrapper>
    </ModalWrapper>
  );
};

export default TodayListModal;
