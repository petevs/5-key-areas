import AuthForm from "@/components/AuthForm"
import NarrowContainer from "@/components/NarrowContainer"


export default function page({ searchParams }) {
    return (
        <NarrowContainer innerClassName='max-w-lg'>
            <div>
                <AuthForm 
                    formType='login'
                    searchParams={searchParams}
                />
            </div>
        </NarrowContainer>
    )
}