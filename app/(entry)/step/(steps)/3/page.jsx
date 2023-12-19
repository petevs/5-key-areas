import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function page() {
    return (
        <div className='flex flex-col gap-4'>
            <div className='text-sm font-semibold text-foreground'>Step 3</div>
            <h1 className='text-4xl font-medium'>Decide What You'll Start Doing</h1>
            <h4 className='text-lg font-light text-gray-500 pb-4'>
                What is a new habit or behavior that will lead you to a better score?
            </h4>

            <div className='grid grid-cols-[auto_1fr] gap-4 items-start'>
                <div>
                    <Select>
                        <SelectTrigger className="w-[130px] border-primary">
                            <SelectValue placeholder='Select area' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="health">Health</SelectItem>
                                <SelectItem value="work">Work</SelectItem>
                                <SelectItem value="play">Play</SelectItem>
                                <SelectItem value="love">Love</SelectItem>
                                <SelectItem value="self-respect">Self-Respect</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Input
                        placeholder='What do you want to start doing?'
                        className='border-primary'
                    />
                </div>
            </div>

            <Button variant='outline' className='border-primary self-end rounded-full h-8'>
                <Plus size={14} className='mr-1' />
                Add More
            </Button>

        </div>
    )
}