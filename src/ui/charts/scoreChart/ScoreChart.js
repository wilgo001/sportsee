import { useEffect, useState } from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
import { getScoreInDegree, getScoreInPercent } from "../../../services/Services";
import "./ScoreChart.css";
import PropTypes from "prop-types";

  const dataFull = [
    {
      "name": "Group A",
      "value": 2400
    }
  ];

function ScoreChart(props) {
    const [data, setData] = useState(90);
    const [percent, setPercent] = useState(0);
    useEffect(() => {
        getScoreInDegree().then(data => {
            setData(data);
        })
        getScoreInPercent().then(data => {
          setPercent(data);
        })
    })
    return(
        <div className={props.className}>
          <p className="graph-title">Score</p>
          <p className="score-percentage">{percent + "%"}</p>
          <p className="score-text">de votre objectif</p>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie startAngle={90} endAngle={data} data={dataFull} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={70} fill="#ff0000" />
            </PieChart>
          </ResponsiveContainer>
        </div>
    )
}

ScoreChart.propTypes = {
  className: PropTypes.string
}

export default ScoreChart;