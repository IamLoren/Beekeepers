import { useDispatch, useSelector } from 'react-redux';
import { selectDailyNorma } from '../../redux/selectors.js';

import {
  Btn,
  NormaBtnWrap,
  // NormaText,
  Title,
  Wrapper,
} from './DailyNorma.styled';

import {
  changeDailyNormaModal,
  changeModalOpen,
} from '../../redux/modals/modalsSlice.js';

const DailyNorma = () => {
  // const dailyNorma = useSelector(selectDailyNorma);
  const dispatch = useDispatch();

  const onEditClick = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeDailyNormaModal(true));
  };

  return (
    <Wrapper>
      <Title>My daily norma</Title>
      <NormaBtnWrap>
        {/* <NormaText>{dailyNorma} L</NormaText> */}
        <Btn type="button" onClick={onEditClick}>
          Edit
        </Btn>
      </NormaBtnWrap>
    </Wrapper>
  );
};

export default DailyNorma;
