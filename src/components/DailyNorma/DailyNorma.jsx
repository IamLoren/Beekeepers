import { useDispatch, useSelector } from 'react-redux';
import { selectDailyNorma, selectIsModalOpen } from '../../redux/selectors.js';

import {
  Btn,
  NormaBtnWrap,
  NormaText,
  Title,
  Wrapper,
} from './DailyNorma.styled';
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal.jsx';
import Modal from '../Modal/Modal.jsx';
import { changeModalOpen } from '../../redux/normaCounter/normaCounterSlice';

const DailyNorma = () => {
  const dailyNorma = useSelector(selectDailyNorma);

  const modalIsOpen = useSelector(selectIsModalOpen);
  const dispatch = useDispatch();

  const onEditClick = () => {
    dispatch(changeModalOpen(true));
  };

  return (
    <Wrapper>
      <Title>My daily norma</Title>
      <NormaBtnWrap>
        <NormaText>{dailyNorma} L</NormaText>
        <Btn type="button" onClick={onEditClick}>
          Edit
        </Btn>
      </NormaBtnWrap>

      {modalIsOpen && (
        <Modal>
          <DailyNormaModal />
        </Modal>
      )}
    </Wrapper>
  );
};

export default DailyNorma;
