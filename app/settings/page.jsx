import ResetPasswordForm from '@/components/ResetPasswordForm'
import UsernameForm from '@/components/forms/UsernameForm'
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'

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
            <div className='pb-8'>
                <h4 className='text-xl font-bold py-4 border-t'>Username</h4>
                <UsernameForm initialUsername={profile.username} />
            </div>

            <h4 className='text-xl font-bold py-4 border-t'>Reset your password</h4>
            <div className='max-w-xs'>
                <ResetPasswordForm />
            </div>
        </div>
    )
}