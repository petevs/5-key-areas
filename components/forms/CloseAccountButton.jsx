'use client'

import { Button } from '@/components/ui/button'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { deleteUser } from '@/actions/general'
import { useState } from 'react'
  

export default function CloseAccountButton() {

    const [deleting, setDeleting] = useState(false)

    const handleDelete = async () => {
        setDeleting(true)
        await deleteUser()
        setDeleting(false)
    }


    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant='destructive' className='h-8 rounded-full'>
                    Close account
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                    <Button 
                        type="reset" 
                        variant="ghost" 
                        className='ml-2 h-8 rounded-full' 
                    >
                        Cancel
                    </Button>
                    <Button variant='destructive' className='h-8 rounded-full' onClick={handleDelete}>
                        {
                            deleting ? 'Deleting...' : 'Close account'
                        }
                    </Button>
            </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
      
    )
}