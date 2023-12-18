import NarrowContainer from "@/components/NarrowContainer";
import Link from 'next/link'
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import SettingsNavBar from "./components/SettingsNavBar";
import { UserProvider } from "./components/UserProvider";
import PageHeading from "@/components/PageHeading";

export default async function layout({children}) {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if(!user) {
        return redirect('/signin')
    }



    return (
        <UserProvider profile={user}>
            <NarrowContainer innerClassName='max-w-3xl'>
                <PageHeading>Settings</PageHeading>

                <div className='pt-8'>

                    <SettingsNavBar />

                </div>
                <div className='py-8'>
                    {children}
                </div>
            </NarrowContainer>
        </UserProvider>
    )
}