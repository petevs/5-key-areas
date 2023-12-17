'use client'

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Label } from '@/components/ui/label';
import { Dot } from "lucide-react";


const inputs = [
    {
        name: "health",
        label: "Health",
        keep: [
            'Keep doing personal training w/ JA.',
            '6 days of exercise +clean diet = win (just keep going)'
        ],
        start: [
            'Start doing more cardio',
            'Start doing more yoga'
        ],
    }
]


export default function DemoKeepStartDoing() {
    return (
        <div className='flex flex-col gap-4 space-y-8 px-6 py-12 border shadow rounded-lg'>


                <div>
                <h4 className='text-sm font-semibold'>For my high scores, I write a...<br /> <span className='font-bold text-3xl'>KEEP DOING</span></h4>
                </div>

                <div>
                    <h4 className='text-sm font-semibold'>For my low scores, I write a...
                    <br /> <span className='font-bold text-3xl'>START DOING</span>
                    </h4>
                </div>

            {/* <div className='flex gap-2 items-center'>
                <Dot size={24} />
                <span>Keep doing personal training w/ JA.</span>
            </div>
            <div>
            6 days of exercise +clean diet = win (just keep going)
            </div>
            <Button variant='ghost'>
                <Plus size={14} />
                <span>Add New</span>
            </Button> */}
        </div>
    )
}