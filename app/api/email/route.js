import sendgrid from '@sendgrid/mail';
import client from '@sendgrid/client';
import NotificationEmail from '@/components/emails/NotificationEmail'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { render } from '@react-email/render';
import { send } from 'process';

export async function POST( request ) {

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

        
        sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

        try {

            await sendgrid.send(sendNext.map((item) => {
                return {
                    to: item.email,
                    from: {
                            email: 'noreply@5keyareas.com',
                            name: '5 Key Areas'
                        },
                        subject: 'Time for a new entry',
                        html: render(NotificationEmail({ username: item.username }))
                }
                }
                ))

            return Response.json({ message: 'Email sent successfully!' });
            
        } catch(error) {
            return Response.json({ message: error });
        }

}