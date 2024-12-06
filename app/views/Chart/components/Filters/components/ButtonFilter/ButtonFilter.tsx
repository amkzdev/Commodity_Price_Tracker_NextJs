import React from 'react'
import { types } from './types'
import clsx from 'clsx'

export const ButtonFilter = <T,>({ items, icon: Icon, title, onChange, value }: types<T>) => {

  return (
    <div className='flex flex-col gap-2.5 flex-1 '>
      <div className='flex flex-row gap-1.5 items-center'>
        <Icon className='size-5' />
        <span className='font-semibold text-base'>{title}</span>
      </div>
      <div className='flex flex-row  gap-0'>
        {items.map(item => {
          const isActive = value == item.value
          return <div
            className={clsx(
              isActive
                ? 'bg-[#212529] text-wrap text-white'
                : 'bg-white ', 'border border-r-0 last:border-r border-black first:rounded-l last:rounded-r py-1 px-2 hover:-translate-y-0.5 transition-all duration-100 hover:shadow relative  cursor-pointer')}
            onClick={() => onChange(item.value)}
          >{item.title}</div>
        })}
      </div>

    </div>
  )
}
