import { Button } from '@/components/ui/button'
import { HelpCircle, Minus, Plus } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  


const items = [
    {
        title: 'Health',
        value: 4,
        tooltip: 'Your body and brain.'
    },
    {
        title: 'Work',
        value: 4,
        tooltip: 'The stuff you do to make money.'
    },
    {
        title: 'Play',
        value: 3,
        tooltip: "The stuff you do for fun. Without this you're sad."
    },
    {
        title: 'Love',
        value: 3,
        tooltip: "Family, friends. Without this you're lonely."
    },
    {
        title: 'Self-Respect',
        value: 4,
        tooltip: "How you feel about yourself. Without this you're depressed."
    },
]



export default function page() {
    return (
        <div className='flex flex-col gap-2 text-lg px-4'>
            <div className='text-sm font-semibold text-foreground'>Step 1</div>
            <h1 className='text-3xl font-medium tracking-tight'>Score the 5 Key Areas of Your Life</h1>
            <h4 className='text-lg font-light text-gray-500 pb-4'>
                Give each area a score from 1-5. Add a note if you'd like.
            </h4>

            {
                items.map((item, i) => (
                    <div 
                        key={item.title}
                        className={cn('py-6 text-xl grid grid-cols-[1fr_auto] items-center font-light', items.length - 1 !== i && 'border-b')}
                    >

                        <div className='flex flex-col gap-1'>
                            <div className='flex gap-2 items-center'>
                                {item.title} 
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <div className='flex items-center'>
                                                <HelpCircle size={18} className='text-gray-500' />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            {item.tooltip}
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <Button variant='ghost' className='self-start h-6 px-1'>
                                <div className='flex gap-1 items-center text-xs'>
                                    <Plus size={12} />
                                    Add Note
                                </div>
                            </Button>
                        </div>

                        <div className='flex gap-4 items-center text-foreground'>
                            <div className='border-2 rounded-full w-10 h-10 flex items-center justify-center'>
                                <Minus size={16} />
                            </div>
                            <div className='font-light text-primary'>
                                {item.value}
                            </div>
                            <div className='border-2 rounded-full w-10 h-10 flex items-center justify-center'>
                                <Plus size={16} />
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}