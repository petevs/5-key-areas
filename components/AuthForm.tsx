import Link from 'next/link'
import { headers, cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'


interface Props {
    searchParams: { message: string },
    formType: 'login' | 'signup'
}



export default function AuthForm(props: Props) {

    const { searchParams, formType } = props

    const signIn = async (formData: FormData) => {
        'use server'
    
        const email = formData.get('email') as string
        const password = formData.get('password') as string
        const cookieStore = cookies()
        const supabase = createClient(cookieStore)
    
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
    
        if (error) {
          return redirect('/signin?message=Could not authenticate user')
        }
    
        return redirect('/')
      }
    
      const signUp = async (formData: FormData) => {
        'use server'
    
        const origin = headers().get('origin')
        const email = formData.get('email') as string
        const password = formData.get('password') as string
        const cookieStore = cookies()
        const supabase = createClient(cookieStore)
    
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${origin}/auth/callback`,
          },
        })
    
        if (error) {
          console.log(error)
          return redirect('/signup?message=Could not authenticate user')
        }
    
        return redirect('/signup?message=Check email to continue sign in process')
      }
    


    return (
        <div className="flex flex-1 flex-col justify-center content-start px-6 py-12 lg:px-8">

            <div className='pb-8'>
              <h2 className="text-3xl font-bold">
                {
                    formType === 'login' ? 'Sign in to your account' : 'Create an account'
                }
              </h2>
              {
                  formType === 'login' ? (
                      <div className='text-gray-500'>
                          Don't have an account? 
                          <Link href="/signup" className='ml-1 font-medium text-blue-600'>
                              Sign up
                          </Link>
                      </div>
                  ) : (
                      <div className='text-gray-500'>
                          Already have an account? 
                          <Link href="/signin" className='ml-1 font-medium text-blue-600'>
                              Sign in
                          </Link>
                      </div>
                  )
                }
            </div>

            <form
              className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
              action={signIn}
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
              <label className="text-md" htmlFor="password">
                Password
              </label>
              <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                type="password"
                name="password"
                placeholder="••••••••"
                required
              />

                        <button 
                          className="bg-black text-white rounded-md px-4 py-2 text-foreground mb-2"
                          formAction={formType === 'login' ? signIn : signUp}
                        >
                            {
                                formType === 'login' ? 'Sign in' : 'Sign up'
                            }
                      </button>

              {searchParams?.message && (
                <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                  {searchParams.message}
                </p>
              )}

            </form>
          </div>
    )
}