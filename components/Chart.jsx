'use client'

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const CustomTooltip = ({ active, payload, label }) => {

    if (active && payload && payload.length) {
      return (
        <div className="bg-white shadow rounded-lg border px-4 py-2">
          <p className="text-xs text-gray-500 border-b pb-1 mb-2">{`${label}`}</p>
          {
            payload.map((item, index) => (
              <div key={index} className="text-xs capitalize flex justify-between gap-4">
                <span className='text-gray-500 uppercase'>{item.dataKey}</span>
                <span className='text-gray-900 font-bold'>{item.value}</span>
              </div>
            ))
          }

        </div>
      );
    }
  
    return null;
  };

  const keys = [
    {
        name: 'health',
        label: 'Health',
        color: '#49B6DD'
    },
    {
        name: 'work',
        label: 'Work',
        color: '#FF9FA0'
    },
    {
        name: 'play',
        label: 'Play',
        color: '#23BBA2'
    },
    {
        name: 'love',
        label: 'Love',
        color: '#FC032C'
    },
    {
        name: 'self_respect',
        label: 'Self-Respect',
        color: '#39BAD7'
    }
]

  const RenderLegend = (props) => {

    const {
        payload, onClick, shouldDisplayLine
    } = props

    return (
        <div className='flex justify-center gap-4'>
            {
                keys.map((key, index) => (
                    <div key={index} onClick={() => onClick({ dataKey: key.name })} className="cursor-pointer">
                        <span 
                            className={cn(
                                `text-sm font-bold text-${key.name}`,
                                !shouldDisplayLine(key.name) && 'text-gray-200'
                            )}
                        >
                            {key.label}
                        </span>
                    </div>
                ))
            }
        </div>
    );
};


export default function Chart({ data }) {

    const [selectedLines, setSelectedLine] = useState(keys.map(key => key.name))

    const handleLegendClick = (entry) => {
        if(selectedLines.includes(entry.dataKey)) {
            setSelectedLine(selectedLines.filter(key => key !== entry.dataKey))
        }

        else {
            setSelectedLine([...selectedLines, entry.dataKey])
        }
    };

    // Function to determine if a line should be displayed
    const shouldDisplayLine = (lineKey) => {
        return selectedLines ? selectedLines.includes(lineKey) : true
    };

    return (
        <ResponsiveContainer width="100%" height={350}>
            <LineChart width={600} height={300} data={data} className='w-full'>
                {
                    keys.filter(key => shouldDisplayLine(key.name)).map((key, index) => (
                        <Line key={index} type="monotone" dataKey={key.name} stroke={key.color} strokeWidth={3} />
                    ))
                }
                <YAxis ticks={[1,3,5]} axisLine={false} tickLine={false} domain={[0, 6]} />
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                    onClick={handleLegendClick} 
                    content={<RenderLegend 
                        keys={keys}
                        shouldDisplayLine={shouldDisplayLine}
                    />} 
                />
            </LineChart>
        </ResponsiveContainer>
    )
}