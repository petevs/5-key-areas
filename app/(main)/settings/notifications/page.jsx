import NotificationsForm from '@/components/forms/NotificationsForm'
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import UpcomingDates from './components/UpcomingDates'

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

    const { count } = await supabase
        .from('scheduled_notifications')
        .select('send_date', { count: 'exact', head: true })
        .eq('user_id', user?.id)
        .not('sent', 'is', true)

    const { data: upcoming } = await supabase
        .from('scheduled_notifications')
        .select('send_date')
        .eq('user_id', user?.id)
        .not('sent', 'is', true)
        .limit(5)

    return (
        <div>
            <NotificationsForm initialSettings={settings} />
            <UpcomingDates 
                initialDates={upcoming} 
                totalCount={count}
                userID={user?.id}
            />
        </div>
    )
}