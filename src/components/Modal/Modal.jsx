import ReactDom from 'react-dom';
import sprite from '../../assets/sprite.svg';
import { useEffect } from 'react';
import { BtnClose, ModalStyled, Overlay, SvgBtnClose } from './Modal.styled';
import { useDispatch } from 'react-redux';
import { changeModalOpen } from '../../redux/normaCounter/normaCounterSlice';

const Modal = ({ children }) => {
  const dispatch = useDispatch();
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
  };

  return ReactDom.createPortal(
    <Overlay onClick={onBackdropClick}>
      <ModalStyled>
        {children}
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
