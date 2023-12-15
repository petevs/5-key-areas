import NarrowContainer from "@/components/NarrowContainer";
import Link from 'next/link'

export default function page() {
    return (
        <NarrowContainer>
            <div className='flex flex-col gap-4'>

                <Link href='https://www.shaanpuri.com/posts/my-new-years-resolution-framework' target='_blank'>
                    New Year's Resolution Framework
                </Link>
                <Link href='https://twitter.com/ShaanVP/status/1347252452316254210' target='_blank'>
                    Twitter Post
                </Link>
                
            </div>
        </NarrowContainer>
    )
}