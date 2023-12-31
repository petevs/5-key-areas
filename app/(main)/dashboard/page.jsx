import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import NarrowContainer from '@/components/NarrowContainer'
import Chart from '@/components/Chart'
import PageHeading from '@/components/PageHeading'
import CalendarPicker from '@/components/CalendarPicker'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Briefcase, Dribbble, Heart, HeartHandshake, HeartPulse, Plus, UserCheck } from 'lucide-react'
import DashboardNav from './components/DashboardNav'
import { format } from 'path'

export default async function page() {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if(!user) {
        return redirect('/signin')
    }

    const { data: entries } = await supabase
        .from('entries')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: true })


    const formattedEntries = entries.map(entry => { 
        return {
            ...entry,
            created_at: new Date(entry.created_at).toLocaleDateString(
                'en-US', {
                    month: 'short',   // "Mmm" format
                    day: 'numeric',   // "dd" format
                }
            )
        }
    })

    const dummyData = [
        {
            name: 'Health',
            value: 4,
            change: '+1 from last month',
            icon: <HeartPulse className='h-4 w-4 text-muted-foreground' />
        },
        {
            name: 'Work',
            value: 3,
            change: '+1 from last month',
            icon: <Briefcase className='h-4 w-4 text-muted-foreground' />
        },
        {
            name: 'Play',
            value: 2,
            change: '+1 from last month',
            icon: <Dribbble className='h-4 w-4 text-muted-foreground' />
        },
        {
            name: 'Relationships',
            value: 1,
            change: '+1 from last month',
            icon: <HeartHandshake className='h-4 w-4 text-muted-foreground' />
        },
        {
            name: 'Self-Respect',
            value: 5,
            change: '+1 from last month',
            icon: <UserCheck className='h-4 w-4 text-muted-foreground' />
        }
    ]


    return (
            <NarrowContainer className='shadow rounded-lg border bg-white'>

                <div className='md:flex md:justify-between grid grid-flow-row gap-4 items-center pb-8'>

                    <PageHeading>Dashboard</PageHeading>

                    <div className='flex items-center gap-2'>
                        <CalendarPicker />
                        <Button
                            className='h-9 px-4 py-2'
                            asChild
                        >
                            <Link href='/dashboard/new-entry'>
                                <div className='flex items-center gap-1'>
                                    <Plus size={14} />
                                    New Entry
                                </div>
                            </Link>
                        </Button>
                    </div>

                </div>


                <div className="pb-4">
                    <DashboardNav />
                </div>

                <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4 pb-4'>

                    {
                        dummyData.map(({ name, value, change, icon }) => (
                            <div className='rounded-xl border bg-card text-card-foreground shadow'>
                                <div className='p-6 flex flex-row items-center justify-between space-y-0 pb-2'>
                                    <h3 className='tracking-tight text-sm font-medium'>{name}</h3>
                                    {icon}
                                </div>
                                <div className="p-6 pt-0">
                                    <div className="text-2xl font-bold">
                                        {value}
                                    </div>
                                    <p className="text-xs text-muted-foreground">{change}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>

                <div className='grid lg:grid-cols-[2fr,1fr] grid-cols-1 gap-4'>

                    <div className='border rounded-lg shadow'>
                        <div className="flex flex-col space-y-1.5 p-6">
                            <h3 className='font-semibold leading-none tracking-tight'>Overview</h3>
                        </div>
                        <div className="p-6 pt-0 pl-2">
                            <Chart 
                                data={formattedEntries}
                            />
                        </div>
                    </div>

                    <div className='border rounded-lg shadow'>
                        <div className="flex flex-col space-y-1.5 p-6">
                            <h3 className='font-semibold leading-none tracking-tight'>Entries</h3>
                            <p className="text-sm text-muted-foreground pb-2">You've made {formattedEntries.length} entries, so far.</p>

                            <div className='max-h-80 overflow-y-scroll'>

                                <div className='flex flex-col'>
                                    {
                                        formattedEntries.map((entry) => (
                                            <div key={entry.id} className="grid grid-flow-row gap-1 border-b py-4 hover:cursor-pointer">
                                                <div className="text-sm font-medium">{entry.created_at}</div>
                                                <div className='flex gap-4'>
                                                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                                                        <Heart className='h-4 w-4 inline-block' />
                                                        {entry.health}
                                                    </div>
                                                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                                                        <Briefcase className='h-4 w-4 inline-block' />
                                                        {entry.work}
                                                    </div>
                                                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                                                        <Dribbble className='h-4 w-4 inline-block' />
                                                        {entry.play}
                                                    </div>
                                                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                                                        <HeartHandshake className='h-4 w-4 inline-block' />
                                                        {entry.love}
                                                    </div>
                                                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                                                        <UserCheck className='h-4 w-4 inline-block' />
                                                        {entry.self_respect}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>
                        </div>
                    </div>


                </div>

                <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 pt-4'>

                    <div className='border rounded-lg shadow p-6'>

                        <h3 className='font-semibold leading-none tracking-tight pb-6'>Keep Doing</h3>

                        <div className='flex flex-col gap-6 text-sm'>


                            <div>
                                <h3 className='tracking-tight font-medium'>Health</h3>
                                <p className='text-muted-foreground'>
                                    Keep doing personal training w/ JA. 6 days of exercise +clean diet = win (just keep going)
                                </p>
                            </div>
                            <div>
                                <h3 className='tracking-tight font-medium'>Work</h3>
                                <p className='text-muted-foreground'>
                                    {`keep doing content consistently. Long term, I want to teach millions of people about business.
                                    ​
                                    This year:
                                    Podcast: 1.5M downloads --> 3.3M downloads (2x)

                                    Newsletter: 0 subscribers --> 15k subscribers (15x)

                                    Twitter: 8k followers --> 42k followers (5x)
                                    ​
                                    Just keep pumping out content.`}
                                </p>
                            </div>
                            <div>
                                <h3 className='tracking-tight font-medium'>Play</h3>
                                <p className='text-muted-foreground'>
                                    Start doing reading instead of tiktok at night.
                                </p>
                            </div>
                            <div>
                                <h3 className='tracking-tight font-medium'>Love</h3>
                                <p className='text-muted-foreground'>
                                start doing a blackout period from 530-730pm everyday where I have no phone, and just spend quality time with the family. Tell all my business partners about the blackout so they know not to reach me.
                                </p>
                            </div>
                            <div>
                                <h3 className='tracking-tight font-medium'>Self-Respect</h3>
                                <p className='text-muted-foreground'>
                                    keep doing my 10min mindset training every morning before I start work to put myself in a phenomenal state of mind.
                                </p>
                            </div>
                            
                        </div>

                    </div>


                    <div className='border rounded-lg shadow p-6'>

                        <h3 className='font-semibold leading-none tracking-tight pb-6'>Start Doing</h3>

                        <div className='flex flex-col gap-6 text-sm'>


                            <div>
                                <h3 className='tracking-tight font-medium'>Health</h3>
                                <p className='text-muted-foreground'>
                                    Keep doing personal training w/ JA. 6 days of exercise +clean diet = win (just keep going)
                                </p>
                            </div>
                            <div>
                                <h3 className='tracking-tight font-medium'>Work</h3>
                                <p className='text-muted-foreground'>
                                    {`keep doing content consistently. Long term, I want to teach millions of people about business.
                                    ​
                                    This year:
                                    Podcast: 1.5M downloads --> 3.3M downloads (2x)

                                    Newsletter: 0 subscribers --> 15k subscribers (15x)

                                    Twitter: 8k followers --> 42k followers (5x)
                                    ​
                                    Just keep pumping out content.`}
                                </p>
                            </div>
                            <div>
                                <h3 className='tracking-tight font-medium'>Play</h3>
                                <p className='text-muted-foreground'>
                                    Start doing reading instead of tiktok at night.
                                </p>
                            </div>
                            <div>
                                <h3 className='tracking-tight font-medium'>Love</h3>
                                <p className='text-muted-foreground'>
                                start doing a blackout period from 530-730pm everyday where I have no phone, and just spend quality time with the family. Tell all my business partners about the blackout so they know not to reach me.
                                </p>
                            </div>
                            <div>
                                <h3 className='tracking-tight font-medium'>Self-Respect</h3>
                                <p className='text-muted-foreground'>
                                    keep doing my 10min mindset training every morning before I start work to put myself in a phenomenal state of mind.
                                </p>
                            </div>
                            
                        </div>

                    </div>

                </div>

            </NarrowContainer>
    )
}