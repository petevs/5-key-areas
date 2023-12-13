import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'



export default async function page() {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const {
        data: { user },
    } = await supabase.auth.getUser()

    const { data } = await supabase.auth.getSession()

    console.log(data)
    console.log(user)

    // if(!user) redirect('/signin')

    return (
        <div>
            I am the settings page
        </div>
    )
}