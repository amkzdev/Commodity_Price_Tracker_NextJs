import React, { forwardRef } from 'react'
import { InputFieldProps } from './types'
import clsx from 'clsx'


export const Input = forwardRef<HTMLInputElement | null, InputFieldProps>(({ icon, label,success ,  error, fullWidth, fillFlex, errorText, className, containerClassName, ...props }, ref) => {
    return (
        <div className={clsx([
            'flex flex-col gap-2.5 items-stretch relative min-w-0 text-black-1',
            fillFlex && 'flex-1',
            fullWidth && 'w-full',
            containerClassName
        ])}>

            {!!label && <span
                className={clsx([
                    'text-black-1 font-semibold',
                    error && 'text-error',
                    success && 'text-green-600',
                    ])}>
                {label}</span>}

            <div className='relative flex min-w-0'>


                <input className={clsx([
                    'placeholder:text-gray-500 text-base py-2 px-3 rounded-md outline-none focus:outline-gray-300 transition-all duration-500  border min-w-0 flex-1 peer   disabled:text-gray-300 disabled:bg-white ',
                    !error && "border-platinum  focus:border-gray-400 focus:drop-shadow-focus-input  ",
                    error && 'border border-error ',
                    icon && 'pl-12',
                    className
                ])}
                    ref={ref}
                    {...props} />

                {!!icon && <div className={clsx(['absolute left-4 top-1/2 -translate-y-1/2 input-icon h-fit flex ',
                    !error && " peer-focus:!text-primary",
                    error && '!text-errordf'
                ])}>{icon}</div>}

            </div>

            {!!errorText && !!error && <span className='text-sm text-error'>{errorText}</span>}


        </div>
    )
})
