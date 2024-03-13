import styled from 'styled-components';

export const ItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;

  border-bottom: 1px solid var(--card-bg-color);

  button {
    background-color: transparent;
    border: none;
    padding: 0;
  }
`;

export const ContentItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  @media only screen and (min-width: 768px) {
    svg {
      width: 23px;
      height: 30px;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;

  button > svg.edit {
    stroke: var(--secondary-text);
  }
  button > svg.trash {
    stroke: var(--error-text);
  }
`;

export const AmountText = styled.p`
  color: var(--secondary-text);
  font-size: 18px;
  margin: 0;
  width: 60px;
`;

export const TimeText = styled.p`
  color: var(--primary-text);
  font-size: 12px;
  margin: 0;
`;