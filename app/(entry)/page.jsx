import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import EntryWrapper from './components/EntryWrapper'

export default function page() {
    return (
        <EntryWrapper
            progress={0}
            first
            nextLink='/step/1'
        >

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 w-full h-[calc(100dvh-11rem)]'>

                <div className='lg:flex hidden items-center justify-center'>
                    <Image src='/broken_promises.webp' width={450} height={450} alt='broken promises' className='rounded-lg shadow-xl' />
                </div>

                <div className='flex flex-col gap-4 lg:h-full h-[calc(100dvh-11rem)] overflow-y-scroll lg:py-20 py-10 px-10'>

                    <h1 className='text-5xl font-bold'>Resolutions Suck!</h1>
                    <h4 className='text-2xl font-bold'>If only there was a better way...</h4>

                    <p>
                            Ohhh snap it's almost 2024.
                        </p>

                        <p>
                            <Link 
                                href='https://www.shaanpuri.com/posts/my-new-years-resolution-framework' 
                                target='_blank'
                                className='text-blue-600 hover:underline'
                            >
                                Shaan here
                            </Link>
                            , AKA the framework don, to save you from another year of broken New Years Resolutions.
                        </p>

                        <p>
                            I think resolutions suck, <strong>80% of people give up on them by January 19th ("Quitters Day")</strong>.
                        </p>

                        <p>
                            ​So I went looking for a better alternative.
                        </p>
                        <p>
                            The method I'm about to show you I stole from a couple of guys who teach one of the most
                            popular classes at Stanford - the 
                            <a href='https://lifedesignlab.stanford.edu/' target='_blank' className='text-blue-600 hover:underline'> Life Design Lab</a>
                        </p>

                        <p>
                            The professors turned the class into a <a href='https://designingyour.life/' target='_blank' className='text-blue-600 hover:underline'>book</a>. And I turned their insights into a framework that I've used for the past 3 years for my new years resolutions.
                        </p>

                        <div>
                            <h3 className='text-xl font-bold'>Why do people do new years resolutions anyways?</h3>
                            <h4 className='text-lg font-bold'>{`-->`} because they want their life to improve</h4>
                        </div>

                        <p>
                        But what makes for a great life? What the heck are we supposed to be shooting for? 
                        <strong>Achieving something great? Having a great FAMILY? HELPING others? Big-ballin-shot-callin'?</strong>
                        </p>

                        <p>
                            ​The book starts with 3 big myths.
                        </p>

                        <h2 className='text-4xl font-bold pt-4'>The 3 Myths</h2>

                        <div>
                            <h3 className='text-xl font-bold'>
                                Myth #1:
                                <span className='font-normal'> If you're successful, then you'll be happy</span>
                            </h3>
                            <h3 className='text-xl font-bold'>
                                Reality:
                                <span className='font-normal'> Happiness comes from designing a life that works for you</span>
                            </h3>
                        </div>

                        <div>
                            <h3 className='text-xl font-bold'>
                                Myth #2:
                                <span className='font-normal'> A great life comes from following your passion</span>
                            </h3>
                            <h3 className='text-xl font-bold'>
                                Reality:
                                <span className='font-normal'> 80% of people don't know what they are passionate about. Passion is a result of having a well designed life, not the cause.</span>
                            </h3>
                        </div>

                        <div>
                            <h3 className='text-xl font-bold'>
                                Myth #3:
                                <span className='font-normal'> It's too late for me now</span>
                            </h3>
                            <h3 className='text-xl font-bold'>
                                Reality:
                                <span className='font-normal'> It's never too late. The best time to do it was 20 years ago... the second best time is today.</span>
                            </h3>
                        </div>

                        <h2 className='text-4xl font-bold pt-4'>OK - so what the heck is a "well designed life?"</h2>

                        <p>It turns out there's 5 key areas of life that matter:</p>

                        <ol className='ml-8'>
                            <li><strong>1. Health</strong> - your body & brain</li>
                            <li><strong>2. Work</strong> - the stuff you do</li>
                            <li><strong>3. Play</strong> - without this, u sad.</li>
                            <li><strong>4. Love (family, friends)</strong> - without this, u lonely.</li>
                            <li><strong>5. Self-respect</strong> - without this, u don’t like u.</li>
                        </ol>

                        <p>
                            So instead of coming up with grandiose big new year's resolutions, I sit down and reflect on how each of those areas are going in my life.
                        </p>

                        <Button variant='link' asChild className='self-end mt-4'>
                            <Link href='/test/1' className='text-right text-xl'>
                                Let me show you how I do it {`->`}
                            </Link>
                        </Button>
                        
                </div>

            </div>
        </EntryWrapper>

    )
}