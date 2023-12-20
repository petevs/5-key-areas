'use client'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { useContext } from "react"
import { EntryContext } from "./EntryProvider"
  

export default function StartDoingRows() {

    const { start_doing, updateStartDoing } = useContext(EntryContext)

    const handleInputChange = (e, i) => {
        const new_start_doing = [...start_doing]
        new_start_doing[i].text = e.target.value
        updateStartDoing(new_start_doing)
    }
    
    const handleSelectChange = (e, i) => {
        const new_start_doing = [...start_doing]
        new_start_doing[i].area = e
        updateStartDoing(new_start_doing)
    }


    const handleDelete = (i) => {
        const new_start_doing = [...start_doing]
        new_start_doing.splice(i, 1)
        updateStartDoing(new_start_doing)
    }

    const addMore = () => {
        const new_start_doing = [...start_doing]
        new_start_doing.push({ area: '', text: '' })
        updateStartDoing(new_start_doing)
    }


    return (
            <>
                <div className='grid grid-cols-[auto_1fr_auto] gap-2 items-start'>
                    {
                        start_doing.map((item, i) => (
                            <>
                                <div>
                                    <Select 
                                        value={item.area}
                                        onValueChange={(e) => handleSelectChange(e, i)}
                                    >
                                        <SelectTrigger className="w-[130px] border-primary">
                                            <SelectValue placeholder='Select area' />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="health">Health</SelectItem>
                                                <SelectItem value="work">Work</SelectItem>
                                                <SelectItem value="play">Play</SelectItem>
                                                <SelectItem value="love">Love</SelectItem>
                                                <SelectItem value="self_respect">Self-Respect</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Input
                                        placeholder='What do you want to start doing?'
                                        className='border-primary'
                                        value={item.text}
                                        onChange={(e) => handleInputChange(e, i)}
                                    />
                                </div>

                                <div>
                                    <Button 
                                        variant='destructive' 
                                        className='px-3 border-primary'
                                        onClick={() => handleDelete(i)}
                                    >
                                        <Trash2 size={16} />
                                    </Button>
                                </div>
                            </>
                        ))
                    }

                    </div>

                    <Button 
                        variant='outline' 
                        className='border-primary self-end rounded-full h-8'
                        onClick={addMore}
                    >
                        <Plus size={14} className='mr-1' />
                        Add More
                    </Button>

            </>
    )
}