import { useCallback, useEffect } from 'react';
import ReactDom from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Fade } from '@mui/material';
// import { Zoom } from '@mui/material';
import sprite from '../../assets/sprite.svg';
import TodayListModal from '../TodayListModal/TodayListModal';
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal';
import DeleteModal from '../TodayListModal/DeleteModal';
import AddWaterModal from '../AddWaterModal/AddWaterModal';
import UserLogoutModal from '../UserLogoutModal/UserLogoutModal';
import SettingModal from '../SettingModal/SettingModal';
import {
  selectAddWaterModal,
  selectDailyNormaModal,
  selectDeletePortionModal,
  selectEditPortionModal,
  selectIsModalOpen,
  selectLogoutModal,
  selectSettingModal,
} from '../../redux/selectors';
import { closeModals } from '../../redux/modals/modalsSlice';
import {
  BtnClose,
  ModalContainer,
  ModalStyled,
  Overlay,
  SvgBtnClose,
} from './Modal.styled';

const Modal = () => {
  const dispatch = useDispatch();
  const dailyNormaModal = useSelector(selectDailyNormaModal);
  const editPortionModal = useSelector(selectEditPortionModal);
  const deletePortionModal = useSelector(selectDeletePortionModal);
  const addWaterModal = useSelector(selectAddWaterModal);
  const settingModal = useSelector(selectSettingModal);
  const logoutModal = useSelector(selectLogoutModal);
  const modalIsOpen = useSelector(selectIsModalOpen);

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
    <>
      <Overlay onClick={onBackdropClick}>
        <ModalContainer>
          <Fade in={modalIsOpen} timeout={1000}>
            {/* <Zoom in={modalIsOpen} timeout={900}> */}
            <ModalStyled>
              {dailyNormaModal && <DailyNormaModal />}
              {editPortionModal && <TodayListModal />}
              {deletePortionModal && <DeleteModal />}
              {addWaterModal && <AddWaterModal />}
              {settingModal && <SettingModal />}
              {logoutModal && <UserLogoutModal />}

              <BtnClose type="button" onClick={closeModal}>
                <SvgBtnClose>
                  <use href={`${sprite}#icon-close`} />
                </SvgBtnClose>
              </BtnClose>
            </ModalStyled>
          </Fade>
          {/* </Zoom> */}
        </ModalContainer>
      </Overlay>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
