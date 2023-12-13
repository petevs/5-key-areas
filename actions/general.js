'use server'

import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'


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
    
    return true
}