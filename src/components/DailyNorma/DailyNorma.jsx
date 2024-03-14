import { useSelector } from 'react-redux';
import { selectDailyNorma } from '../../redux/selectors.js';

import {
  Btn,
  NormaBtnWrap,
  NormaText,
  Title,
  Wrapper,
} from './DailyNorma.styled';
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal.jsx';
import { useState } from 'react';
import Modal from '../Modal/Modal.jsx';

const DailyNorma = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dailyNorma = useSelector(selectDailyNorma);
  const water = dailyNorma;

  return (
    <Wrapper>
      <Title>My daily norma</Title>
      <NormaBtnWrap>
        <NormaText>{water} L</NormaText>
        <Btn type="button" onClick={() => setModalIsOpen(true)}>
          Edit
        </Btn>
      </NormaBtnWrap>

      {modalIsOpen && (
        <Modal closeModal={() => setModalIsOpen(false)}>
          <DailyNormaModal closeModal={() => setModalIsOpen(false)} />
        </Modal>
      )}
    </Wrapper>
  );
};

export default DailyNorma;
