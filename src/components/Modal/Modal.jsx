import ReactDom from 'react-dom';
import sprite from '../../assets/sprite.svg';

import { useEffect, useState } from 'react';
import { BtnClose, ModalStyled, Overlay, SvgBtnClose } from './Modal.styled';

const Modal = ({ children, closeModal }) => {
  const [modalIsOpen] = useState(false);

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

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
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
