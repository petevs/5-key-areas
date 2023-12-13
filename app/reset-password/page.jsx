import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import ResetPasswordForm from '@/components/ResetPasswordForm'
import NarrowContainer from '@/components/NarrowContainer'

export default async function page() {


    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const {
        data: { user },
    } = await supabase.auth.getUser()

   if(!user) {
       return redirect('/auth/login')
    }


    return (
        <NarrowContainer innerClassName='max-w-lg'>
            <div>
                <div className='pb-8'>
                <h2 className="text-3xl font-bold">Reset your password</h2>
                </div>
                <ResetPasswordForm />
            </div>
        </NarrowContainer>
    )
}