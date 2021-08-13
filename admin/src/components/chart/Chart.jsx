import "./chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart({title,data,dataKey, grid}) {
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#12AD2B"/>
                    <Line type="monotone" dataKey={dataKey} stroke="#12AD2B"/>
                    <Tooltip/>
                    {grid&&<CartesianGrid stroke="#F5F5F5" strokeDasharray="5 5"/>}
                    <Legend/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
