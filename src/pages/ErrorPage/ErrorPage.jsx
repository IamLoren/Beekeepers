import Container from '../../components/Container/Container';
import {
  StyledError,
  StyledLink,
  StyledNotFound,
  StyledText,
  StyledTextP,
  StyledType,
  StyledWrapper,
} from './ErrorPage.styled';

const ErrorPage = () => {
  return (
    <Container>
      <StyledWrapper>
        <StyledNotFound>
          <StyledError>
            <StyledType>404</StyledType>
          </StyledError>
          <StyledTextP>We are sorry, Page not found!</StyledTextP>
          <StyledText>
            {' '}
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </StyledText>
          <StyledLink to="/">Back To Homepage</StyledLink>
        </StyledNotFound>
      </StyledWrapper>
    </Container>
  );
};

export default ErrorPage;
