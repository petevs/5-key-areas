import Link from 'next/link'

export default function page() {
    return (
        <div className='flex flex-col gap-4'>
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
                    </div>
        </div>
    )
}