import ResetPasswordForm from '@/components/ResetPasswordForm'
import UsernameForm from '@/components/forms/UsernameForm'
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import CloseAccountButton from '@/components/forms/CloseAccountButton'

export default async function page() {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const {
        data: { user },
    } = await supabase.auth.getUser()

    const { data: profile, error } = await supabase
        .from('profiles')
        .select('username, avatar_url')
        .eq('id', user?.id)
        .single()


    return (
        <div>
            <div className='py-8 border-t'>
                <h4 className='text-xl font-bold pb-4'>Username</h4>
                <UsernameForm initialUsername={profile?.username} />
            </div>

            <div className='py-8 border-t'>
                <h4 className='text-xl font-bold pb-4'>Reset your password</h4>
                <div className='max-w-xs'>
                    <ResetPasswordForm />
                </div>
            </div>

            <div className='py-8 border-t'>
                <h4 className='text-xl font-bold pb-4'>Delete your account</h4>
                <div className='text-sm text-gray-500 pb-4'>
                    This cannot be undone. All of your data will be permanently deleted.
                </div>
                <CloseAccountButton />
            </div>
        </div>
    )
}