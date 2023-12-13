import ResetPasswordForm from '@/components/ResetPasswordForm'



export default async function page() {

    return (
        <div>
            <h4 className='text-xl font-bold py-4 border-t'>Reset your password</h4>
            <div className='max-w-xs'>
                <ResetPasswordForm />
            </div>
        </div>
    )
}