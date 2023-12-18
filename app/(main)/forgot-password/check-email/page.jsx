import NarrowContainer from "@/components/NarrowContainer"

export default function page() {
    return (
        <NarrowContainer innerClassName='max-w-lg'>
            <div className="text-center px-6 py-12 lg:px-8">
                <div className='pb-8'>
                    <h2 className="text-3xl font-bold">
                        Check your email
                    </h2>
                    <div className='text-gray-500'>
                        We've sent you a link to reset your password.
                    </div>
                </div>
            </div>
        </NarrowContainer>
    )
}