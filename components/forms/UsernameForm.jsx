"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { updateUserDetails } from '@/actions/general'
import Link from "next/link"


const formSchema = z.object({
  username: z.string().min(3).max(10),
})


export default function UsernameForm({ initialUsername }) {
  

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: initialUsername || ""
        },
      })

    async function onSubmit() {

        const values = form.getValues()

        await updateUserDetails({
            username: values.username
        })

        form.reset({
            username: values.username
        })
    }

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>

            <FormField
                control={form.control}
                name="username"
                render={({ field, fieldState }) => (
                    <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                        <Input 
                            placeholder="Enter username" 
                            {...field} 
                            autoComplete="off"
                        />
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
                Submit
            </Button>
            <Button 
                type="reset" 
                variant="ghost" 
                className='ml-2 h-8 rounded-full' 
                disabled={!form.formState.isDirty || form.formState.isSubmitting}
            >
                Cancel
            </Button>
        </div>

      </form>
    </Form>
  )
}
