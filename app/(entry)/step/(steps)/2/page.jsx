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
import { Plus, Trash2 } from "lucide-react";
import EntryWrapper from '@/app/(entry)/components/EntryWrapper'
import NarrowContainer from '@/components/NarrowContainer'
import KeepDoingRows from '@/app/(entry)/components/KeepDoingRows'

export default function page() {
    return (
        <EntryWrapper
            nextLink='/step/3'
            prevLink='/step/1'
            progress={50}
        >
            <NarrowContainer className='max-w-3xl'>

                <div className='flex flex-col gap-4'>
                    <div className='text-sm font-semibold text-foreground'>Step 2</div>
                    <h1 className='text-4xl font-medium'>Decide What You'll Keep Doing</h1>
                    <h4 className='text-lg font-light text-gray-500 pb-4'>
                        What are you already doing well? What's working that you want to keep doing?
                    </h4>

                    <KeepDoingRows />

                </div>
            </NarrowContainer>
        </EntryWrapper>
    )
}