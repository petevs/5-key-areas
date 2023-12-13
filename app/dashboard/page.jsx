import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import NarrowContainer from '@/components/NarrowContainer'
import Chart from '@/components/Chart'

export default async function page() {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if(!user) {
        return redirect('/signin')
    }

    const { data: entries } = await supabase
        .from('entries')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })



    return (
        <NarrowContainer>
            <Chart 
                data={entries}
            />
        </NarrowContainer>
    )
}