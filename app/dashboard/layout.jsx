import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function layout({children}) {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if(!user) {
        return redirect('/signin')
    }


    return (
        <div className='bg-gray-200 min-h-[100dvh] py-10'>
            {children}
        </div>
    )
}