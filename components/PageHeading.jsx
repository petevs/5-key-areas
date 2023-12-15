import { cn } from '@/lib/utils'


export default function PageHeading({className, children}) {
    return (
        <h1 className={cn('text-3xl font-bold', className)}>{children}</h1>
    )
}