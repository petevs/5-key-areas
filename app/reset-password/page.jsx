import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function page({ searchParams }) {


    return (
        <div className="flex flex-1 flex-col justify-center content-start px-6 py-12 lg:px-8">

            <div className='pb-8'>
                <h2 className="text-3xl font-bold">
                    Reset Your Password
                </h2>
                <div className='text-gray-500'>
                    Enter your new password
                </div>
            </div>


            <form
              className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
            >

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
                    // formAction={updatePassword}
                >
                        Update password
                </button>
            </form>
            
        </div>
    )
}