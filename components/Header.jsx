import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import AvatarDropdown from '@/components/AvatarDropdown'

export default function Header() {
    return (
        <div className='border-b p-4 flex justify-between items-center'>


            <div>
                <Link href='/'>
                    <h1 className='text-2xl font-bold'>5 Key Areas</h1>
                </Link>
            </div>


            <div className='flex gap-4 items-center'>
                <Button variant='ghost' className='rounded-full border' asChild>
                    <Link href='/new-entry'>
                        <div className='flex items-center gap-1'>
                            <Plus size={14} />
                            New Entry
                        </div>
                    </Link>
                </Button>

                <AvatarDropdown />
            </div>
        </div>
    )
}