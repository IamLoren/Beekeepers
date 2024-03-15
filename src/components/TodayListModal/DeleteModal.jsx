import { useDispatch, useSelector } from 'react-redux';

import { deletePortion } from '../../redux/statisticData/statisticDataSlice';
import { selectSelectedItem } from '../../redux/selectors';
import { closeModals } from '../../redux/modals/modalsSlice';

import {
  ButtonDelete,
  ButtonsWrapper,
  ModalWrapper,
  SubtitleModal,
  TitleModal,
} from './TodayListModal.styled';

const DeleteModal = () => {
  const dispatch = useDispatch();
  const selectedItem = useSelector(selectSelectedItem);

  const onDeleteClick = () => {
    dispatch(deletePortion(selectedItem.id));
    dispatch(closeModals());
  };

  return (
    <ModalWrapper className="delete-modal">
      <TitleModal>Delete entry</TitleModal>
      <SubtitleModal className="delete-subtitle">
        Are you sure you want to delete the entry?
      </SubtitleModal>
      <ButtonsWrapper>
        <ButtonDelete onClick={onDeleteClick}>Delete</ButtonDelete>
        <ButtonDelete
          className="cancel-btn"
          onClick={() => {
            dispatch(closeModals());
          }}
        >
          Cancel
        </ButtonDelete>
      </ButtonsWrapper>
    </ModalWrapper>
  );
};

export default DeleteModal;
