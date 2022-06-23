import { useEffect, useState } from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { getStats } from "../../../services/Services";

function StatChart(props) {    
    const [ data, setData ] = useState({})
    useEffect(() => {
        getStats().then(data => {
            setData(data);
        })
    })
    return(
        <div className={props.className}>
            <RadarChart height={260} width={260} cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind"/>
                <Radar name="Score" dataKey="value" fill="#ff0000" fillOpacity={0.6} />
            </RadarChart>
        </div>
    )

}

export default StatChart;