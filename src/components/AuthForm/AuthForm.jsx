import {
  FormWrapper,
  FormHeading,
  BtnLink,
  FormEl,
} from './AuthForm.styled';

const AuthForm = ({ children, on, handleSubmit, submit, errors }) => {
  const path = on ? `/signup` : '/signin';
  return (
    <FormWrapper>
      <FormHeading>{on ? 'Sign In' : 'Sign Up'}</FormHeading>
      <FormEl
        onSubmit={handleSubmit(submit)}
        $errorEmail={errors?.email}
        $errorPassword={errors?.password}
        $errorRepPassword={errors?.repPassword}
      >
        {children}
      </FormEl>
      <BtnLink to={path}>{on ? 'Sign Up' : 'Sign In'}</BtnLink>
    </FormWrapper>
  );
};

export default AuthForm;
