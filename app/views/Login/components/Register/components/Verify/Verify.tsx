'use client'
import { Button, Input } from '@components'
import { useMutateVerify, VerifyRequestBody } from 'modules/auth'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useSignUp } from 'views/Login/components/hooks'

export const Verify = () => {
  const { email } = useSignUp()

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<VerifyRequestBody>()

  const { mutate, isLoading } = useMutateVerify()

  const handleSend = (data: VerifyRequestBody) => mutate(data)

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-1.5 items-start'>
        {/* <span className='text-xl font-semibold'>Enter Code</span> */}
        <span className='text-gray-500'>
          We Send Code To Your Email {email}
        </span>
      </div>

      <form
        onSubmit={handleSubmit(handleSend)}
        className='bg-gray-50 rounded-md border flex flex-col gap-6 p-4 py-6'
      >

        <Input
          label='Verify Code'
          {...register('key', {
            required: { message: 'Verify Code is Required', value: true }
          })}
          placeholder='Enter Email'
          error={!!errors.key}
          errorText={errors.key?.message}
        />

        <Button
          // rightIcon={ArrowRightIcon}
          variant='suceess'
          size='large'
          className='font-bold'
          loading={isLoading}
        >
          Verify
        </Button>
      </form>
    </div>
  )
}
