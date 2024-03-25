import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-tooltip/dist/react-tooltip.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../css/variables.css';
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
import { getCurrentData } from '../../serviceFunctions/serviceFunctions.js';
import { changeSelectedMonth, changemonthlyPortions } from '../../redux/statisticData/statisticDataSlice.js';
import '../../Internationalization/i18n';
import { useTranslation } from 'react-i18next';

const CustomTile = ({ date }) => {
  const convertDate = new Date(date);
  const day = convertDate.getDate();
  const arrOfMonthData = useSelector(selectMonthData);
  const [tileContent, setTileContent] = useState(null);
  useEffect(() => {
  const content = arrOfMonthData?.find((el) => el.day == day);
  setTileContent(content);
  }, [arrOfMonthData, day])

  const tileStyle = {
    textAlign: 'center',
    paddingTop: '15px',
    backgroundColor: 'transparent',
    position: 'relative',
  };

  const textStyle = {
    fontSize: '0.8em',
    color: 'skyblue',
    backgroundColor: 'transparent',
  };

  const circleStyle = {
    width: '37px',
    height: '37px',
    backgroundColor: 'var(--tooltip-bg-color)',
    position: 'absolute',
    top: '-29px',
    left: '-1px',
    zIndex: '1',
    borderRadius: '50%',
  };

  return (
    <div style={tileStyle}>
      <div style={textStyle}>{`${tileContent?.consumedWaterRatio || 0}%`}</div>
      <Styledcircle style={circleStyle}>
        <CircularProgressbar
          strokeWidth={8}
          value={tileContent?.consumedWaterRatio || 0}
          text={``}
          styles={buildStyles({
            strokeLinecap: 'butt',
            pathTransitionDuration: 0.5,
            pathColor: `${
              tileContent?.consumedWaterRatio < 99
                ? `var(--accent-text)`
                : 'green'
            }`,
            trailColor: `${
              tileContent?.consumedWaterRatio == 0 ? 'lightgray' : 'transparent'
            }`,
            backgroundColor: 'transparent',
          })}
        />
      </Styledcircle>
    </div>
  );
};

const MonthStatsTable = () => {
  const dispatch = useDispatch();
  const defaultCurrentDate = getCurrentData();
  const [selectMonth, setSelectMonth] = useState(defaultCurrentDate);
  const [tooltipContent, setTooltipContent] = useState([]);
  const monthData = useSelector(selectMonthData);
  const registration = useSelector(selectDataOfRegistration);
  const userRegistration = new Date(registration);
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { payload } = await dispatch(
          fetchMonthlyPortionsThunk(selectMonth)
        );
        dispatch(changemonthlyPortions(payload));
        dispatch(changeSelectedMonth(selectMonth));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch, selectMonth]);

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
      // button.addEventListener('mouseleave', () => setTooltipContent(''));
    });
  }, [selectMonth]);

  async function onChange(newDate) {
    console.log('newDate', newDate);
    const convert = new Date(newDate);
    const formattedDate = `${convert.getDate()}-${
      (convert.getMonth() + 1 < 10 ? '0' : '') + (convert.getMonth() + 1)
    }-${convert.getFullYear()}`;
    setSelectMonth(formattedDate);
    dispatch(changeSelectedMonth(formattedDate));
    try {
      const { payload } = await dispatch(
        fetchMonthlyPortionsThunk(formattedDate)
      );
      dispatch(changemonthlyPortions(payload));  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async function setMonth(activeStartDate) {
    const convert = new Date(activeStartDate);
    setActiveStartDate(activeStartDate);
    const formattedDate = `${convert.getDate()}-${
      (convert.getMonth() + 1 < 10 ? '0' : '') + (convert.getMonth() + 1)
    }-${convert.getFullYear()}`;
    setSelectMonth(formattedDate);
    dispatch(changeSelectedMonth(selectMonth));
    try {
      const { payload } = await dispatch(
        fetchMonthlyPortionsThunk(formattedDate)
      );
      dispatch(changemonthlyPortions(payload));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
      setPercentForTooltip(
        day?.consumedWaterRatio ? day.consumedWaterRatio : '0'
      );
    };
    DataForTootip();
  }, [selectMonth, monthData, number]);

  return (
    <CalendarWrapper>
      <StyledTitle>{t('month')}</StyledTitle>
      <Calendar
        onChange={onChange}
        views={['month', 'tenDays']}
        tileWidth={40}
        minDate={userRegistration}
        locale="en-GB"
        activeStartDate={activeStartDate}
        onActiveStartDateChange={({ activeStartDate }) =>
          setMonth(activeStartDate)
        }
        showNeighboringMonth={false}
        tileContent={({ date, view }) => <CustomTile date={date} view={view} />}
      />

      {percentForTooltip > 0 && (
        <StyledTooltip id="my-tooltip">
          <StyledDivWrapper>
            <p>
              <AccentSpan>
                {number}, {date?.substr(3, date.length - 8)}
              </AccentSpan>
            </p>
            <p>
              <span>{t('statistics.Daily norma')}: </span>
              <AccentSpan>
                {' '}
                {dailyNormaForTooltip / 1000} {t('L')}
              </AccentSpan>
            </p>
            <p>
              <span>{t('statistics.Fulfillment of the daily norm')}: </span>
              <AccentSpan>{percentForTooltip}%</AccentSpan>
            </p>
            <p>
              <span>{t('statistics.How many servings of water')}: </span>
              <AccentSpan>{countPortionsForTooltip}</AccentSpan>
            </p>
          </StyledDivWrapper>
        </StyledTooltip>
      )}
    </CalendarWrapper>
  );
};

export default MonthStatsTable;
