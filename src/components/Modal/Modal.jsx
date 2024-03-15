import ReactDom from 'react-dom';
import sprite from '../../assets/sprite.svg';
import { useCallback, useEffect } from 'react';
import { BtnClose, ModalStyled, Overlay, SvgBtnClose } from './Modal.styled';
import { useDispatch, useSelector } from 'react-redux';

import TodayListModal from '../TodayListModal/TodayListModal';
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal';
import DeleteModal from '../TodayListModal/DeleteModal';
import {
  selectAddWaterModal,
  selectDailyNormaModal,
  selectDeletePortionModal,
  selectEditPortionModal,
  selectLogoutModal,
  selectSettingModal,
} from '../../redux/selectors';
import { closeModals } from '../../redux/modals/modalsSlice';

const Modal = ({ id, amount, time }) => {
  const dispatch = useDispatch();
  const dailyNormaModal = useSelector(selectDailyNormaModal);
  const editPortionModal = useSelector(selectEditPortionModal);
  const deletePortionModal = useSelector(selectDeletePortionModal);
  const addWaterModal = useSelector(selectAddWaterModal);
  const settingModal = useSelector(selectSettingModal);
  const logoutModal = useSelector(selectLogoutModal);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const closeModal = useCallback(() => {
    document.body.style.overflow = 'auto';
    dispatch(closeModals(false));
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
        {editPortionModal && (
          <TodayListModal
            id={id}
            amount={amount}
            time={time}
            closeModal={closeModal}
          />
        )}
        {deletePortionModal && <DeleteModal id={id} closeModal={closeModal} />}
        {addWaterModal && <h1>Add Modal</h1>}
        {settingModal && <h1>Setting Modal</h1>}
        {logoutModal && <h1>Logout Modal</h1>}

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