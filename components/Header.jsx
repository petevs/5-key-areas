import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
    return (
        <div className='border-b p-4 flex justify-between items-center'>
            <div>
                <h1 className='text-2xl font-bold'>5 Key Areas</h1>
            </div>
            <div>
                <Button variant='ghost' className='rounded-full border' asChild>
                    <Link href='/new-entry'>
                        <div className='flex items-center gap-1'>
                            <Plus size={14} />
                            New Entry
                        </div>
                    </Link>
                </Button>
            </div>
        </div>
    )
}