'use client'

import React, { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'


export default function ClientAuthForm() {

    const [formType, setFormType] = useState('login')

    return (
        <>
            <h1 className='text-4xl font-medium'>
                {formType === 'login' ? 'Sign In' : 'Sign Up'}
            </h1>
            <div className='flex gap-1'>
                <h4 className='text-lg font-light text-gray-500'>
                    {
                        formType === 'login' ?
                            'Sign in to save your entry and view your dashboard.' :
                            'Create an account to save your entry and view your dashboard.'
                    
                    }
                </h4>
                    <button 
                        className='text-blue-500'
                        onClick={() => setFormType(formType === 'login' ? 'signup' : 'login')}
                    >
                        {formType === 'login' ? ' Sign up' : ' Sign in'}
                    </button>
            </div>
            <Label className='text-lg font-light'>Email</Label>
            <Input className='border-primary' placeholder='Enter your email' />
        </>
    )
}