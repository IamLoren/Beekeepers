import sprite from '../../assets/sprite.svg';
import { EyePassBtn } from './SettingModal.styled';

const EyePassButton = ({ onClick, eyePass }) => {
  return (
    <EyePassBtn type="button" onClick={onClick}>
      {eyePass ? (
        <svg className="arrow-up" fill="none" width={16} height={16}>
          <use href={sprite + '#icon-eye'}></use>
        </svg>
      ) : (
        <svg className="arrow-up" fill="none" width={16} height={16}>
          <use href={sprite + '#icon-eye-slash'}></use>
        </svg>
      )}
    </EyePassBtn>
  );
};

export default EyePassButton;
