import NarrowContainer from "@/components/NarrowContainer";
import Link from 'next/link'

export default function layout({children}) {
    return (
        <NarrowContainer>
            <h1 className='text-3xl font-bold pb-4'>Settings</h1>

            <div className='py-2 border-t border-b'>
                <div className='flex gap-4'>
                    <Link href='/settings'>
                        General
                    </Link>
                    <Link href='/settings/update-password'>
                        Update password
                    </Link>
                </div>
            </div>
            <div className='py-8'>
                {children}
            </div>
        </NarrowContainer>
    )
}