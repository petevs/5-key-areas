'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { updatePassword } from '@/actions/auth'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"


const formSchema = z.object({
    password: z.string()
      .min(8, "Password must be at least 8 characters long") // Increase minimum length
      .max(100, "Password must be less than 100 characters long")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[^a-zA-Z0-9]/, "Password must contain at least one special character")
  });

export default function ResetPasswordForm() {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: ''
        },
      })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    async function onSubmit() {
          

        const password = form.getValues().password

          const { error } = await updatePassword(password)
  
          form.reset('')

    }


    return (
        <Form {...form}>
            <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field, fieldState }) => (
                        <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input 
                                type="password"
                                placeholder="********" 
                                {...field} 
                                autoComplete="off"
                                required
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