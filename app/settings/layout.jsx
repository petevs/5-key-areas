import NarrowContainer from "@/components/NarrowContainer";
import Link from 'next/link'
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function layout({children}) {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if(!user) {
        return redirect('/auth/login')
    }



    return (
        <NarrowContainer>
            <h1 className='text-3xl font-bold'>Settings</h1>

            <div className='pt-8'>

                <div className='flex gap-4'>
                    <Link href='/settings' className='pb-2 border-b-2 border-blue-500'>
                        General
                    </Link>
                </div>

            </div>
            <div className='py-8'>
                {children}
            </div>
        </NarrowContainer>
    )
}