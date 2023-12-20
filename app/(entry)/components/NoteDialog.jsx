'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { use, useContext, useEffect } from "react"
import { EntryContext } from "./EntryProvider"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
  
const formSchema = z.object({
    note: z.string().min(5).max(10),
  })


export default function NoteDialog() {

    const { notes_modal_open, closeNotesModal, notes_modal_key, notes, updateNote } = useContext(EntryContext)

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            note: notes[notes_modal_key] || ""
        },
      })

    const onSubmit = (e) => {

            e.preventDefault()
            
            updateNote(
                notes_modal_key,
                form.getValues().note
            )

            form.reset({
                note: form.getValues().note
            })

        }


    useEffect(() => {
        form.reset({
            note: notes[notes_modal_key] || ""
        })
    },
    [notes_modal_key])



    return (
        <Dialog
            open={notes_modal_open}
            onOpenChange={closeNotesModal}
        >
            <DialogContent>
                <DialogHeader>
                <DialogTitle className='capitalize pb-4'>{notes_modal_key.replace('_note','').replace('_','-')} Note</DialogTitle>
                </DialogHeader>
                <Form {...form}>

                    <form className="space-y-8" onSubmit={onSubmit}>

                        <FormField
                            control={form.control}
                            name="note"
                            render={({ field, fieldState }) => (
                                <FormItem>
                                <FormControl>
                                    <Textarea className='border-primary' {...field} />
                                </FormControl>
                                <FormMessage>
                                    {fieldState.error?.message}
                                </FormMessage>
                                </FormItem>
                            )}
                        />

                        <div>
                            <Button 
                                type="submit" 
                                className='h-8 rounded-full' 
                                disabled={!form.formState.isDirty || form.formState.isSubmitting}
                            >
                                Save
                            </Button>
                            <Button 
                                type="reset" 
                                variant="ghost" 
                                className='ml-2 h-8 rounded-full' 
                                disabled={!form.formState.isDirty || form.formState.isSubmitting}
                                onClick={() => form.reset({ note: notes[notes_modal_key] || "" })}
                            >
                                Cancel
                            </Button>
                        </div>

                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}