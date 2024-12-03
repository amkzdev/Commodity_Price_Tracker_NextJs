'use client'
import React from 'react'

import { Button, Input } from '@components'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { LoginRequestBody } from 'modules/auth/schema.type'
import { useMutateLogin } from 'modules/auth/hooks'

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginRequestBody>()

  const { mutate, isLoading } = useMutateLogin()

  const handleMutate = (data: LoginRequestBody) => {
    mutate(data)
  }

  return (
    <form
      onSubmit={handleSubmit(handleMutate)}
      className='bg-gray-50 rounded-md border flex flex-col gap-6 p-4 py-6'
    >
      <Input
        label='Email Username'
        {...register('username', {
          required: { value: true, message: 'Username Is Required' }
        })}
        placeholder='Enter Username'
        error={!!errors.username}
        errorText={errors.username?.message}
      />

      <Input
        label=' Password'
        placeholder='Password'
        type='password'
        {...register('password', {
          required: { value: true, message: 'Password Is Required' }
        })}
        error={!!errors.password}
        errorText={errors.password?.message}
      />

      <label
        htmlFor='remember'
        className='flex flex-row gap-2 items-center cursor-pointer'
      >
        <input id='remember' type='checkbox' {...register('rememberMe')} />
        <span>Remember Me</span>
      </label>

      <div className='flex flex-row gap-2  items-center justify-between'>
        <Button
          rightIcon={ArrowRightIcon}
          variant='suceess'
          size='large'
          className='font-bold'
          loading={isLoading}
        >
          Login
        </Button>

        {/* <Link href={'/forgot-password'}>Forgotten Password?</Link> */}
      </div>
    </form>
  )
}
