import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import NarrowContainer from '@/components/NarrowContainer'
import Chart from '@/components/Chart'
import PageHeading from '@/components/PageHeading'
import CalendarPicker from '@/components/CalendarPicker'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Briefcase, Dribbble, HeartHandshake, HeartPulse, Plus, UserCheck } from 'lucide-react'
import DashboardNav from './components/DashboardNav'

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
                            <p className="text-sm text-muted-foreground">You've done 12 entries, so far.</p>
                        </div>
                    </div>

                </div>
            </NarrowContainer>
    )
}