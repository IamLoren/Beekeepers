import { useDispatch, useSelector } from 'react-redux';

import {
  deletePortionThunk,
  fetchDailyPortionsThunk,
  fetchMonthlyPortionsThunk,
} from '../../redux/statisticData/operations';
import { selectSelectedItem } from '../../redux/selectors';
import { closeModals } from '../../redux/modals/modalsSlice';
import { formingTodayDate, getCurrentData } from '../../serviceFunctions/serviceFunctions';

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
    dispatch(deletePortionThunk(selectedItem.id)).then(() => {
      dispatch(closeModals());
      const today = new Date();
      const currentDate = getCurrentData();
      dispatch(fetchDailyPortionsThunk(formingTodayDate(today)));
      dispatch(fetchMonthlyPortionsThunk(currentDate));
    });
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
