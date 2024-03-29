import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { useTranslation } from 'react-i18next';
import '../../Internationalization/i18n';
import sprite from '../../assets/sprite.svg';
import {
  addPortionThunk,
  fetchDailyPortionsThunk,
  fetchMonthlyPortionsThunk,
} from '../../redux/statisticData/operations';
import { closeModals } from '../../redux/modals/modalsSlice';
import { selectDailyNorma } from '../../redux/selectors';
import {
  formingTodayDate,
  getCurrentData,
} from '../../serviceFunctions/serviceFunctions';
import {
  StyledAddModalInput,
  StyledAddWater,
  StyledAddWaterModalContainer,
  StyledCounterBottomNumber,
  StyledCounterBtn,
  StyledCounterContainer,
  StyledCounterNumber,
  StyledModalBoldText,
  StyledModalText,
  StyledSaveBtn,
  StyledTimeInput,
  StyledValueAndBtnContainer,
} from './AddWaterModal.styled';
import { StyledTimePicker } from '../TodayListModal/TodayListModal.styled';

const AddWaterModal = () => {
  const dispatch = useDispatch();

  const dailyNorma = useSelector(selectDailyNorma) || 0;

  const [counter, setCounter] = useState(50);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );
  const [isSaveDisabled, setIsSaveDisabled] = useState(counter === 0);
  const { t } = useTranslation();
  const MIN_VALUE = 0;
  const MAX_VALUE = 1500;

  const handleClick1 = () => {
    if (counter - 50 >= MIN_VALUE) {
      setCounter(counter - 50);
      setIsSaveDisabled(counter - 50 === 0);
    }
  };

  const handleClick2 = () => {
    if (counter < MAX_VALUE) {
      setCounter(counter + 50);
      setIsSaveDisabled(counter + 50 === 0);
    }
  };

  const handleInputChange = (event) => {
    let value = Number(event.target.value);
    if (value < MIN_VALUE) {
      value = MIN_VALUE;
    } else if (value > MAX_VALUE) {
      value = MAX_VALUE;
    }
    setCounter(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const consumeRatio = dailyNorma / counter;
    await dispatch(
      addPortionThunk({
        amount: counter,
        time: currentTime,
        dailyNorma,
        consumeRatio,
      })
    );
    const today = new Date();
    const currentDate = getCurrentData();
    dispatch(fetchDailyPortionsThunk(formingTodayDate(today)));
    dispatch(fetchMonthlyPortionsThunk(currentDate));
    dispatch(closeModals());
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format('HH:mm'));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const unformattedTime = new Date();
  const year = unformattedTime.getFullYear();
  const month = String(unformattedTime.getMonth() + 1).padStart(2, '0');
  const day = String(unformattedTime.getDate()).padStart(2, '0');

  const datetime = `${year}-${month}-${day}T${currentTime}`;

  const onTimePickerChange = (value) => {
    const formattedHour = String(value.$H).padStart(2, '0');
    const formattedMinute = String(value.$m).padStart(2, '0');
    const formattedValue = `${formattedHour}:${formattedMinute}`;
    setCurrentTime(formattedValue);
  };

  return (
    <StyledAddWaterModalContainer>
      <form onSubmit={onSubmit}>
        <StyledAddWater>{t('addWater')}</StyledAddWater>
        <StyledModalBoldText>
          {t('addModal.Choose a value')}:
        </StyledModalBoldText>
        <div>
          <StyledModalText>{t('addModal.Amount of water')}:</StyledModalText>
          <StyledCounterContainer>
            <StyledCounterBtn type="button" onClick={handleClick1}>
              <svg className="minus" fill="none">
                <use href={sprite + '#icon-minus-small'}></use>
              </svg>
            </StyledCounterBtn>
            <StyledCounterNumber>
              {`${counter}`}
              {t('ml')}
            </StyledCounterNumber>
            <StyledCounterBtn type="button" onClick={handleClick2}>
              <svg className="plus" fill="none">
                <use href={sprite + '#icon-plus-small'}></use>
              </svg>
            </StyledCounterBtn>
          </StyledCounterContainer>
        </div>
        <StyledTimeInput>
          <StyledModalText>{t('addModal.Recording time')}:</StyledModalText>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledTimePicker
              disableFuture={true}
              minutesStep={5}
              value={dayjs(datetime)}
              onChange={(value) => onTimePickerChange(value)}
            />
          </LocalizationProvider>
        </StyledTimeInput>
        <label htmlFor={t('ml')}>
          <StyledModalBoldText>
            {t('addModal.Enter the value of the water used')}:
          </StyledModalBoldText>
          <StyledAddModalInput
            type="number"
            id="ml"
            name="ml"
            value={counter === 0 ? '' : counter}
            min={0}
            max={1500}
            onChange={handleInputChange}
          />
        </label>
        <StyledValueAndBtnContainer>
          <StyledCounterBottomNumber>
            {`${counter}`}
            {t('ml')}
          </StyledCounterBottomNumber>
          <StyledSaveBtn type="submit" disabled={isSaveDisabled}>
            {t('save')}
          </StyledSaveBtn>
        </StyledValueAndBtnContainer>
      </form>
    </StyledAddWaterModalContainer>
  );
};
export default AddWaterModal;
