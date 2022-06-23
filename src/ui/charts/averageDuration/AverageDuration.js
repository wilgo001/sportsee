import { useEffect, useState } from "react";
import { Line, LineChart } from "recharts";
import { getAverageDuration } from "../../../services/Services";

function AverageDuration(props) {
    const [data, setData] = useState({});
    useEffect(() => {
        getAverageDuration().then(data => {
            setData(data);
        })
    })
    return(
        <div className={props.className}>
            <LineChart width={260} height={260} data={data}>
                <Line type="monotone" dataKey="sessionLength" stroke="#fff" strokeWidth={2} />
            </LineChart>
        </div>
    )
}

export default AverageDuration;