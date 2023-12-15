'use client'

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, ResponsiveContainer, Tooltip } from 'recharts';

export default function Chart({ data }) {



    return (
        <ResponsiveContainer width="100%" height={350}>
                <LineChart width={600} height={300} data={data} className='w-full'>
                <Line type="monotone" dataKey="health" stroke="#49B6DD" strokeWidth={3} />
                <Line type="monotone" dataKey="work" stroke="#FF9FA0" strokeWidth={3} />
                <Line type="monotone" dataKey="play" stroke="#23BBA2" strokeWidth={3} />
                <Line type="monotone" dataKey="love" stroke="#FC032C" strokeWidth={3} />
                <Line type="monotone" dataKey="self_respect" stroke="#39BAD7" strokeWidth={3} />

                <Tooltip />
                <XAxis dataKey="created_at" />
                <YAxis 
                    domain={[0, 6]}
                    ticks={[0, 1, 2, 3, 4, 5]}
                />
                <Legend />
            </LineChart>
        </ResponsiveContainer>
    )
}