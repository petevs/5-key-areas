import Image from 'next/image'

export default function page() {
    return (
        <>
            <Image src='/broken_promises.webp' width={150} height={150} alt='broken promises' className='rounded-lg shadow-xl' />
                    
            <div>
                <h1 className='text-5xl font-bold text-center'>Resolutions Suck!</h1>
                <h4 className='text-2xl font-bold text-center'>If only there was a better way...</h4>
            </div>
        </>
    )
}