import EntryWrapper from "@/app/(entry)/components/EntryWrapper"
import AuthForm from "@/components/AuthForm"
import NarrowContainer from "@/components/NarrowContainer"
import ClientAuthForm from "@/app/(entry)/components/ClientAuthForm"

export default function page() {
    return (
        <EntryWrapper
            nextLink='/dashboard'
            prevLink='/step/4'
            progress={99}
            last
        >
            <NarrowContainer className='max-w-3xl'>
            <div className='flex flex-col gap-4'>
                <div className='text-sm font-semibold text-foreground'>Step 5</div>
                <ClientAuthForm />
            </div>
            </NarrowContainer>
        </EntryWrapper>
    )
}