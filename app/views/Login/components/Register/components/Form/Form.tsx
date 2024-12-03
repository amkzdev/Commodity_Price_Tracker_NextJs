import { Button, Input } from '@components'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { useMutateSignup } from 'modules/auth'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSignUp } from 'views/Login/components/hooks'

interface formData {
  password: string
  rePassword: string
  email: string
  username: string
}

export const Form = () => {
  const { setStep } = useSignUp()
  const { mutate, isLoading, data } = useMutateSignup()

  // useEffect(() => {
  //   if (data?.status == 201) setStep(2)
  // }, [data])

  const {
    register,
    formState: { errors },
    setError,
    handleSubmit
  } = useForm<{
    password: string
    rePassword: string
    email: string
    username: string
  }>()

  const handleConfirm = ({
    email,
    password,
    rePassword,
    username
  }: formData) => {
    if (rePassword != password) {
      return setError('rePassword', {
        message: 'Confirm Password is Not Equal To Password'
      })
    }

    mutate({ email, password, username, login: username })

  }

  return (
    <form
      onSubmit={handleSubmit(handleConfirm)}
      className='bg-gray-50 rounded-md border flex flex-col gap-6 p-4 py-6'
    >
      <span className='text-xl'>Account Details</span>

      <Input
        label='Email Address'
        {...register('email', {
          required: { message: 'Email is Required', value: true }
        })}
        placeholder='Enter Email'
        error={!!errors.email}
        errorText={errors.email?.message}
      />

      <Input
        label='Username'
        {...register('username', {
          required: { value: true, message: 'Username is Required' }
        })}
        placeholder='Enter Username'
        error={!!errors.username}
        errorText={errors.username?.message}
      />

      <Input
        label='Create Password'
        {...register('password', {
          required: { value: true, message: 'Password is Required' }
        })}
        placeholder='Create Password'
        error={!!errors.password}
        errorText={errors.password?.message}
        type='password'
      />

      <Input
        label='Confirm Password'
        {...register('rePassword', {
          required: { value: true, message: 'Confirm Password Is Required' }
        })}
        placeholder='Confirm Password'
        type='password'
        error={!!errors.rePassword}
        errorText={errors.rePassword?.message}
      />

      <Button
        rightIcon={ArrowRightIcon}
        variant='suceess'
        size='large'
        className='font-bold'
        loading={isLoading}
      >
        Continue
      </Button>
    </form>
  )
}
