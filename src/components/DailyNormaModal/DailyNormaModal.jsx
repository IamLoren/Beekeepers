import { useState } from 'react';
import {
  AmountNumber,
  BtnSave,
  DailyNormaModalContainer,
  Data,
  FormulaExplication,
  Input,
  InputRadio,
  Label,
  ModalTitle,
  Span,
  Subtitle,
  TypeData,
  WrapAmount,
  WrapFormula,
  WrapFormulaExplication,
  WrapRadioInputs,
} from './DailyNormaModal.styled';

const DailyNormaModal = () => {
  const womanFormula = 'V=(M*0,03) + (T*0,4)';
  const manFormula = 'V=(M*0,04) + (T*0,6)';
  const [amount] = useState(0);

  return (
    <DailyNormaModalContainer>
      <ModalTitle>My daily norma</ModalTitle>
      <WrapFormula>
        <p>
          For woman: <span>{womanFormula}</span>
        </p>
        <p>
          For man: <span>{manFormula}</span>
        </p>
      </WrapFormula>
      <WrapFormulaExplication>
        <FormulaExplication>
          <span>*</span>V is the volume of the water norm in liters per day, M
          is your body weight, T is the time of active sports, or another type
          of activity commensurate in terms of loads (in the absence of these,
          you must set 0)
        </FormulaExplication>
      </WrapFormulaExplication>
      <form>
        <Subtitle>Calculate your rate:</Subtitle>
        <WrapRadioInputs>
          <Label htmlFor="woman">
            <InputRadio type="radio" id="woman" name="gender" value="woman" />
            <Span>For woman</Span>
          </Label>
          <Label htmlFor="man">
            <InputRadio type="radio" id="man" name="gender" value="man" />
            <Span>For man</Span>
          </Label>
        </WrapRadioInputs>

        <label htmlFor="weight">
          <TypeData>Your weight in kilograms:</TypeData>
          <Input type="text" id="weight" name="weight" placeholder="0" />
        </label>

        <label htmlFor="time">
          <TypeData>
            The time of active participation in sports or other activities with
            a high physical. load in hours:
          </TypeData>
          <Input id="time" name="time" type="text" placeholder="0" />
        </label>

        <WrapAmount>
          <Data>The required amount of water in liters per day:</Data>
          <AmountNumber>{amount} L</AmountNumber>
        </WrapAmount>

        <Subtitle>Write down how much water you will drink:</Subtitle>
        <Input id="norma" name="norma" type="text" placeholder={amount} />
        <BtnSave type="submit">Save</BtnSave>
      </form>
    </DailyNormaModalContainer>
  );
};

export default DailyNormaModal;
