import { useEffect, useState } from 'react';
import { Radio } from '@mui/material';
import { useFormik } from 'formik';
import {
  AmountNumber,
  BtnSave,
  DailyNormaModalContainer,
  Data,
  Error,
  FormulaExplication,
  InfoMessage,
  Input,
  InputErrorWrap,
  ModalTitle,
  StyledFormControlLabel,
  StyledRadioGroup,
  Subtitle,
  TypeData,
  WrapAmount,
  WrapFormula,
  WrapFormulaExplication,
} from './DailyNormaModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { closeModals } from '../../redux/modals/modalsSlice';
// import { changeDailyNorma } from '../../redux/normaCounter/normaCounterSlice';

import * as Yup from 'yup';
import { updateWaterRateThunk } from '../../redux/normaCounter/operations';
import { selectToken } from '../../redux/selectors';
import { changeDailyNorma } from '../../redux/normaCounter/normaCounterSlice';

const validationDailyNormaModalSchema = Yup.object({
  weight: Yup.number('Weight value must be a number')
    .typeError('Weight must be a number')
    .min(1)
    .required('Weight is required'),
  time: Yup.number()
    .typeError('Time value must be a number')
    .max(24, 'Time must not be greater than 24')
    .min(0)
    .nullable(),
  norma: Yup.number('Daily norma value must be a number').typeError(
    'Water amount value must be a number'
  ),
});

const DailyNormaModal = () => {
  const womanFormula = 'V=(M*0,03) + (T*0,4)';
  const manFormula = 'V=(M*0,04) + (T*0,6)';
  // const dailyNorma = useSelector(selectDailyNorma);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const [calculatedNorma, setCalculatedNorma] = useState(1.5);

  const formik = useFormik({
    initialValues: {
      gender: 'woman',
      weight: '',
      time: '',
      norma: '',
    },
    validationSchema: validationDailyNormaModalSchema,
    onSubmit: async (values) => {
      const dailyWaterNorma = Number(values.norma);
      const newDailyWaterNorma = { dailyWaterNorma };
      console.log(newDailyWaterNorma);
      dispatch(changeDailyNorma(newDailyWaterNorma));
      dispatch(updateWaterRateThunk(newDailyWaterNorma, token));
      dispatch(closeModals()).catch((error) => {
        console.log(error);
      });
    },
  });

  const onInputChange = (e) => {
    formik.handleChange(e);
  };

  useEffect(() => {
    const weight = Math.floor(formik.values.weight);
    const time = Math.floor(formik.values.time);
    let result;

    if (isNaN(weight) || isNaN(time) || weight <= 0) {
      result = calculatedNorma;
    } else {
      switch (formik.values.gender) {
        case 'woman':
          result = (weight * 0.03 + time * 0.4).toFixed(1);
          break;
        case 'man':
          result = (weight * 0.04 + time * 0.6).toFixed(1);
          break;
        default:
          return;
      }
    }
    setCalculatedNorma(result);
  }, [
    calculatedNorma,
    dispatch,
    formik.values.gender,
    formik.values.time,
    formik.values.weight,
  ]);

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
      <form onSubmit={formik.handleSubmit}>
        <Subtitle>Calculate your rate:</Subtitle>
        <StyledRadioGroup
          aria-labelledby="radio-buttons-group"
          name="gender"
          row
          onChange={onInputChange}
        >
          <StyledFormControlLabel
            value="woman"
            control={<Radio />}
            label="For woman"
            checked={formik.values.gender === 'woman'}
          />
          <StyledFormControlLabel
            value="man"
            control={<Radio />}
            label="For man"
            checked={formik.values.gender === 'man'}
          />
        </StyledRadioGroup>

        <InputErrorWrap>
          <label htmlFor="weight">
            <TypeData>Your weight in kilograms:</TypeData>

            <Input
              type="text"
              id="weight"
              name="weight"
              placeholder="0"
              value={formik.values.weight}
              onChange={onInputChange}
              $isError={formik.errors.weight}
              onFocus={(e) => (e.target.placeholder = '')}
              onBlur={(e) => (e.target.placeholder = '0')}
            />
            {formik.errors.weight && <Error>{formik.errors.weight}</Error>}
          </label>
        </InputErrorWrap>
        <InputErrorWrap>
          <label htmlFor="time">
            <TypeData>
              The time of active participation in sports or other activities
              with a high physical. load in hours:
            </TypeData>
            <Input
              id="time"
              name="time"
              type="text"
              placeholder="0"
              value={formik.values.time}
              onChange={onInputChange}
              $isError={formik.errors.time}
              onFocus={(e) => (e.target.placeholder = '')}
              onBlur={(e) => (e.target.placeholder = '0')}
            />
            {formik.errors.time && <Error>{formik.errors.time}</Error>}
          </label>
        </InputErrorWrap>
        <WrapAmount>
          <Data>The required amount of water in liters per day:</Data>
          <AmountNumber>{calculatedNorma} L</AmountNumber>
        </WrapAmount>
        <InputErrorWrap>
          <label htmlFor="norma">
            <Subtitle>Write down how much water you will drink:</Subtitle>
            <Input
              id="norma"
              name="norma"
              type="text"
              placeholder="0"
              onChange={onInputChange}
              $isError={formik.errors.norma}
              onFocus={(e) => (e.target.placeholder = '')}
              onBlur={(e) => (e.target.placeholder = '0')}
            />
            {formik.errors.norma ? (
              <Error>{formik.errors.norma}</Error>
            ) : (
              <InfoMessage>Amount of water in Liters</InfoMessage>
            )}
            {/* {formik.errors.norma && <Error>{formik.errors.norma}</Error>} */}
          </label>
        </InputErrorWrap>
        <BtnSave type="submit">Save</BtnSave>
      </form>
    </DailyNormaModalContainer>
  );
};

export default DailyNormaModal;
