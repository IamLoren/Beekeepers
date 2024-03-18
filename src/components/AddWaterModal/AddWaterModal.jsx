import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../assets/sprite.svg';
import { addPortionThunk } from '../../redux/statisticData/operations';
import { closeModals } from '../../redux/modals/modalsSlice';
import { selectDailyNorma } from '../../redux/selectors';
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
  StyledValueAndBtnContainer,
} from './AddWaterModal.styled';

const AddWaterModal = () => {
  const dispatch = useDispatch();

  const dailyNorma = useSelector(selectDailyNorma) || 0;
  const [counter, setCounter] = useState(50);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );
  const [isSaveDisabled, setIsSaveDisabled] = useState(counter === 0);

  const MIN_VALUE = 0;
  const MAX_VALUE = 1500;

  const handleClick1 = () => {
    if (counter > MIN_VALUE) {
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
    setCounter(Number(event.target.value));
  };

  const handleTimeChange = (e) => {
    setCurrentTime(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const consumeRatio = dailyNorma / counter;
    dispatch(
      addPortionThunk({
        amount: counter,
        time: currentTime,
        dailyNorma,
        consumeRatio,
      })
    );
    dispatch(closeModals());

    // setCurrentTime(
    //   new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    // );
  };

  return (
    <StyledAddWaterModalContainer>
      <form onSubmit={onSubmit}>
        <StyledAddWater>Add Water</StyledAddWater>
        <StyledModalBoldText>Choose a value:</StyledModalBoldText>
        <div>
          <StyledModalText>Amount of water:</StyledModalText>
          <StyledCounterContainer>
            <StyledCounterBtn type="button" onClick={handleClick1}>
              <svg className="minus" fill="none">
                <use href={sprite + '#icon-minus-small'}></use>
              </svg>
            </StyledCounterBtn>
            <StyledCounterNumber>{`${counter}ml`}</StyledCounterNumber>
            <StyledCounterBtn type="button" onClick={handleClick2}>
              <svg className="plus" fill="none">
                <use href={sprite + '#icon-plus-small'}></use>
              </svg>
            </StyledCounterBtn>
          </StyledCounterContainer>
        </div>
        <label htmlFor="time">
          <StyledModalText>Recording time:</StyledModalText>
          <StyledAddModalInput
            type="text"
            id="time"
            name="time"
            value={currentTime}
            onChange={handleTimeChange}
          />
        </label>
        <label htmlFor="ml">
          <StyledModalBoldText>
            Enter the value of the water used:
          </StyledModalBoldText>
          <StyledAddModalInput
            type="number"
            step="10"
            id="ml"
            name="ml"
            value={counter}
            onChange={handleInputChange}
          />
        </label>
        <StyledValueAndBtnContainer>
          <StyledCounterBottomNumber>{`${counter}ml`}</StyledCounterBottomNumber>
          <StyledSaveBtn type="submit" disabled={isSaveDisabled}>
            Save
          </StyledSaveBtn>
        </StyledValueAndBtnContainer>
      </form>
    </StyledAddWaterModalContainer>
  );
};
export default AddWaterModal;
