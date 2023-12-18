import NarrowContainer from "@/components/NarrowContainer";
import Link from 'next/link'
import Image from 'next/image'
import DemoEntry from '@/components/DemoEntry'
import DemoEntryNotes from '@/components/DemoEntryNotes'
import DemoKeepStartDoing from '@/components/DemoKeepStartDoing'
import DemoFrequencyForm from '@/components/DemoFrequencyForm'
import { Button } from '@/components/ui/button'

export default function page() {
    return (
        <NarrowContainer className='py-20' innerClassName='max-w-3xl'>

            <div className='flex justify-center pb-10'>
                <Image src='/broken_promises.webp' width={300} height={300} alt='broken promises' className='rounded-lg shadow-xl' />
            </div>

            <div className='flex flex-col gap-4'>

                <h1 className='text-5xl font-bold text-center'>Resolutions Suck!</h1>
                <h4 className='text-2xl font-bold text-center'>If only there was a better way...</h4>

                <article className='text-lg flex flex-col gap-8 py-4'>

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

                    <h2 className='text-4xl font-bold'>The 3 Myths</h2>

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

                    <h2 className='text-4xl font-bold'>OK - so what the heck is a "well designed life?"</h2>

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

                    <h2 className='text-4xl font-bold'>The Scoring is Simple</h2>

                    <p>
                        <span className='text-2xl font-bold'>1</span> is the lowest score. 
                        <br />
                        <span className='text-sm text-gray-500'>That means you're not happy at all with how that area of your life is going.</span>
                    </p>

                    <p>
                        <span className='text-2xl font-bold'>5</span> is the highest score.
                        <br />
                        <span className='text-sm text-gray-500'> That means you feel great about how that area of your life is going.</span>
                    </p>

                    <div className='flex justify-center'>
                
                            <DemoEntry />

                    </div>




                    <div>
                        <h3 className='text-3xl font-bold italic'>It doesn't matter what the numbers are.</h3>
                        <h4 className='text-2xl font-semibold italic'>What matters is taking a minute to stop being so busy...using this as a moment to reflect and get a snapshot of where are you now.</h4>
                    </div>

                    <p>
                        <strong>***NOTE - 5 doesn't mean you "made it" or it's "done".</strong> It's all about momentum & trajectory. You can be at a 5 even if there's still more work to go.
                    </p>

                    <DemoEntryNotes />



                    <div>
                        <h3 className='text-3xl font-bold'>Now Decide, What's Next...</h3>
                    </div>

                    <DemoKeepStartDoing />
                    
                    
                    <div>
                        <h3 className='text-3xl font-bold'>And Set an Email Reminder to Do Another Check-In <br /> Each Week, Month or Quarter</h3>
                    </div>

                    <DemoFrequencyForm />

                    <h3 className='text-3xl font-bold'>Here's What the Email Reminder Looks Like</h3>

                    <div className='flex justify-center'>
                        <Image src='/email-screenshot.png' width={450} height={300} alt='email reminder' className='rounded-lg shadow-xl' />
                    </div>

                        <h3 className='text-3xl font-bold'>What Get's Measured, Gets Managed</h3>
                        <p>
                            In your dashboard you'll be able to see how you're doing over time, pinpoint trends and your tendencies and hopefully get a better sense of what's working and what's not. 
                        </p>

                    <div className='flex justify-center'>

                        <Image src='/dashboard-screenshot.png' width={750} height={300} alt='what gets measured gets managed' className='rounded-lg shadow-xl' />
                    </div>


                    <h3 className='text-3xl font-bold'>Try Something Different This Year - It's Free</h3>
                    <p>
                        Instead of making a big resolution that you'll give up on in 3 weeks, give this a shot. Focus on building a well designed life and mastering the 5 key areas and the rest will take care of itself.
                    </p>

                    <div className='flex justify-center'>
                        <Button size='lg' asChild>
                            <Link href='/signup'>
                                Get Started 
                            </Link>
                        </Button>
                    </div>
                
                </article>

            </div>
        </NarrowContainer>
    )
}