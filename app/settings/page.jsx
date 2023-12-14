import ResetPasswordForm from '@/components/ResetPasswordForm'
import UsernameForm from '@/components/forms/UsernameForm'



export default async function page() {

    return (
        <div>
            <div className='pb-8'>
                <h4 className='text-xl font-bold py-4 border-t'>Username</h4>
                <UsernameForm />
            </div>

            <h4 className='text-xl font-bold py-4 border-t'>Reset your password</h4>
            <div className='max-w-xs'>
                <ResetPasswordForm />
            </div>
        </div>
    )
}