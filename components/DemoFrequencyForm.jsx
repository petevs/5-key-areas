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
        <div className='space-y-8 px-6 py-12 border shadow rounded-lg'>
            <div>
                <Label>Frequency</Label>
                <Select defaultValue='weekly'>
                    <SelectTrigger>
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
            <div>
                <Label>Day of Week</Label>
                <Select defaultValue='monday'>
                    <SelectTrigger>
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