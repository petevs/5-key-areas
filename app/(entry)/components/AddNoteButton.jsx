'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { useContext } from "react"
import { EntryContext } from "./EntryProvider"
import { Button } from '@/components/ui/button'
import { Edit, Plus } from 'lucide-react'

export default function AddNoteButton({ areaKey }) {

    const { openNotesModal, notes } = useContext(EntryContext)

    return (
        <Button 
            variant='ghost' 
            className='self-start h-6 px-1'
            onClick={() => openNotesModal(areaKey)}
        >
            <div className='flex gap-1 items-center text-xs'>
                {
                    notes[areaKey] ?
                    <>
                        <Edit size={12} />
                        Edit Note
                    </>
                    :
                    <>                    
                        <Plus size={12} />
                        Add Note
                    </>
                }
            </div>
        </Button>
    )
}