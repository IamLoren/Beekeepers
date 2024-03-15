// import { Radio, RadioGroup } from '@mui/material';
import sprite from '../../assets/sprite.svg';

const SettingModal = () => {
  return (
    <div>
      <h1>Setting</h1>

      <form>
        <div>
          <h2>Your photo</h2>
          <img src="/" alt="avatar" />
          <button>
            <svg className="arrow-up" fill="none">
              <use href={sprite + '#icon-arrow-up-try'}></use>
            </svg>
            Upload a photo
          </button>
        </div>

        <h2>Your gender identity</h2>
        {/* <RadioGroup defaultValue="woman" name="gender" row>
          <Radio value="woman" label="Woman" />
          <Radio value="man" label="Man" />
        </RadioGroup> */}

        <label htmlFor="name">
          <h2>Your name</h2>
          <input id="name" type="text" placeholder="David" />
        </label>

        <label htmlFor="email">
          <h2>E-mail</h2>
          <input id="email" type="text" placeholder="david01@gmail.com" />
        </label>

        <h2>Password</h2>
        <label htmlFor="oldPassword">
          Outdated password:
          <input id="oldPassword" type="password" />
        </label>
        <label htmlFor="newPassword">
          New Password:
          <input id="newPassword" type="password" />
        </label>
        <label htmlFor="repeatPassword">
          Repeat new password:
          <input id="repeatPassword" type="password" />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default SettingModal;
