import {
  StyledRatioSectionContainer,
  StyledProgressBarContainer,
  StyledToday,
  StyledProgressNumbers,
  StyledAddBtn,
  StyledProgressBar,
  ProgressFill,
  CircleIndicator,
  MiddleIndicator,
} from './WaterRatioPanel.styled';

const WaterRatioPanel = () => {
  const progress = 30;

  const addWater = () => {};

  return (
    <StyledRatioSectionContainer>
      <StyledProgressBarContainer>
        <StyledToday>Today</StyledToday>
        <StyledProgressBar id="ml" max="100" value="0">
          <ProgressFill $progress={progress} />
          <CircleIndicator $progress={progress} />
        </StyledProgressBar>
        <StyledProgressNumbers>
          <span>0%</span>
          <MiddleIndicator>50%</MiddleIndicator>
          <span>100%</span>
        </StyledProgressNumbers>
      </StyledProgressBarContainer>
      <div>
        <StyledAddBtn type="button" onClick={addWater}>
          Add Water
        </StyledAddBtn>
      </div>
    </StyledRatioSectionContainer>
  );
};

export default WaterRatioPanel;
