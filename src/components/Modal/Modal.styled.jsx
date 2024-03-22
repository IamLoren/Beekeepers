import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const ModalStyled = styled.div`
  height: auto;
  overflow-y: auto;
  z-index: 2000;
  border-radius: 10px;
  background-color: var(--white-text);
`;
export const BtnClose = styled.button`
  background-color: transparent;
  position: absolute;
  border: none;
  height: 24px;
  padding: 0;
  right: ${(props) => props.size || '12px'};
  top: ${(props) => props.size || '28px'};
  transition: scale 300ms ease-in-out;

  &:hover,
  &:focus {
    scale: 1.4;
  }

  @media (min-width: 768px) {
    right: ${(props) => props.size || '24px'};
    top: ${(props) => props.size || '36px'};
  }
`;

export const SvgBtnClose = styled.svg`
  width: 14px;
  height: 14px;
  stroke-width: 1.5px;
`;
