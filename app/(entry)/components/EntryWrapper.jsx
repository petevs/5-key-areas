import EntryFooter from './EntryFooter'

export default function EntryWrapper({ progress, first, last, nextLink, prevLink, children}) {
    return (
        <>
            <div className='h-[calc(100dvh-11rem)]'>
                {children}
            </div>
            <EntryFooter
                progress={progress}
                first={first}
                last={last}
                nextLink={nextLink}
                prevLink={prevLink}
            />
        </>
    )
}