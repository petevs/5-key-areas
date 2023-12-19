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

            <div className='mx-auto max-w-7xl'>
                {children}
            </div>


            </div>         
                <div className='h-4 bg-secondary'></div>
                <div className='h-20 border-t flex justify-end px-10 items-center bg-white'>
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