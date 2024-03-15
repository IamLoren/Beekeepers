import { useCallback, useEffect } from 'react';
import ReactDom from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import sprite from '../../assets/sprite.svg';
import TodayListModal from '../TodayListModal/TodayListModal';
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal';
import DeleteModal from '../TodayListModal/DeleteModal';
import AddWaterModal from '../AddWaterModal/AddWaterModal';
import UserLogoutModal from '../UserLogoutModal/UserLogoutModal';
import {
  selectAddWaterModal,
  selectDailyNormaModal,
  selectDeletePortionModal,
  selectEditPortionModal,
  selectLogoutModal,
  selectSettingModal,
} from '../../redux/selectors';
import { closeModals } from '../../redux/modals/modalsSlice';

import { BtnClose, ModalStyled, Overlay, SvgBtnClose } from './Modal.styled';

const Modal = () => {
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
        {editPortionModal && <TodayListModal />}
        {deletePortionModal && <DeleteModal />}
        {addWaterModal && <AddWaterModal />}
        {settingModal && <h1>Setting Modal</h1>}
        {logoutModal && <UserLogoutModal />}

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
