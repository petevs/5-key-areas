'use client'

import { usePathname } from "next/navigation"
import Link from 'next/link'
import { cn } from '@/lib/utils'


export default function SettingsNavBar() {

    const pathname = usePathname()

    return (
        <div className='flex gap-8 text-sm'>
            <NavLink href='/settings' pathname={pathname}> 
                General
            </NavLink>
            <NavLink href='/settings/notifications' pathname={pathname}>
                Notifications
            </NavLink>
        </div>
    )
}

const NavLink = ({href, pathname, children}) => {

    return (
        <Link 
            href={href}
            className={cn('pb-2 border-b-2 border-transparent', {
                'border-blue-500': href === pathname
            })}
        >
            {children}
        </Link>
    )

}