'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from "next/navigation"
import { handleSignOut } from '@/actions/auth'
  

export default function AvatarDropdown({ user, userDetails }) {

    const path = usePathname()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='rounded-full data-[state=open]:shadow'>
                <div className='flex items-center gap-2 border pl-4 pr-2 py-1 h-10 rounded-full'>
                    <Menu size={18} />
                    <div className='h-7 w-7 bg-gray-100 rounded-full flex items-center justify-center font-medium text-xs relative'>
                        <span className='text-gray-400 uppercase'>
                            {user?.email[0]}
                        </span>
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-48'>
                <div className='text-xs px-2 pt-2 text-gray-500'>Signed in as</div>
                <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                    <Link href='/dashboard' className='w-full hover:cursor-pointer'>
                        Dashboard
                    </Link>
                </DropdownMenuItem>
                
                <DropdownMenuItem asChild>
                    <Link href='/settings' className='w-full hover:cursor-pointer'>
                        Settings
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <button 
                        onClick={() => handleSignOut(path)} 
                        className='w-full text-left'
                    >
                        Sign out
                    </button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}