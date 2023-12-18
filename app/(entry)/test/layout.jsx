import Header from "@/components/Header";
import NarrowContainer from "@/components/NarrowContainer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function layout({ children }) {
    return (
        <div>
            <Header />
            <div className='h-[calc(100dvh-10rem)] bg-gray-50'>
                <NarrowContainer className='py-20 h-full' innerClassName='max-w-3xl h-full'>
                    <div className='grid grid-flow-row gap-4 justify-center justify-items-center content-center items-center h-full'>
                        {children}
                    </div>
                </NarrowContainer>

            </div>
            <div className='h-20 border-t flex justify-between px-6 items-center'>
                <Button>Previous</Button>
                <Button
                    asChild
                >
                    <Link href='/test/1'>Next</Link>
                </Button>
            </div>
        </div>
    )
}