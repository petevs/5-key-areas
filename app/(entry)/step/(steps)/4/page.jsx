import ReminderForm from "@/app/(entry)/components/ReminderForm";
import EntryWrapper from "@/app/(entry)/components/EntryWrapper";
import NarrowContainer from "@/components/NarrowContainer";

export default function page() {
    return (
        <EntryWrapper
            nextLink='/step/5'
            prevLink='/step/3'
            progress={95}
        >
            <NarrowContainer className='max-w-3xl'>
        <div className='flex flex-col gap-4'>
            <div className='text-sm font-semibold text-foreground'>Step 4</div>
            <h1 className='text-4xl font-medium'>Set a Reminder to Check-In</h1>
            <h4 className='text-lg font-light text-gray-500 pb-4'>
                What gets measured gets managed. How often do you want a reminder to re-evaluate your progress?
            </h4>
            <ReminderForm />
        </div>
        </NarrowContainer>
    </EntryWrapper>
    )
}