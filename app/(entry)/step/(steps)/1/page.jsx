import { Button } from '@/components/ui/button'
import { HelpCircle, Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import EntryWrapper from '@/app/(entry)/components/EntryWrapper'
import NarrowContainer from '@/components/NarrowContainer'
import ScoreButton from '@/app/(entry)/components/ScoreButton'
  


const items = [
    {
        title: 'Health',
        key: 'health_score',
        value: 4,
        tooltip: 'Your body and brain.'
    },
    {
        title: 'Work',
        key: 'work_score',
        value: 4,
        tooltip: 'The stuff you do to make money.'
    },
    {
        title: 'Play',
        key: 'play_score',
        value: 3,
        tooltip: "The stuff you do for fun. Without this you're sad."
    },
    {
        title: 'Love',
        key: 'love_score',
        value: 3,
        tooltip: "Family, friends. Without this you're lonely."
    },
    {
        title: 'Self-Respect',
        key: 'self_respect_score',
        value: 4,
        tooltip: "How you feel about yourself. Without this you're depressed."
    },
]



export default function page() {
    return (
        <EntryWrapper
            nextLink='/step/2'
            prevLink='/'
            progress={25}
        >
            <NarrowContainer className='max-w-3xl'>

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

                                <ScoreButton area={item.key} />

                            </div>
                        ))
                    }

                </div>
            </NarrowContainer>
        </EntryWrapper>

    )
}