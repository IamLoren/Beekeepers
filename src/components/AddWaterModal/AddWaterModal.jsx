import { useState } from 'react';
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
import sprite from '../../assets/sprite.svg';

const AddWaterModal = () => {
  const [counter, setCounter] = useState(50);

  const MIN_VALUE = 0;
  const MAX_VALUE = 1500;

  const handleClick1 = () => {
    if (counter > MIN_VALUE) {
      setCounter(counter - 50);
    }
  };

  const handleClick2 = () => {
    if (counter < MAX_VALUE) {
      setCounter(counter + 50);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledAddWaterModalContainer>
      <form onSubmit={onSubmit}>
        <StyledAddWater>Add Water</StyledAddWater>
        <StyledModalBoldText>Choose a value:</StyledModalBoldText>
        <div>
          <StyledModalText>Amount of water:</StyledModalText>
          <StyledCounterContainer>
            <StyledCounterBtn onClick={handleClick1}>
              <svg className="minus" fill="none">
                <use href={sprite + '#icon-minus-small'}></use>
              </svg>
            </StyledCounterBtn>
            <StyledCounterNumber>{`${counter}ml`}</StyledCounterNumber>
            <StyledCounterBtn onClick={handleClick2}>
              <svg className="plus" fill="none">
                <use href={sprite + '#icon-plus-small'}></use>
              </svg>
            </StyledCounterBtn>
          </StyledCounterContainer>
        </div>
        <label for="time">
          <StyledModalText>Recording time:</StyledModalText>
          <StyledAddModalInput type="text" id="time" name="time" value="7:00" />
        </label>
        <label for="ml">
          <StyledModalBoldText>
            Enter the value of the water used:
          </StyledModalBoldText>
          <StyledAddModalInput type="text" id="ml" name="ml" value="50" />
        </label>
        <StyledValueAndBtnContainer>
          <StyledCounterBottomNumber>{`${counter}ml`}</StyledCounterBottomNumber>
          <StyledSaveBtn type="submit">Save</StyledSaveBtn>
        </StyledValueAndBtnContainer>
      </form>
    </StyledAddWaterModalContainer>
  );
};
export default AddWaterModal;
