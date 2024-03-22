import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-tooltip/dist/react-tooltip.css';
import {
  AccentSpan,
  CalendarWrapper,
  StyledDivWrapper,
  StyledTitle,
  StyledTooltip,
  Styledcircle,
} from './MonthStatsTable.styled';
import { useSelector } from 'react-redux';
import {
  selectDataOfRegistration,
  selectMonthData,
} from '../../redux/selectors';
import { fetchMonthlyPortionsThunk } from '../../redux/statisticData/operations.js';
import {
  convertCalendarMonth
} from '../../serviceFunctions/serviceFunctions.js';
import { changemonthlyPortions } from '../../redux/statisticData/statisticDataSlice.js';

const CustomTile = ({date}) => {
  const convertDate = new Date(date);
const day = convertDate.getDate();
const arrOfMonthData = useSelector(selectMonthData);
const tileContent = arrOfMonthData?.find((el) => el.day == day);
console.log(arrOfMonthData);
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
    left: '0',
    zIndex: '1',
    borderRadius: '50%',
  };

  return (
    <div style={tileStyle}>
      <div style={textStyle}>{`${tileContent?.consumedWaterRatio || 0}%`}</div>
      <Styledcircle style={circleStyle}></Styledcircle>
    </div>
  );
};

const MonthStatsTable = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState('');
  const [tooltipContent, setTooltipContent] = useState([]);
  const monthData = useSelector(selectMonthData);
  
  const registration = useSelector(selectDataOfRegistration);
  const userRegistration = new Date(registration);

  function changeMonth() {
    const currentMonthLabel = document.querySelector(
      '.react-calendar__navigation__label__labelText'
    ).textContent;
    setCurrentMonth(currentMonthLabel);
  }

  const [lastMonthLabel, setLastMonthLabel] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const currentMonthLabel = document.querySelector(
        '.react-calendar__navigation__label__labelText'
      ).textContent;
      if (currentMonthLabel !== lastMonthLabel) {
        setCurrentMonth(currentMonthLabel);
        try {
          const date = convertCalendarMonth(currentMonth);
          const { payload } = await dispatch(fetchMonthlyPortionsThunk(date));
          dispatch(changemonthlyPortions(payload));
          setLastMonthLabel(currentMonthLabel);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };
  
    fetchData();
  
  }, [dispatch, currentMonth, lastMonthLabel]);


  useEffect(() => {
    const navigationButtons = document.querySelectorAll(
      '.react-calendar__navigation__arrow'
    );
    navigationButtons.forEach((button) =>
      button.addEventListener('click', changeMonth)
    );

    return () => {
      navigationButtons.forEach((button) =>
        button.removeEventListener('click', changeMonth)
      );
    };
  }, []);

  const tiles = document.querySelectorAll('.react-calendar__tile');
  tiles.forEach((button) => {
    button.setAttribute('data-tooltip-id', 'my-tooltip');
    const content = button.querySelector('abbr').textContent;
    button.setAttribute('data-tip', `${content}`);
  });

  useEffect(() => {
    const tiles = document.querySelectorAll('.react-calendar__tile');
    tiles.forEach((button) => {
      const number = button.querySelector('abbr').textContent;
      const date = button.querySelector('abbr').getAttribute('aria-label');
      button.addEventListener('mouseenter', () =>
        setTooltipContent([number, date])
      );
      button.addEventListener('mouseleave', () => setTooltipContent(''));
    });
  }, []);

  function onChange(nextValue) {
    setValue(nextValue);
  }

  const [number, date] = tooltipContent;
  const [dailyNormaForTooltip, setdailyNormaForTooltip] = useState('');
  const [countPortionsForTooltip, setcountPortionsForTooltip] = useState('');
  const [percentForTooltip, setPercentForTooltip] = useState('');
  useEffect(() => {
    const DataForTootip = () => {
      const [day] = monthData.filter((d) => d.day === number);
      setdailyNormaForTooltip(day?.dailyNorma ? day.dailyNorma : '0');
      setcountPortionsForTooltip(day?.portionsCount ? day.portionsCount : '0');
      setPercentForTooltip(day?.consumedWaterRatio ? day.consumedWaterRatio : '0');
    };
    DataForTootip();
  });

  return (
    <CalendarWrapper>
      <StyledTitle>Month</StyledTitle>
      <Calendar
        onChange={onChange}
        views={['month', 'tenDays']}
        tileWidth={40}
        value={value}
        minDate={userRegistration}
        locale="en-GB"
        onActiveStartDateChange={({ activeStartDate }) =>
          setValue(activeStartDate)
        }
        tileContent={({ date, view }) => <CustomTile date={date} view={view} percentForTooltip={percentForTooltip}/>}
      />
      <StyledTooltip id="my-tooltip">
        <StyledDivWrapper>
          <p>
            <AccentSpan>{date}</AccentSpan>
          </p>
          <p>
            <span>Daily norma: </span>
            <AccentSpan> {dailyNormaForTooltip / 1000} L</AccentSpan>
          </p>
          <p>
            <span>Fulfillment of the daily norm: </span>
            <AccentSpan>{percentForTooltip}%</AccentSpan>
          </p>
          <p>
            <span>How many servings of water: </span>
            <AccentSpan>{countPortionsForTooltip}</AccentSpan>
          </p>
        </StyledDivWrapper>
      </StyledTooltip>
    </CalendarWrapper>
  );
};

export default MonthStatsTable;
