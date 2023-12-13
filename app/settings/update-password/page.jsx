import ResetPasswordForm from './components/ResetPasswordForm';

export default async function page({ searchParams }) {

    return (
        <div className='max-w-md'>
            <ResetPasswordForm />
        </div>
    )
}