import { useDispatch, useSelector } from 'react-redux';
import { deletePortion } from '../../redux/statisticData/statisticDataSlice';
import { selectSelectedItem } from '../../redux/selectors';
import {
  ButtonDelete,
  ButtonsWrapper,
  ModalWrapper,
  SubtitleModal,
  TitleModal,
} from './TodayListModal.styled';

const DeleteModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const selectedItem = useSelector(selectSelectedItem);

  const onDeleteClick = () => {
    dispatch(deletePortion(selectedItem.id));
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
