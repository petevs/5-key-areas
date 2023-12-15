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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useRouter } from "next/navigation"



const formSchema = z.object({
    health: z.number().min(1).max(5),
    health_note: z.string().optional(),
    health_keep_doing: z.string().optional(),
    health_start_doing: z.string().optional(),
    work: z.number().min(1).max(5),
    work_note: z.string().optional(),
    work_keep_doing: z.string().optional(),
    work_start_doing: z.string().optional(),
    play: z.number().min(1).max(5),
    play_note: z.string().optional(),
    play_keep_doing: z.string().optional(),
    play_start_doing: z.string().optional(),
    love: z.number().min(1).max(5),
    love_note: z.string().optional(),
    love_keep_doing: z.string().optional(),
    love_start_doing: z.string().optional(),
    self_respect: z.number().min(1).max(5),
    self_respect_note: z.string().optional(),
    self_respect_keep_doing: z.string().optional(),
    self_respect_start_doing: z.string().optional(),

})


const inputs = [
    {
        name: 'health',
        label: 'Health Score',
        description: 'How is your overall physical and mental well-being?',
        type: 'slider'
    },
    {
        name: 'health_note',
        label: 'Health Note',
        description: 'Please provide additional details about your physical and mental well-being.',
        type: 'textarea'
    },
    {
        name: 'health_keep_doing',
        label: 'Keep Doing for Health',
        description: 'What habits or practices are contributing positively to your health?',
        type: 'textarea'
    },
    {
        name: 'health_start_doing',
        label: 'Start Doing for Health',
        description: 'What new habits or practices do you plan to start to improve your health?',
        type: 'textarea'
    },
    {
        name: 'work',
        label: 'Work Score',
        description: 'How is your professional life and work situation?',
        type: 'slider'
    },
    {
        name: 'work_note',
        label: 'Work Note',
        description: 'Please provide additional details about your professional life and work situation.',
        type: 'textarea'
    },
    {
        name: 'work_keep_doing',
        label: 'Keep Doing for Work',
        description: 'What aspects of your work life are you currently satisfied with and want to maintain?',
        type: 'textarea'
    },
    {
        name: 'work_start_doing',
        label: 'Start Doing for Work',
        description: 'What new actions or changes do you plan to make in your work life?',
        type: 'textarea'
    },
    {
        name: 'play',
        label: 'Play Score',
        description: 'How is your recreational and leisure time? Its important for your happiness!',
        type: 'slider'
    },
    {
        name: 'play_note',
        label: 'Play Note',
        description: 'Please provide additional details about your recreational and leisure activities.',
        type: 'textarea'
    },
    {
        name: 'play_keep_doing',
        label: 'Keep Doing for Play',
        description: 'What activities or hobbies are bringing joy and relaxation into your life?',
        type: 'textarea'
    },
    {
        name: 'play_start_doing',
        label: 'Start Doing for Play',
        description: 'What new recreational activities or hobbies do you plan to explore?',
        type: 'textarea'
    },
    {
        name: 'love',
        label: 'Love Score',
        description: 'How are your relationships and connections with friends and family?',
        type: 'slider'
    },
    {
        name: 'love_note',
        label: 'Love Note',
        description: 'Please provide additional details about your relationships and connections.',
        type: 'textarea'
    },
    {
        name: 'love_keep_doing',
        label: 'Keep Doing for Love',
        description: 'What aspects of your relationships are you currently satisfied with and want to maintain?',
        type: 'textarea'
    },
    {
        name: 'love_start_doing',
        label: 'Start Doing for Love',
        description: 'What new actions or changes do you plan to make in your relationships?',
        type: 'textarea'
    },
    {
        name: 'self_respect',
        label: 'Self Respect Score',
        description: 'How do you perceive and feel about yourself? Self-respect matters!',
        type: 'slider'
    },
    {
        name: 'self_respect_note',
        label: 'Self Respect Note',
        description: 'How do you perceive and feel about yourself? Self-respect matters!',
        type: 'textarea'
    },
    {
        name: 'self_respect_keep_doing',
        label: 'Keep Doing for Self Respect',
        description: 'What habits or practices are contributing positively to your self-respect?',
        type: 'textarea'
    },
    {
        name: 'self_respect_start_doing',
        label: 'Start Doing for Self Respect',
        description: 'What new habits or practices do you plan to start to improve your self-respect?',
        type: 'textarea'
    }

];


export default function EntryForm() {

    const [step, setStep] = useState(0)
    const router = useRouter()
  

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            health: 3,
            health_note: '',
            health_keep_doing: '',
            health_start_doing: '',
            work: 3,
            work_note: '',
            work_keep_doing: '',
            work_start_doing: '',
            play: 3,
            play_note: '',
            play_keep_doing: '',
            play_start_doing: '',
            love: 3,
            love_note: '',
            love_keep_doing: '',
            love_start_doing: '',
            self_respect: 3,
            self_respect_note: '',
            self_respect_keep_doing: '',
            self_respect_start_doing: '',
        },
      })

    async function onSubmit() {

        const values = form.getValues()

        await addNewEntry({
            health: values.health,
            health_note: values.health_note,
            health_keep_doing: values.health_keep_doing,
            health_start_doing: values.health_start_doing,
            work: values.work,
            work_note: values.work_note,
            work_keep_doing: values.work_keep_doing,
            work_start_doing: values.work_start_doing,
            play: values.play,
            play_note: values.play_note,
            play_keep_doing: values.play_keep_doing,
            play_start_doing: values.play_start_doing,
            love: values.love,
            love_note: values.love_note,
            love_keep_doing: values.love_keep_doing,
            love_start_doing: values.love_start_doing,
            self_respect: values.self_respect,
            self_respect_note: values.self_respect_note,
            self_respect_keep_doing: values.self_respect_keep_doing,
            self_respect_start_doing: values.self_respect_start_doing,
        })

        router.push('/dashboard')

        
        
    }

    const determineActiveTab = () => {
        if (step < 4) {
            return 'health';
        } 

        if (step < 8) {
            return 'work';
        }

        if (step < 12) {
            return 'play';
        }

        if (step < 16) {
            return 'love';
        }

        if (step < 20) {
            return 'self_respect';
        }
    }
    

  return (

    <div>
        
        <Tabs 
            value={determineActiveTab()}
            className="w-[400px] pb-6"
        >
            <TabsList>
                <TabsTrigger value="health">Health</TabsTrigger>
                <TabsTrigger value="work">Work</TabsTrigger>
                <TabsTrigger value="play">Play</TabsTrigger>
                <TabsTrigger value="love">Love</TabsTrigger>
                <TabsTrigger value="self_respect">Self-Respect</TabsTrigger>
            </TabsList>
        </Tabs>

        
        


        <Form {...form}>
        <form className="space-y-8 px-6 py-12 border shadow rounded-lg" onSubmit={form.handleSubmit(onSubmit)}>
    
            <div className='h-36'>

                {
                    inputs.map(({name, description, label, type}, idx) => (
                        
                        step === idx && (
                        <FormField
                            key={name}
                            control={form.control}
                            name={name}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        <div className='flex justify-between items-center pb-4'>
                                            <span>{label}</span>
                                            {
                                                type === 'slider' && (
                                                    <span>{field.value} / 5</span>
                                                )
                                            }
                                        </div>
                                    </FormLabel>
                                    <FormControl>
                                        {
                                            type === 'textarea' ? (
                                                <Textarea 
                                                    {...field}
                                                    placeholder={description}
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            ) : (
                                                <Slider 
                                                    min={1}
                                                    max={5} 
                                                    step={1}
                                                    value={[field.value]}
                                                    onValueChange={([value]) => field.onChange(value)} 
                                                />
                                            )
                                        }
                                    </FormControl>
                                    {/* <FormDescription>
                                        {description}
                                    </FormDescription> */}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        )
                    ))
                }

            </div>


            <div className='flex justify-between'>
                {
                    step > 0 ? (
                        <Button 
                            variant='ghost' 
                            onClick={(e) => {
                                e.preventDefault()
                                setStep(step - 1)
                            }}
                        >
                            Previous
                        </Button>
                    )
                    :
                    <div></div>
                }
                {
                    step === inputs.length - 1 ? (
                        <Button 
                            type="submit"
                            onClick={(e) => {
                                e.preventDefault()
                                onSubmit()
                            }}
                        >
                            Submit
                        </Button>
                    )
                    :
                    <Button 
                        onClick={(e) => {
                            e.preventDefault()
                            setStep(step + 1)
                        }}
                    >
                        Next
                    </Button>
                }
            </div>
            {/* <div className='flex justify-between'>
                <Button variant='ghost' asChild>
                    <Link href='/dashboard'>
                        Previous
                    </Link>
                </Button>
                <div></div>
                <Button type="submit">Next</Button>
            </div> */}
        </form>
        </Form>
    </div>
  )
}
