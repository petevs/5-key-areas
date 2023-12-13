'use client'

import { updatePassword } from '@/actions/auth'
import { useState } from 'react'

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

                <label className="text-md" htmlFor="password">
                Password
              </label>
              <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                type="password"
                name="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />


                <button 
                    className="bg-black text-white rounded-md px-4 py-2 text-foreground mb-2 justify-self-start"
                    type='submit'
                >
                        {
                            loading ? 'Updating...' : 'Update password'
                        }
                </button>
            </form>

            {
                error && (
                    <div className='text-red-500'>
                        {error.message}
                    </div>
                )
            }

            {
                successMessage && (
                    <div className='text-primary'>
                        {successMessage}
                    </div>
                )
            }


      </>
    )
}