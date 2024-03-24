import { Tooltip } from "react-tooltip";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";


export const Chart = () => {
    const data = [
        { name: 'Січ', uv: 100, pv: 50 },
        { name: 'Лют', uv: 100, pv: 70 },
        { name: 'Бер', uv: 100, pv: 90 },
        { name: 'Кві', uv: 100, pv: 60 },
        { name: 'Тра', uv: 100, pv: 75 },
        { name: 'Чер', uv: 100, pv: 80 },
        { name: 'Лип', uv: 100, pv: 85 },
      ];
  return (
    <div>
        <LineChart width={600} height={350} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis domain={[0, 100]} />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="uv" stroke="green" yAxisId={0} />
        <Line type="monotone" dataKey="pv" stroke="blue" yAxisId={0} />
      </LineChart>
    </div>
  )
}

export default Chart