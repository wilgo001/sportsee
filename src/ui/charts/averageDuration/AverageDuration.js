import { useEffect, useState } from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import { getAverageDuration } from "../../../services/Services";
import "./AverageDuration.css";

function AverageDuration(props) {
    const [data, setData] = useState({});
    useEffect(() => {
        getAverageDuration().then(data => {
            setData(data);
        })
    })
    return(
        <div className={props.className}>
            <p className="graph-title avdu-title">Durée moyenne des sessions</p>
            <ResponsiveContainer width="100%" height="100%" >
                <LineChart width={260} height={260} data={data}>
                    <Line type="monotone" dataKey="sessionLength" stroke="#fff" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AverageDuration;