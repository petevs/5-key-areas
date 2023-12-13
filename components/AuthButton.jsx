import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { Button } from '@/components/ui/button'
import AvatarDropdown from '@/components/AvatarDropdown'

export default async function AuthButton() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: userDetails } = await supabase.from('profiles').select('username, avatar_url').eq('id', user?.id).single()


  return user ? (
    <AvatarDropdown userDetails={userDetails} user={user} />
  ) : (
    <div className='flex gap-2 text-sm font-medium'>
      <Button asChild variant='link' className='rounded-full'>
        <Link href="/signin">
              Sign in
        </Link>
      </Button>

      <Button asChild variant='secondary' className='rounded-full'>
        <Link href="/signup">
              Sign Up
        </Link>
      </Button>

    </div>
  )
}
