import NotificationsForm from '@/components/forms/NotificationsForm'
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'

export default async function page() {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const {
        data: { user },
    } = await supabase.auth.getUser()

    const { data: settings, error } = await supabase
        .from('user_settings')
        .select('contact_frequency, contact_day_of_week')
        .eq('user_id', user?.id)
        .single()


    return (
        <div>
            <NotificationsForm initialSettings={settings} />
        </div>
    )
}