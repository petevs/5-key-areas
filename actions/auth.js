'use server'

import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
// import { render } from '@react-email/render';
// import sendgrid from '@sendgrid/mail';
// import ContactFormEmail from '@/components/emails/ContactFormEmail'
// import { data } from 'autoprefixer';

export const handleSignOut = async (path) => {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    await supabase.auth.signOut()
    revalidatePath(path)
}
