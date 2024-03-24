import { useSelector } from 'react-redux';
import { Tooltip } from 'react-tooltip';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import {
  selectMonthlyPortions,
  selectSelectedMonth,
} from '../../redux/selectors';
import '../../css/variables.css';
import { StyledTitle } from './Chart.styled';
import { useEffect, useMemo } from 'react';
import { convertDateToMonth } from '../../serviceFunctions/serviceFunctions';

export const Chart = () => {
  const month = useSelector(selectSelectedMonth);
  const monthData = useSelector(selectMonthlyPortions);
    const convertMonth = convertDateToMonth(month);

  const data = useMemo(() => {
    return monthData.map((day) => ({
      name: day.day,
      uv: 100,
      pv: day.consumedWaterRatio,
    }));
  }, [monthData]);

  return (
    <div>
      <StyledTitle>{convertMonth}</StyledTitle>
      <LineChart
        width={600}
        height={350}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis domain={[0, 100]} />
        <Tooltip />
        <CartesianGrid stroke={'var(--tooltip-bg-color)'} />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="green"
          strokeWidth={3}
          yAxisId={0}
        />
        <Line
          type="monotone"
          dataKey="pv"
          stroke={`var(--secondary-text)`}
          strokeWidth={3}
          yAxisId={0}
        />
      </LineChart>
    </div>
  );
};

export default Chart;
