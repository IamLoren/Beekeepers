import styled from 'styled-components';

export const TodayListTitle = styled.h2`
  color: var(--primary-text);
  font-size: 24px;
  font-family: 'Roboto Medium';

  margin: 0;
  padding-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 26px;
  }
`;

export const TodayList = styled.ul`
  height: 180px;
  overflow-y: auto;

  padding-right: 8px;
  margin: 0;
  margin-bottom: 12px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--percentage-text);
  }

  @media (min-width: 1440px) {
    width: 544px;
  }
`;

export const NoPortionsText = styled.p`
  color: var(--percentage-text);
  font-size: 20px;
  padding-bottom: 16px;
`;

export const TodayListButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: var(--secondary-text);
  background-color: transparent;
  border: none;

  padding: 0;

  font-size: 16px;
  font-family: 'Roboto Medium';

  &:hover,
  &:active {
    color: var(--accent-text);
    svg {
      stroke: var(--accent-text);
    }
  }

  svg {
    stroke: var(--secondary-text);
  }

  @media only screen and (min-width: 768px) {
    font-size: 18px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
