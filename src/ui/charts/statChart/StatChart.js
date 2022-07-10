import { useEffect, useState } from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { getStats } from "../../../services/Services";
import PropTypes from "prop-types";

function StatChart(props) {    
    const [ data, setData ] = useState({})
    useEffect(() => {
        getStats().then(data => {
            setData(data);
        })
    })
    return(
        <div className={props.className}>
            <ResponsiveContainer height="100%" width="100%" >
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name"/>
                    <Radar name="Score" dataKey="value" fill="#ff0000" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )

}

StatChart.propTypes = {
    className: PropTypes.string
}

export default StatChart;