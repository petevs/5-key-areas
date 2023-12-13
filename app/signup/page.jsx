import AuthForm from "@/components/AuthForm"
import NarrowContainer from "@/components/NarrowContainer"


export default function page({ searchParams }) {
    return (
        <NarrowContainer innerClassName='max-w-lg'>
            <AuthForm 
                formType='signup'
                searchParams={searchParams}
            />
        </NarrowContainer>
    )
}