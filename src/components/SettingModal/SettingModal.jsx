import { Radio, RadioGroup } from '@mui/material';
import sprite from '../../assets/sprite.svg';

const SettingModal = () => {
  return (
    <div>
      <h1>Setting</h1>

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

      <form>
        <h2>Your gender identity</h2>
        <RadioGroup defaultValue="woman" name="gender" row>
          <Radio value="woman" label="Woman" />
          <Radio value="man" label="Man" />
        </RadioGroup>

        <label htmlFor="">
          <h2>Your name</h2>
          <input type="text" placeholder="David" />
        </label>

        <label htmlFor="">
          <h2>E-mail</h2>
          <input type="text" placeholder="david01@gmail.com" />
        </label>

        <h2>Password</h2>
        <label htmlFor="">
          <p>Outdated password:</p>
          <input type="password" />
          <p>New Password:</p>
          <input type="password" />
          <p>Repeat new password:</p>
          <input type="password" />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default SettingModal;
