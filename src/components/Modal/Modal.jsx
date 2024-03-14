import ReactDom from 'react-dom';
import sprite from '../../assets/sprite.svg';
import { useCallback, useEffect } from 'react';
import { BtnClose, ModalStyled, Overlay, SvgBtnClose } from './Modal.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeDailyNormaModal,
  changeEditPortionModal,
  changeModalOpen,
  deletePortionModal,
} from '../../redux/normaCounter/normaCounterSlice';
import {
  selectDailyNormaModal,
  selectDeletePortionModal,
  selectEditPortionModal,
} from '../../redux/selectors';
import TodayListModal from '../TodayListModal/TodayListModal';
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal';

const Modal = () => {
  const dispatch = useDispatch();
  const dailyNormaModal = useSelector(selectDailyNormaModal);
  console.log(dailyNormaModal);
  const editPortionModal = useSelector(selectEditPortionModal);
  const deleteModal = useSelector(selectDeletePortionModal);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const closeModal = useCallback(() => {
    document.body.style.overflow = 'auto';
    dispatch(changeModalOpen(false));
    dispatch(changeEditPortionModal(false));
    dispatch(deletePortionModal(false));
    dispatch(changeDailyNormaModal(false));
  }, [dispatch]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        document.body.style.overflow = 'auto';
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [closeModal, dispatch]);

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return ReactDom.createPortal(
    <Overlay onClick={onBackdropClick}>
      <ModalStyled>
        {dailyNormaModal && <DailyNormaModal />}
        {editPortionModal && <TodayListModal />}
        {deleteModal && <h1>DeleteModal</h1>}
        <BtnClose type="button" onClick={closeModal}>
          <SvgBtnClose>
            <use href={`${sprite}#icon-close`} />
          </SvgBtnClose>
        </BtnClose>
      </ModalStyled>
    </Overlay>,
    document.getElementById('portal')
  );
};

export default Modal;
