import { useDispatch } from 'react-redux';
import {
  ButtonDelete,
  ButtonsWrapper,
  ModalWrapper,
  SubtitleModal,
  TitleModal,
} from './TodayListModal.styled';
import { deletePortion } from '../../redux/statisticData/statisticDataSlice';

const DeleteModal = ({ id, closeModal }) => {
  const dispatch = useDispatch();

  const onDeleteClick = () => {
    dispatch(deletePortion(id));
    closeModal();
  };

  return (
    <ModalWrapper className="delete-modal">
      <TitleModal>Delete entry</TitleModal>
      <SubtitleModal className="delete-subtitle">
        Are you sure you want to delete the entry?
      </SubtitleModal>
      <ButtonsWrapper>
        <ButtonDelete onClick={onDeleteClick}>Delete</ButtonDelete>
        <ButtonDelete className="cancel-btn" onClick={closeModal}>
          Cancel
        </ButtonDelete>
      </ButtonsWrapper>
    </ModalWrapper>
  );
};

export default DeleteModal;
