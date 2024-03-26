import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Tooltip } from 'react-tooltip';
import { useMediaQuery } from 'react-responsive';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import {
  selectMonthlyPortions,
  selectSelectedMonth,
} from '../../redux/selectors';
import '../../css/variables.css';
import { convertDateToMonth } from '../../serviceFunctions/serviceFunctions';
import { StyledTitle } from './Chart.styled';

const Chart = () => {
  const month = useSelector(selectSelectedMonth);
  const monthData = useSelector(selectMonthlyPortions);
  const convertMonth = convertDateToMonth(month);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });

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
        width={isMobile ? 280 : isTablet ? 704 : 600}
        height={isMobile ? 208 : isTablet ? 386 : 450}
        data={data}
        margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
      >
        <XAxis dataKey="name" tick={{ fill: `var(--secondary-text)` }} />
        <YAxis domain={[0, 100]} tick={{ fill: `var(--secondary-text)` }} />
        <Tooltip />
        <CartesianGrid stroke={'var(--percentage-text)'} />
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
