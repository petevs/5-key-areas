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
        <div className='min-h-[calc(100dvh_-_73px)] bg-gray-50 py-10'>
            {children}
        </div>
    )
}