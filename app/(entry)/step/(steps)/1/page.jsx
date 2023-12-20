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
import NoteDialog from '@/app/(entry)/components/NoteDialog'
import AddNoteButton from '@/app/(entry)/components/AddNoteButton'


const items = [
    {
        title: 'Health',
        score_key: 'health_score',
        note_key: 'health_note',
        value: 4,
        tooltip: 'Your body and brain.'
    },
    {
        title: 'Work',
        score_key: 'work_score',
        note_key: 'work_note',
        value: 4,
        tooltip: 'The stuff you do to make money.'
    },
    {
        title: 'Play',
        score_key: 'play_score',
        note_key: 'play_note',
        value: 3,
        tooltip: "The stuff you do for fun. Without this you're sad."
    },
    {
        title: 'Love',
        score_key: 'love_score',
        note_key: 'love_note',
        value: 3,
        tooltip: "Family, friends. Without this you're lonely."
    },
    {
        title: 'Self-Respect',
        score_key: 'self_respect_score',
        note_key: 'self_respect_note',
        value: 4,
        tooltip: "How you feel about yourself. Without this you're depressed."
    },
]



export default function page() {
    return (
        <>
            <NoteDialog />
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
                                        <AddNoteButton
                                            areaKey={item.note_key}
                                        />
                                    </div>

                                    <ScoreButton area={item.score_key} />

                                </div>
                            ))
                        }

                    </div>
                </NarrowContainer>
            </EntryWrapper>
        </>
    )
}