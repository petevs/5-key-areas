import EntryWrapper from '@/app/(entry)/components/EntryWrapper'
import NarrowContainer from '@/components/NarrowContainer'
import StartDoingRows from '@/app/(entry)/components/StartDoingRows'

export default function page() {
    return (
        <EntryWrapper
        nextLink='/step/4'
        prevLink='/step/2'
        progress={75}
    >
        <NarrowContainer className='max-w-3xl'>
        <div className='flex flex-col gap-4'>
            <div className='text-sm font-semibold text-foreground'>Step 3</div>
            <h1 className='text-4xl font-medium'>Decide What You'll Start Doing</h1>
            <h4 className='text-lg font-light text-gray-500 pb-4'>
                What is a new habit or behavior that will lead you to a better score?
            </h4>

            <StartDoingRows />

        </div>
        </NarrowContainer>
    </EntryWrapper>
    )
}