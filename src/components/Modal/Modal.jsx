import ReactDom from 'react-dom';
import sprite from '../../assets/sprite.svg';
import { useEffect } from 'react';
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
  const deletePortionModa = useSelector(selectDeletePortionModal);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        document.body.style.overflow = 'auto';
        dispatch(changeModalOpen(false));
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [dispatch]);

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(changeModalOpen(false));
    }
  };

  const closeModal = () => {
    document.body.style.overflow = 'auto';
    dispatch(changeModalOpen(false));
    dispatch(changeEditPortionModal(false));
    dispatch(deletePortionModal(false));
    dispatch(changeDailyNormaModal(false));
  };

  return ReactDom.createPortal(
    <Overlay onClick={onBackdropClick}>
      <ModalStyled>
        {dailyNormaModal && <DailyNormaModal />}
        {editPortionModal && <TodayListModal />}
        {deletePortionModa && <h1>DeleteModal</h1>}
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
