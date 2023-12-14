'use server'

import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { getNextContactDates } from '@/lib/helpers'


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



