import {
  StyledBtnCancel,
  StyledBtnDelete,
  StyledText,
  StyledTitle,
} from './UserLogoutModal.styled';

const UserLogoutModal = () => {
  return (
    <div>
      <StyledTitle>Delete entry</StyledTitle>
      <StyledText>Are you sure you want to delete the entry?</StyledText>
      <StyledBtnDelete>Delete</StyledBtnDelete>
      <StyledBtnCancel>Cancel</StyledBtnCancel>
    </div>
  );
};

export default UserLogoutModal;
