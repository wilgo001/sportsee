import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis, Text, ResponsiveContainer } from "recharts";
import { getDailyActivitySortByDate } from "../../../services/Services";
import "./DailyActivity.css";
import PropTypes from "prop-types";

function DailyActivity(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        getDailyActivitySortByDate().then(data => {
            setData(data);
        })
    })

    return(
        <div className={props.className}>
            <p className="graph-title">Activité quotidienne</p>
            <ResponsiveContainer width="100%" height="100%" >
                <BarChart data={data} margin={{top: 70, right: 30, left: 40, bottom: 20,}}>
                    <CartesianGrid strokeDasharray="1" vertical={false}/>
                    <XAxis dataKey="index" />
                    <YAxis orientation="right" tickCount={3} domain={['auto', 'auto']}/>
                    <Tooltip />
                    <Legend iconType='circle' wrapperStyle={{top: 10, right: 0}} width={300}/>
                    <Bar barSize={10} dataKey="kilogram" fill="var(--grey)" unit="kg"/>
                    <Bar barSize={10} dataKey="calories" fill="var(--main)" unit="kcal"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

DailyActivity.propTypes = {
    className: PropTypes.string
}

export default DailyActivity