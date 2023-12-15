import NarrowContainer from "@/components/NarrowContainer";
import Link from 'next/link'
import Image from 'next/image'

export default function page() {
    return (
        <NarrowContainer className='py-20' innerClassName='max-w-3xl'>

            <div className='flex justify-center pb-10'>
                <Image src='/broken_promises.webp' width={125} height={125} alt='broken promises' className='rounded-lg shadow-xl' />
            </div>

            <div className='flex flex-col gap-4'>

                <h1 className='text-5xl font-bold'>Resolutions Suck! Staying on Track is Hard!</h1>
                <h4 className='text-2xl font-bold'>If only there was a better way...</h4>

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
                        ​So I went looking for alternatives. There had to be something better.
                    </p>
                    <p>
                        The method I'm about to show you I stole from a couple of guys who teach the most
                        popular class at Stanford, called the Life Design Lab.
                    </p>

                    <p>
                        Every year, the class fills up and there's a huge waitlist. Little Suzy and Billy at Stanford really want to learn how to live the good life.
                    </p>

                    <p>
                        The professors turned the class into a book (I give it a 6 outta 10, but there's some great nuggets in there). And I turned their insights into a framework that I've used for the past 3 years for my new years resolutions.
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
                        ​The book starts with 3 big myths (aka dumb shit people believe)
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

                    <p>It turns out there's ~4-5 main areas of life that matter:</p>

                    <ol className='ml-8'>
                        <li><strong>1. Health</strong> - your body & brain</li>
                        <li><strong>2. Work</strong> - the stuff you do</li>
                        <li><strong>3. Play</strong> - without this, u sad.</li>
                        <li><strong>4. Love (family, friends)</strong> - without this, u lonely.</li>
                        <li><strong>5. Self-respect</strong> - without this, u don’t like u.</li>
                    </ol>

                    <p>
                        Every year on Dec 31st, I sit down and reflect on how each of those areas are going in my life.
                    </p>

                    <div className='flex justify-center'>

                        <Image src='/life-dashboard.jpeg' width={500} height={500} alt='new years resolutions' className='rounded-lg shadow-xl' />

                    </div>

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


                    <div>
                        <h3 className='text-2xl font-bold'>It doesn't matter what the numbers are.</h3>
                        <h4 className='text-lg font-semibold'>What matters is taking a minute to stop being so busy...using this as a moment to reflect and get a snapshot of where are you now.</h4>
                    </div>


                </article>

                <Link href='https://www.shaanpuri.com/posts/my-new-years-resolution-framework' target='_blank'>
                    New Year's Resolution Framework
                </Link>

            </div>
        </NarrowContainer>
    )
}