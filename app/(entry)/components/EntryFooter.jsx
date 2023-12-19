import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Progress } from "@/components/ui/progress"
import { cn } from '@/lib/utils'


export default function EntryFooter({ progress = 0, first, last, nextLink, prevLink}) {
    return (
        <>
            <Progress value={progress} className='rounded-none' />
            <div className={cn('h-20 border-t flex justify-between px-10 items-center bg-white', first && 'justify-end')}>

                {
                    !first &&
                    <Button
                        variant='ghost'
                        className='h-12 text-md underline'
                        asChild
                    >
                        <Link href={prevLink}>
                            Back
                        </Link>
                    </Button>
                }

                
                <Button
                    asChild
                    size='lg'
                    className={cn('h-12 text-md', first && 'bg-red-500 hover:bg-red-600')}
                >
                    <Link 
                        href={nextLink}
                    >
                        {
                            first ? 'Get Started' : last ? 'Submit' : 'Next'
                        }
                    </Link>
                </Button>
            </div>
        </>
    )
}