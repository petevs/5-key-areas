import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import AuthButton from '@/components/AuthButton'
import Image from 'next/image'
import { Bebas_Neue } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Suspense } from 'react'


const rubik = Bebas_Neue({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })

export default function Header() {
    return (
        <div className='sticky top-0 bg-white border-b p-4 flex justify-between items-center'>


            <div>
                <Link href='/'>
                    <div className='flex gap-2 items-center'>
                        <Image src='/logo.png' width={24} height={24} alt='Home Logo' />
                        <span className={cn('text-2xl pt-1', rubik.className)}>5 Key Areas</span>
                    </div>
                </Link>
            </div>


            <div className='flex gap-4 items-center'>
                <Suspense fallback={<div className='h-10'></div>}>
                    <AuthButton />
                </Suspense>
            </div>
        </div>
    )
}