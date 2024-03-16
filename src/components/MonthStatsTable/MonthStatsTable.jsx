import { useState } from 'react';
import Calendar from 'react-calendar';


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
    backgroundColor:'transparent',
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
  }

  return (
    <div style={tileStyle}>
      <div style={textStyle}>{"0%"}</div>
      <div style={circleStyle}></div>
    </div>
  );
};

const MonthStatsTable = () => {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <Calendar
      onChange={onChange}
      views={['month', 'tenDays']}
        tileWidth={40}
      value={value}
      minDate={new Date(2024, 2, 16)}
      locale="en-GB" 
      tileContent={({ date, view }) => <CustomTile date={date} view={view} />}
    />
  );
}

export default MonthStatsTable 