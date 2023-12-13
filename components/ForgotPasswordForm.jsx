import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'


export default function ForgotPasswordForm({ searchParams }) {


    const sendForgotPassword = async (formData) => {
        'use server'
    
        const email = formData.get('email')

        const cookieStore = cookies()
        const supabase = createClient(cookieStore)
    
        const { error } = await supabase.auth.resetPasswordForEmail(
          email,
          {
            redirectTo: 'http://localhost:3000/auth/callback?next=/reset-password'
          })
    
        if (error) {
            console.log(error)
          return redirect('/forgot-password?message=Sorry we could not find your email.')
        }
    
        return redirect('/forgot-password/check-email')
      }

    return (
        <div className="flex flex-1 flex-col justify-center content-start px-6 py-12 lg:px-8">

            <div className='pb-8'>
                <h2 className="text-3xl font-bold">
                    Forgot your password?
                </h2>
                <div className='text-gray-500'>
                    Enter your email address and we will send you a reset link.
                </div>
            </div>


            <form
              className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
            >

              <label className="text-md" htmlFor="email">
                Email
              </label>
              <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="email"
                placeholder="you@example.com"
                required
              />


                <button 
                    className="bg-black text-white rounded-md px-4 py-2 text-foreground mb-2"
                    formAction={sendForgotPassword}
                >
                        Send reset link
                </button>
            </form>

            {searchParams?.message && (
                <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                    {searchParams.message}
                </p>
            )}
            
        </div>
    )
}