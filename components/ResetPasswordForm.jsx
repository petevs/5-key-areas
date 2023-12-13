'use client'

import { updatePassword } from '@/actions/auth'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function ResetPasswordForm() {

    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    const handleSubmit = async (e) => {
          e.preventDefault()
          const { error } = await updatePassword(password)
  
          if(error) {
              setError(error)
              return
          }

          setPassword('')
          setLoading(false)
          setSuccessMessage('Password updated successfully.')
    }


    return (
      <>
      
        <form
              className="animate-in grid grid-flow-row gap-2 text-foreground"
              onSubmit={handleSubmit}
            >

                <Label className="text-md" htmlFor="password">
                Password
              </Label>
              <Input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                type="password"
                name="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete='off'
              />


                <Button 
                    className="justify-self-start h-8 rounded-full text-sm"
                    type='submit'
                >
                        {
                            loading ? 'Updating...' : 'Update'
                        }
                </Button>
            </form>

            {
                error && (
                    <div className='text-destructive pt-4 text-sm'>
                        {error.message}
                    </div>
                )
            }

            {
                successMessage && (
                    <div className='text-primary pt-4 text-sm'>
                        {successMessage}
                    </div>
                )
            }


      </>
    )
}