import sendgrid from '@sendgrid/mail';
import client from '@sendgrid/client';
import NotificationEmail from '@/components/emails/NotificationEmail'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { render } from '@react-email/render';
import { send } from 'process';

export async function POST( request ) {

        const body = await request.json()

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

        const { data: sendNext } = await supabase
                .from('send_next')
                .select('*')


        // const emailHtml = render(NotificationEmail({ username: profile.username }))


        const personalizations = sendNext.map((item) => {
                return {
                        to: item.email,
                        from: {
                                email: 'noreply@5keyareas.com'
                        },
                        subject: 'Time for a new entry',
                        dynamic_template_data: {
                                username: item.username,
                        },
                }
            });


        
        sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

        try {
            await sendgrid.send({
                personalizations: personalizations,
                from: {
                    email: 'noreply@5keyareas.com',
                    name: '5 Key Areas'
                },
                templateId: 'd-4feff5d473f1435fae6acc98703d070f',
            });
            return Response.json({ message: 'Email sent successfully!' });
        } catch(error) {
            return Response.json({ message: error });
        }

}