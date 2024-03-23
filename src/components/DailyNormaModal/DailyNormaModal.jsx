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
import { useDispatch } from 'react-redux';
import { closeModals } from '../../redux/modals/modalsSlice';
import * as Yup from 'yup';
import { updateWaterRateThunk } from '../../redux/normaCounter/operations';
import { changeDailyNorma } from '../../redux/normaCounter/normaCounterSlice';
import { toast } from 'react-toastify';
import { fetchMonthlyPortionsThunk } from '../../redux/statisticData/operations';
import { getCurrentData } from '../../serviceFunctions/serviceFunctions';
import '../../Internationalization/i18n';
import { useTranslation } from 'react-i18next';

const DailyNormaModal = () => {
  const womanFormula = 'V=(M*0,03) + (T*0,4)';
  const manFormula = 'V=(M*0,04) + (T*0,6)';
  const dispatch = useDispatch();
  const [calculatedNorma, setCalculatedNorma] = useState(1.5);
  const { t } = useTranslation();

  const validationDailyNormaModalSchema = Yup.object({
    weight: Yup.number(t('normaModal.Weight value must be a number'))
      .typeError(t('normaModal.Weight value must be a number'))
      .min(1, t('normaModal.Weight must be greater than or equal to 1')),
    time: Yup.number()
      .typeError(t('normaModal.Time value must be a number'))
      .max(24, t('normaModal.Time must not be greater than 24'))
      .min(0)
      .nullable(),
    norma: Yup.number(t('normaModal.Daily norma value must be a number'))
      .typeError(t('normaModal.Water amount value must be a number'))
      .max(15, t('normaModal.Maximum amount of water is 15L'))
      .required(t('normaModal.Water amount is required')),
  });

  const formik = useFormik({
    initialValues: {
      gender: 'woman',
      weight: '',
      time: '',
      norma: '',
    },
    validationSchema: validationDailyNormaModalSchema,

    onSubmit: async (values) => {
      const dailyWaterNormaLiters = Number(values.norma);
      const dailyWaterNormaMl = dailyWaterNormaLiters * 1000;
      const newDailyWaterNorma = { dailyWaterNorma: dailyWaterNormaMl };
      const currentDate = getCurrentData();
      dispatch(changeDailyNorma(newDailyWaterNorma));
      dispatch(updateWaterRateThunk(newDailyWaterNorma));
      dispatch(fetchMonthlyPortionsThunk(currentDate));
      dispatch(closeModals()).catch((error) => {
        toast.info(error.message);
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
      <ModalTitle>{t('normaModal.My daily norma')}</ModalTitle>
      <WrapFormula>
        <p>
          {t('normaModal.formulaWoman')}: <span>{womanFormula}</span>
        </p>
        <p>
          {t('normaModal.formulaMan')}:<span>{manFormula}</span>
        </p>
      </WrapFormula>
      <WrapFormulaExplication>
        <FormulaExplication>
          <span>*</span> {t('normaModal.formulaExplanation')}
        </FormulaExplication>
      </WrapFormulaExplication>
      <form onSubmit={formik.handleSubmit}>
        <Subtitle>{t('normaModal.Calculate your rate')}:</Subtitle>
        <StyledRadioGroup
          aria-labelledby="radio-buttons-group"
          name="gender"
          row
          onChange={onInputChange}
        >
          <StyledFormControlLabel
            value="woman"
            control={<Radio />}
            label={t('woman')}
            checked={formik.values.gender === 'woman'}
          />
          <StyledFormControlLabel
            value="man"
            control={<Radio />}
            label={t('man')}
            checked={formik.values.gender === 'man'}
          />
        </StyledRadioGroup>

        <InputErrorWrap>
          <label htmlFor="weight">
            <TypeData>{t('normaModal.Your weight in kilograms')}:</TypeData>

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
              {t(
                'normaModal.The time of active participation in sports or other activities with a high physical load in hours'
              )}
              :
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
          <Data>
            {t('normaModal.The required amount of water in liters per day')}:
          </Data>
          <AmountNumber>{calculatedNorma} L</AmountNumber>
        </WrapAmount>
        <InputErrorWrap>
          <label htmlFor="norma">
            <Subtitle>
              {t('normaModal.Write down how much water you will drink')}:
            </Subtitle>
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
              <InfoMessage>
                {t('normaModal.Amount of water in Liters')}
              </InfoMessage>
            )}
            {/* {formik.errors.norma && <Error>{formik.errors.norma}</Error>} */}
          </label>
        </InputErrorWrap>
        <BtnSave type="submit">{t('save')}</BtnSave>
      </form>
    </DailyNormaModalContainer>
  );
};

export default DailyNormaModal;
