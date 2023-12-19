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

                <NarrowContainer className='h-full' innerClassName='h-full'>
                    <div className='grid gap-4 h-full content-center'>
                        {children}
                    </div>
                </NarrowContainer>

            </div>
            <div className='h-4 bg-secondary'></div>
            <div className='h-20 border-t flex justify-end px-10 items-center'>
                <Button
                    asChild
                    size='lg'
                    className='h-12 text-md bg-red-500 hover:bg-red-600'
                >
                    <Link href='/test/1'>Get Started</Link>
                </Button>
            </div>
        </div>
    )
}