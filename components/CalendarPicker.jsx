import { Button } from '@/components/ui/button'
import { CalendarIcon } from "@radix-ui/react-icons"
import { cn } from '@/lib/utils'
import { format } from 'date-fns'

export default function CalendarPicker() {

    const date = {
        from: new Date(),
        to: new Date()
    }

    return (
        <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[260px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
    )
}