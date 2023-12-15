'use server'

import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { getNextContactDates } from '@/lib/helpers'
import { createServerClient } from '@supabase/ssr'
import { redirect } from 'next/dist/server/api-utils'


export const addNewEntry = async (data) => {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    
    const {
        data: { user },
    } = await supabase.auth.getUser()


    const { error } = await supabase
        .from('entries')
        .insert(
            {
                ...data,
                user_id: user.id,
            })


    if (error) throw error


    revalidatePath('/dashboard')
    
    return true
}



export const updateUserDetails = async (data) => {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    
    const {
        data: { user },
    } = await supabase.auth.getUser()

    try {
    
        const { data: updated, error } = await supabase
            .from('profiles')
            .update(
                {
                    ...data,
                })
            .eq('id', user.id)
            .select()

        console.log(updated)
        console.log(error)

    } catch(error) {
        throw error
    }

    revalidatePath('/dashboard')

    return true

}

    
export const updateNotifications = async (data) => {

    const datesToSend = getNextContactDates(data.contact_day_of_week, data.contact_frequency, data.date_now)

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const {
        data: { user },
    } = await supabase.auth.getUser()


    // delete all existing notifications
    const { error } = await supabase
        .from('scheduled_notifications')
        .delete()
        .eq('user_id', user.id)

    console.log(error)

    // insert new notifications

    const { insertError } = await supabase
        .from('scheduled_notifications')
        .insert(datesToSend.map(d => {
            return {
                user_id: user.id,
                send_date: d,
                sent: false,
            }
        }))

    console.log(insertError)

    // update user_settings
    const { updateError } = await supabase
        .from('user_settings')
        .update(
            {
                contact_day_of_week: data.contact_day_of_week,
                contact_frequency: data.contact_frequency,
            })
        .eq('user_id', user.id)


    revalidatePath('/dashboard')

}


export const deleteUser = async () => {

    const cookieStore = cookies()

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.SUPABASE_KEY,
        {
          cookies: {
            get(name) {
              return cookieStore.get(name)?.value
            },
            set(name, value, options) {
              cookieStore.set({ name, value, ...options })
            },
            remove(name, options) {
              cookieStore.set({ name, value: '', ...options })
            },
          },
        }
    )

    const {
        data: { user },
    } = await supabase.auth.getUser()

    // delete all existing notifications
    const { error: entriesError } = await supabase
        .from('entries')
        .delete()
        .eq('user_id', user.id)

    if (entriesError) throw entriesError

    // delete all existing notifications

    const { error: notificationsError } = await supabase
        .from('scheduled_notifications')
        .delete()
        .eq('user_id', user.id)

    if (notificationsError) throw notificationsError

    // sign out user first
    await supabase.auth.signOut()

    const { error } = await supabase.auth.admin.deleteUser(user.id)

    if (error) throw error

    redirect('/')

}




