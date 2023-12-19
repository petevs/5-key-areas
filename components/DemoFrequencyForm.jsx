'use client'

import { Label } from "@/components/ui/label"
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export default function DemoFrequencyForm() {
    return (
        <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-2'>
                <Label className='text-lg font-light'>Frequency</Label>
                <Select defaultValue='weekly'>
                    <SelectTrigger className='border-primary'>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                        <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectContent>
                </Select>
                <div className='text-sm text-muted-foreground'>
                    How often do you want to see a reminder to make an entry?
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <Label className='text-lg font-light'>Day of Week</Label>
                <Select defaultValue='monday'>
                    <SelectTrigger className='border-primary'>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="monday">Mondays</SelectItem>
                        <SelectItem value="tuesday">Tuesdays</SelectItem>
                        <SelectItem value="wednesday">Wednesdays</SelectItem>
                        <SelectItem value="thursday">Thursdays</SelectItem>
                        <SelectItem value="friday">Fridays</SelectItem>
                        <SelectItem value="saturday">Saturdays</SelectItem>
                        <SelectItem value="sunday">Sundays</SelectItem>
                    </SelectContent>
                </Select>
                <div className='text-sm text-muted-foreground'>
                    What day of the week do you want to be reminded to make an entry?
                </div>
            </div>
        </div>
    )
}