import NarrowContainer from "@/components/NarrowContainer"
import ForgotPasswordForm from "@/components/ForgotPasswordForm"


export default function page({ searchParams }) {
    return (
        <NarrowContainer innerClassName='max-w-lg'>
            <div>
                <ForgotPasswordForm />
            </div>
        </NarrowContainer>
    )
}