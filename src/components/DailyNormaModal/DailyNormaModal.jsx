import { useEffect } from 'react';
import { Radio } from '@mui/material';
import { useFormik } from 'formik';
import {
  AmountNumber,
  BtnSave,
  DailyNormaModalContainer,
  Data,
  Error,
  FormulaExplication,
  Input,
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
import { changeDailyNorma } from '../../redux/normaCounter/normaCounterSlice';
import { selectDailyNorma } from '../../redux/selectors';
import * as Yup from 'yup';

const validationDailyNormaModalSchema = Yup.object({
  weight: Yup.number('Weight value must be a number')
    .min(1)
    .required('Weight is required'),
  time: Yup.number()
    .typeError('Time value must be a number')
    .max(24, 'Time must not be greater than 24')
    .min(0)
    .nullable(),
  dailyNorma: Yup.number().typeError('Water amount value must be a number'),
});

const DailyNormaModal = () => {
  const dailyNorma = useSelector(selectDailyNorma);
  const womanFormula = 'V=(M*0,03) + (T*0,4)';
  const manFormula = 'V=(M*0,04) + (T*0,6)';
  const dispatch = useDispatch();

  const DEFAULT_DAILY_NORMA = 1.8;

  const formik = useFormik({
    initialValues: {
      gender: 'woman',
      weight: '',
      time: '',
      norma: dailyNorma,
    },
    validationSchema: validationDailyNormaModalSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const changeGender = (e) => {
    const value = e.target.value;
    dispatch(changeDailyNorma(value === 'woman' ? womanFormula : manFormula));
    formik.handleChange(e);
  };

  const onInputChange = (e) => {
    formik.handleChange(e);
  };

  useEffect(() => {
    const weight = Math.floor(formik.values.weight);
    const time = Math.floor(formik.values.time);
    let result;

    if (isNaN(weight) || isNaN(time) || weight <= 0) {
      result = DEFAULT_DAILY_NORMA;
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
    dispatch(changeDailyNorma(result));
  }, [
    dispatch,
    formik.values.gender,
    formik.values.time,
    formik.values.weight,
  ]);

  useEffect(() => {
    if (formik.errors.weight) {
      console.log('validation error!!!');
    }
    if (formik.errors.time) {
      console.log('validation error2!!!');
    }
  }, [formik.errors.weight, formik.errors.time]);

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
          onChange={changeGender}
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
        <label htmlFor="weight">
          <TypeData>Your weight in kilograms:</TypeData>
          <Input
            type="text"
            id="weight"
            name="weight"
            placeholder="0"
            value={formik.values.weight}
            onChange={onInputChange}
          />
          {formik.touched.weight && formik.errors.weight ? (
            <Error>{formik.errors.weight}</Error>
          ) : null}
        </label>
        <label htmlFor="time">
          <TypeData>
            The time of active participation in sports or other activities with
            a high physical. load in hours:
          </TypeData>
          <Input
            id="time"
            name="time"
            type="text"
            placeholder="0"
            value={formik.values.time}
            onChange={onInputChange}
          />
          {formik.touched.time && formik.errors.time ? (
            <Error>{formik.errors.time}</Error>
          ) : null}
        </label>
        <WrapAmount>
          <Data>The required amount of water in liters per day:</Data>
          <AmountNumber>{dailyNorma} L</AmountNumber>
        </WrapAmount>
        <Subtitle>Write down how much water you will drink:</Subtitle>
        <Input
          id="norma"
          name="norma"
          type="text"
          placeholder="0"
          onChange={onInputChange}
        />
        <BtnSave type="submit">Save</BtnSave>
      </form>
    </DailyNormaModalContainer>
  );
};

export default DailyNormaModal;
