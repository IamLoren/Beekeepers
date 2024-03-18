import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-tooltip/dist/react-tooltip.css';
import {
  AccentSpan,
  StyledDivWrapper,
  StyledTooltip,
} from './MonthStatsTable.styled';
import { useSelector } from 'react-redux';
import { selectDailyNorma } from '../../redux/selectors';

const CustomTile = ({ date, view }) => {
  const tileStyle = {
    textAlign: 'center',
    paddingTop: '10px',
    backgroundColor: 'transparent',
    position: 'relative',
  };

  const textStyle = {
    fontSize: '0.8em',
    color: 'skyblue',
    backgroundColor: 'transparent',
  };

  const circleStyle = {
    width: '34px',
    height: '34px',
    backgroundColor: 'white',
    position: 'absolute',
    top: '-27px',
    left: '1px',
    zIndex: '1',
    borderRadius: '50%',
  };

  const ratio = 100;
  return (
    <div style={tileStyle}>
      <div style={textStyle}>{`${ratio}%`}</div>
      <div style={circleStyle}></div>
    </div>
  );
};

const MonthStatsTable = () => {
  const dailyNorma = useSelector(selectDailyNorma);
  const [value, setValue] = useState(new Date());

  const tiles = document.querySelectorAll('.react-calendar__tile');
  tiles.forEach((button) => {
    button.setAttribute('data-tooltip-id', 'my-tooltip');
  });

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <div>
      <Calendar
        onChange={onChange}
        views={['month', 'tenDays']}
        tileWidth={40}
        value={value}
        minDate={new Date(2024, 2, 16)}
        locale="en-GB"
        onActiveStartDateChange={({ activeStartDate }) =>
          setValue(activeStartDate)
        }
        tileContent={({ date, view }) => <CustomTile date={date} view={view} />}
      />
      <StyledTooltip id="my-tooltip">
        <StyledDivWrapper>
          <p>
            <AccentSpan></AccentSpan>
            <AccentSpan></AccentSpan>
          </p>
          <p>
            <span>Daily norma: </span>
            <AccentSpan>{dailyNorma} L</AccentSpan>
          </p>
          <p>
            <span>Fulfillment of the daily norm:</span>
            <AccentSpan></AccentSpan>
          </p>
          <p>
            <span>How many servings of water:</span>
            <AccentSpan></AccentSpan>
          </p>
        </StyledDivWrapper>
      </StyledTooltip>
    </div>
  );
};

export default MonthStatsTable;
