import { cn } from '@/lib/utils'

export default function NarrowContainer({className, innerClassName, children}) {
    return (
      <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
        <div className={cn("mx-auto max-w-7xl", innerClassName)}>{children}</div>
      </div>
    )
  }