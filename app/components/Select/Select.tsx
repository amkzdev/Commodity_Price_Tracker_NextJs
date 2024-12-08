'use client'
import React, { useState } from 'react'
import { types } from './types'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

export const Select = <VT,>({ icon: Icon, items, onSelectAction, value, title }: types<VT>) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const selectedItem = items.find(i => i.value == value)

    return (
        <div className='flex flex-col gap-2.5 flex-1 z-50'>
            {!!title && <div className='flex flex-row gap-1.5 items-center'>
                {!!Icon && <Icon className='size-5' />}
                <span className='font-semibold text-base'>{title}</span>
            </div>}

            <div className=' rounded border border-black flex flex-row gap-2 items-center justify-between relative hover:-translate-y-0.5 hover:shadow transition-all duration-300 cursor-pointer' onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} >
                <span className='flex-1 flex px-2 py-1 hover:bg-black-1  hover:text-white justify-between items-center ' onClick={() => setIsOpen(true)}>
                    {selectedItem?.title}
                    <ChevronDownIcon className='size-2  ' />
                </span>
                <div className={clsx('absolute left-0 top-full  transition-all shadow rounded border w-full z-20 bg-white', isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none')}>
                    {items.map(item => <div
                        key={item.value?.toString()}
                        onClick={() => { onSelectAction(item.value); setIsOpen(false) }}
                        className={clsx('p-2 hover:bg-gray-50 hover:text-black cursor-pointer',
                            selectedItem?.value == item.value && 'bg-gray-100 text-gray-700'
                        )}>
                        {item.title}

                    </div>)}
                </div>
            </div>


        </div>
    )
}
