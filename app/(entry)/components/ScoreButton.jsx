'use client'

import { Minus, Plus } from 'lucide-react'
import { useContext } from 'react'
import { EntryContext } from './EntryProvider'
import { cn } from '@/lib/utils'


export default function ScoreButton({ area }) {

    const { scores, updateScore } = useContext(EntryContext)

    console.log(area)

    return (
        <div className='flex gap-4 items-center text-foreground'>
            <button 
                className={cn('border-2 text-gray-500 rounded-full w-10 h-10 flex items-center justify-center hover:border-primary hover:cursor-pointer', scores[area] === 1 && 'text-gray-100 border-gray-100 hover:border-gray-100 hover:cursor-default')}
                onClick={() => updateScore(area, scores[area] - 1)}
                disabled={scores[area] === 1}
            >
                <Minus size={16} />
            </button>

            <div className='font-light text-primary'>
                {scores[area]}
            </div>
            <button
                className={cn('border-2 text-gray-500 rounded-full w-10 h-10 flex items-center justify-center hover:border-primary hover:cursor-pointer', scores[area] === 5 && 'text-gray-100 border-gray-100 hover:border-gray-100 hover:cursor-default')}
                onClick={() => updateScore(area, scores[area] + 1)}
                disabled={scores[area] === 5}
            >
                <Plus size={16} />
            </button>
        </div>
    )
}