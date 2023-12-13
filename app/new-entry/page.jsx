import EntryForm from "@/components/EntryForm";
import NarrowContainer from "@/components/NarrowContainer";

export default function page() {
    return (
        <NarrowContainer
            innerClassName='max-w-lg'
        >
            <h1 className='text-3xl font-bold py-4'>New Entry</h1>
            <EntryForm />
        </NarrowContainer>
    )
}