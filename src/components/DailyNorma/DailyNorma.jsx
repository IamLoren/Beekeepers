import { useSelector } from 'react-redux';
import { selectDailyNorma } from '../../redux/selectors.js';
import { useCallback, useEffect, useState } from 'react';
import {
  Btn,
  NormaBtnWrap,
  NormaText,
  Title,
  Wrapper,
} from './DailyNorma.styled';
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal.jsx';

const DailyNorma = () => {
  const dailyNorma = useSelector(selectDailyNorma);
  const water = dailyNorma;
  // const modalIsOpen = useSelector(selectIsModalOpen);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalIsOpen]);

  const closeModal = useCallback(() => {
    setModalIsOpen(false);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [closeModal]);

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
        <DailyNormaModal closeModal={closeModal}></DailyNormaModal>
      )}
    </Wrapper>
  );
};

export default DailyNorma;
