import { useState, useEffect} from 'react';
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
import {selectDataOfRegistration, selectMonthData } from '../../redux/selectors';
import {fetchMonthlyPortionsThunk} from '../../redux/statisticData/operations.js';
import { convertCalendarMonth, convertDate} from '../../serviceFunctions/serviceFunctions.js';
import { changemonthlyPortions } from '../../redux/statisticData/statisticDataSlice.js';

const CustomTile = () => {
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

  const ratio = 100;
  return (
    <div style={tileStyle}>
      <div style={textStyle}>{`${ratio}%`}</div>
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
  console.log(monthData);
  const registration = useSelector(selectDataOfRegistration);
  const formattedRegistration = convertDate(registration);
  const userRegistration = new Date(formattedRegistration);
 
  function changeMonth(){
    const currentMonthLabel = document.querySelector(".react-calendar__navigation__label__labelText").textContent;
    setCurrentMonth(currentMonthLabel);
  }

useEffect(() => {
  const fetchData = async () => {
    const currentMonthLabel = document.querySelector(".react-calendar__navigation__label__labelText").textContent;
    if (currentMonthLabel) {
     setCurrentMonth(currentMonthLabel);
      const date = convertCalendarMonth(currentMonth);
      try {
        const {payload} = await dispatch(fetchMonthlyPortionsThunk(date));
       dispatch(changemonthlyPortions(payload))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

    fetchData();
  
  }, [currentMonth, dispatch])
  
  useEffect(() => {
    const navigationButtons = document.querySelectorAll(".react-calendar__navigation__arrow");
    navigationButtons.forEach(button => button.addEventListener("click", changeMonth));

    return () => {
      navigationButtons.forEach(button => button.removeEventListener("click", changeMonth));
    };
  }, []);

  const tiles = document.querySelectorAll('.react-calendar__tile');
  tiles.forEach((button) => {
    button.setAttribute('data-tooltip-id', 'my-tooltip');
    const content = button.querySelector("abbr").textContent;
    button.setAttribute('data-tip', `${content}`);
  });

  useEffect(() => {
    const tiles = document.querySelectorAll('.react-calendar__tile');
    tiles.forEach((button) => {
      const number = button.querySelector('abbr').textContent;
      const date = button.querySelector('abbr').getAttribute('aria-label');
      // button.setAttribute('data-tip', [number, date]);
      button.addEventListener('mouseenter', () => setTooltipContent([number, date]));
      button.addEventListener('mouseleave', () => setTooltipContent(''));
    });
  }, []);

  function onChange(nextValue) {
    setValue(nextValue);
  }

  const [number, date] = tooltipContent;
const [dailyNormaForTooltip, setdailyNormaForTooltip] = useState('')
  useEffect(() => {
     const DataForTootip = () => {
    const day = monthData.length > 0 ? monthData.filter(d => d.day === number) : null;
    setdailyNormaForTooltip(day?.dailyNorma ? day.dailyNorma : '0' )
}
DataForTootip()
  })

  const [countPortionsForTooltip, setcountPortionsForTooltip] = useState('')
  useEffect(() => {
     const DataForTootip = () => {
    const day = monthData?.find(d => d.day === number);
    setcountPortionsForTooltip(day?.portionsCount ? day.portionsCount : '0' )
}
DataForTootip()
  })

  const [percentForTooltip, setPercentForTooltip] = useState('')
  useEffect(() => {
     const DataForTootip = () => {
    const day = monthData?.find(d => d.day === number);
    setPercentForTooltip(day?.portionsCount ? day.portionsCount : '0' )
}
DataForTootip()
  })

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
        tileContent={({ date, view }) => <CustomTile date={date} view={view} />}
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
