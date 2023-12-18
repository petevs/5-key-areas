'use client'

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Label } from '@/components/ui/label';
import { Dot } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Textarea } from "./ui/textarea";


const keepDoing = [
    {
        category: 'health',
        value: 'Keep doing personal training w/ JA. 6 days of exercise +clean diet = win (just keep going)'
    },
    {
        category: 'work',
        value: 'Keep doing content consistently. Long term, I want to teach millions of people about business'
    },
    {
        category: 'self-respect',
        value: 'keep doing my 10min mindset training every morning before I start work to put myself in a phenomenal state of mind.'
    }
]

const startDoing = [
    {
        category: 'love',
        value: 'start doing a blackout period from 530-730pm everyday where I have no phone, and just spend quality time with the family. Tell all my business partners about the blackout so they know not to reach me.'
    },
    {
        category: 'play',
        value: 'start doing reading instead of tiktok at night.'
    }

]





export default function DemoKeepStartDoing() {
    return (
        <>
        
            <div className='flex flex-col gap-2 space-y-8 px-6 py-12 border shadow rounded-lg'>


                        <h4 className='text-sm font-semibold'>For my high scores, I write a...<br /> <span className='font-bold text-3xl'>KEEP DOING</span></h4>
                            {
                                keepDoing.map(({ category, value }, idx) => (
                                    <div key={idx} className='grid grid-cols-[auto_1fr] gap-4 items-start'>
                                        <div>
                                            <Select defaultValue={category}>
                                                <SelectTrigger className="w-[130px]">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="health">Health</SelectItem>
                                                        <SelectItem value="work">Work</SelectItem>
                                                        <SelectItem value="play">Play</SelectItem>
                                                        <SelectItem value="love">Love</SelectItem>
                                                        <SelectItem value="self-respect">Self-Respect</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div>
                                            <Textarea
                                                rows={2}
                                                defaultValue={value}
                                            />
                                        </div>
                                    </div>
                                ))
                            }
            </div>


            <div className='flex flex-col gap-2 space-y-8 px-6 py-12 border shadow rounded-lg'>

                    <h4 className='text-sm font-semibold'>For my low scores, I write a...
                    <br /> <span className='font-bold text-3xl'>START DOING</span>
                    </h4>


                    {
                        startDoing.map(({ category, value }, idx) => (
                            <div key={idx} className='grid grid-cols-[auto_1fr] gap-4 items-start'>
                                <div>
                                    <Select defaultValue={category}>
                                        <SelectTrigger className="w-[130px]">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="health">Health</SelectItem>
                                                <SelectItem value="work">Work</SelectItem>
                                                <SelectItem value="play">Play</SelectItem>
                                                <SelectItem value="love">Love</SelectItem>
                                                <SelectItem value="self-respect">Self-Respect</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Textarea
                                        rows={2}
                                        defaultValue={value}
                                    />
                                </div>
                            </div>
                        ))
                    }

            </div>
        </>



    )
}