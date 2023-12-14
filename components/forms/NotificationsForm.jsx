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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { updateUserDetails } from '@/actions/general'
import Link from "next/link"


const formSchema = z.object({
    contact_frequency: z.enum(["weekly", "monthly", "quarterly", "yearly"]),
    contact_day_of_week: z.enum(["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]),
  });
  


export default function NotificationsForm({ initialSettings }) {

  console.log(initialSettings)
  

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            contact_frequency: initialSettings?.contact_frequency || 'weekly',
            contact_day_of_week: initialSettings?.contact_day_of_week || 'monday',
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
          name="contact_frequency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Frequency</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                How often do you want to see a reminder to make an entry?
              </FormDescription>
              <FormMessage />
            </FormItem>
            )}
        />

        <FormField
            control={form.control}
            name="contact_day_of_week"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Day of week</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue />
                    </SelectTrigger>
                    </FormControl>
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
                <FormDescription>
                    What day of the week do you want to be reminded to make an entry?
                </FormDescription>
                <FormMessage />
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
