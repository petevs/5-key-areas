import EntryForm from "@/components/EntryForm";
import NarrowContainer from "@/components/NarrowContainer";

export default function page() {
    return (
        <NarrowContainer className='shadow rounded-lg border bg-white max-w-xl'>
            <h1 className='text-3xl font-bold py-4'>New Entry</h1>
                <EntryForm />
        </NarrowContainer>
    )
}