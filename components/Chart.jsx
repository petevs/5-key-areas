'use client'

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, ResponsiveContainer, Tooltip } from 'recharts';

export default function Chart({ data }) {



    return (
        <ResponsiveContainer width="100%" height={350}>
            <LineChart width={600} height={300} data={data} className='w-full'>
                <Line type="monotone" dataKey="health" stroke="#8884d8" />
                <Line type="monotone" dataKey="work" stroke="#8884d8" />
                <Line type="monotone" dataKey="play" stroke="#8884d8" />
                <Line type="monotone" dataKey="love" stroke="#8884d8" />
                <Line type="monotone" dataKey="self_respect" stroke="#8884d8" />
                <Tooltip />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="created_at" />
                <YAxis />
                <Legend />
            </LineChart>
        </ResponsiveContainer>
    )
}