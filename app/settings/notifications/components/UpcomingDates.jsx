'use client'

import { useEffect, useState } from 'react'
import { friendlyDate } from '@/lib/helpers'
import { createClient } from '@/utils/supabase/client'
import { Button } from '@/components/ui/button'
import { set } from 'react-hook-form'


export default function UpcomingDates({ initialDates, totalCount, userID }) {

    const [upcoming, setUpcoming] = useState(initialDates)
    const [loading, setLoading] = useState(false)

    const supabase = createClient()

    async function loadMore() {

        setLoading(true)
            
        const { data: newDates, error } = await supabase
            .from('scheduled_notifications')
            .select('send_date')
            .eq('user_id', userID)
            .not('sent', 'is', true)
            .range(upcoming.length, upcoming.length + 5)
            .limit(5)

        setUpcoming([...upcoming, ...newDates])

        setLoading(false)
    
    }

    useEffect(() => {
        setUpcoming(initialDates)
    }
    , [initialDates])


    return (
        <div className='pt-8'>
            <h4 className='text-xl font-bold py-4 border-t'>Upcoming Dates</h4>         
            {
                upcoming &&
                upcoming.map((item) => (
                        <div className='p-4 border rounded-md mt-4'>
                            <div className='text-sm text-gray-600'>
                                {friendlyDate(item.send_date)}
                            </div>
                        </div>
                    )
                )
            }

            <div className='pt-8 flex justify-center'>
                <Button
                    variant='secondary'
                    onClick={loadMore}
                    disabled={upcoming?.length === totalCount}
                >
                    {
                        loading ? 'Loading...' : 'Load More'
                    }
                </Button>

            </div>
        </div>
    )
}