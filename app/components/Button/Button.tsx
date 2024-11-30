import React from 'react'
import { ButtonProps } from './types'
import { clsx } from 'clsx'
// import { Spinner } from '@components'
// import { Spinner } from '@components'



export const Button = ({ size = 'fit', variant = 'primary', iconSide = 'right', fullWidth, fillFlex, className, children, loading, rightIconColor, leftIconColor, leftIcon: LeftIcon, rightIcon: RightIcon, ...props }: ButtonProps) => {


    const iconColorFn = (def?: string) => {

        return def
        // if (def) return def

        // if (variant === 'black' || variant == 'orange') return 'text-white'
        // else return 'text-primary'
    }
    return (
        <><button

            className={
                clsx(
                    [
                        'rounded border py-1.5 px-2 outline-none  flex flex-row  gap-3 justify-center items-center drop-shadow hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 ', ///General Style
                        variant == 'primary' && 'bg-primary text-white  border-transparent',
                        variant == 'error' && 'bg-error text-white border  border-transparent',
                        variant == 'suceess' && 'bg-success text-white border-transparent ',
                        // variant == 'outline' && ' border-black',
                        // variant == 'text' && 'border-transparent',
                        // variant == 'white' && 'bg-white text-black border-transparent',
                        (variant == 'disabled' || props.disabled) && 'bg-[#4E2C18] text-[#7E7E7E] border-[#4E2C18]',
                        size == 'fit' && (!children ? 'px-2.5' : 'px-4'),
                        size == 'medium' && 'w-24',
                        size == 'large' && 'w-36',
                        size == 'xlarge' && 'w-48',
                        fullWidth && 'w-full box-border',
                        fillFlex && 'flex-1',
                        className,
                        iconSide == 'right' ? 'flex-row' : 'flex-row-reverse'
                    ]
                )}


            {...props} disabled={props.disabled ?? loading} >
            {!loading && LeftIcon && <LeftIcon className={clsx('size-4', iconColorFn(leftIconColor) )} />}
            {children}
            {/* {loading ? <Spinner/> : children} */}
            {!loading && RightIcon && <RightIcon className={clsx('size-4', iconColorFn(rightIconColor) )} />}
        </button>


        </>
    )
}
