import Header from "@/components/Header";
import NarrowContainer from "@/components/NarrowContainer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Progress } from "@/components/ui/progress"


export default function layout({ children }) {
    return (
        <div>
            <Header />
            <div className='h-[calc(100dvh-11rem)]'>

                <NarrowContainer className='py-20 h-full' innerClassName='h-full max-w-2xl'>
                    <div className='grid gap-4 h-full content-center'>
                        {children}
                    </div>
                </NarrowContainer>

            </div>
            <Progress value={20} className='rounded-none' />
            <div className='h-20 border-t flex justify-between px-10 items-center'>
                <Button
                    variant='ghost'
                    className='h-12 text-md underline'
                >
                    Back
                </Button>
                <Button
                    asChild
                    size='lg'
                    className='h-12 text-md'
                >
                    <Link href='/test/1'>Next</Link>
                </Button>
            </div>
        </div>
    )
}