import { useEffect, useState } from "react";
import { Pie, PieChart } from "recharts";
import { getScore } from "../../../services/Services";

  const dataFull = [
    {
      "name": "Group A",
      "value": 2400
    }
  ];

function ScoreChart(props) {
    const [data, setData] = useState(90);
    useEffect(() => {
        getScore().then(data => {
            setData(data);
        })
    })
    return(
        <div className={props.className}>
            <PieChart width={260} height={260}>
                <Pie startAngle={90} endAngle={data} data={dataFull} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#ff0000" />
            </PieChart>
        </div>
    )
}

export default ScoreChart;