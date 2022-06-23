import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis, Text } from "recharts";
import { getDailyActivitySortByDate } from "../../../services/Services";

function DailyActivity(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        getDailyActivitySortByDate().then(data => {
            setData(data);
        })
    })

    return(
        <div className={props.className}>
            <p>Activité quotidienne</p>
            <BarChart width={835} height={320} data={data} margin={{top: 70, right: 30, left: 40, bottom: 20,}}>
                <CartesianGrid strokeDasharray="1" vertical={false}/>
                <XAxis dataKey="index" />
                <YAxis orientation="right" tickCount={3} domain={['auto', 'auto']}/>
                <Tooltip />
                <Legend iconType='circle' wrapperStyle={{top: 10, right: 0}} width={300}/>
                <Bar barSize={10} dataKey="kilogram" fill="var(--grey)" unit="kg"/>
                <Bar barSize={10} dataKey="calories" fill="var(--main)" unit="kcal"/>
            </BarChart>
        </div>
    )
}

export default DailyActivity