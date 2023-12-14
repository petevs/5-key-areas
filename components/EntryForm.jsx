"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Slider } from "@/components/ui/slider"

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
import { Input } from "@/components/ui/input"
import { addNewEntry } from '@/actions/general'
import Link from "next/link"


const formSchema = z.object({
  health: z.number().min(1).max(5),
  work: z.number().min(1).max(5),
  play: z.number().min(1).max(5),
  love: z.number().min(1).max(5),
  selfRespect: z.number().min(1).max(5)
})


const inputs = [
    {
        name: 'health',
        label: 'Health',
        description: 'How\'s your body and brain feeling?',
    },
    {
        name: 'work',
        label: 'Work',
        description: 'How\'s your work life?',
    },
    {
        name: 'play',
        label: 'Play',
        description: 'Without this, u sad. How\'s your play?',
    },
    {
        name: 'love',
        label: 'Love',
        description: 'Without this, u lonely. Got friends? Family?',
    },
    {
        name: 'selfRespect',
        label: 'Self Respect',
        description: 'Without this, u don\’t like u. So, how ya feeling about yourself?',
    }
]


export default function EntryForm() {
  

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            health: 3,
            work: 3,
            play: 3,
            love: 3,
            selfRespect: 3
        },
      })

    async function onSubmit() {

        const values = form.getValues()

        await addNewEntry({
            health: values.health,
            work: values.work,
            play: values.play,
            love: values.love,
            self_respect: values.selfRespect
        })
        
    }

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>

        {
            inputs.map(({name, description, label}) => (
                <FormField
                    key={name}
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                <div className='flex justify-between items-center pb-4'>
                                    <span>{label}</span>
                                    <span>{field.value} / 5</span>
                                </div>
                            </FormLabel>
                            <FormControl>
                                <Slider 
                                    min={1}
                                    max={5} 
                                    step={1}
                                    value={[field.value]}
                                    onValueChange={([value]) => field.onChange(value)} 
                                />
                            </FormControl>
                            <FormDescription>
                                {description}
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            ))
        }
        <div className='flex justify-between'>
            <Button variant='ghost' asChild>
                <Link href='/dashboard'>
                    Cancel
                </Link>
            </Button>
            <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  )
}
