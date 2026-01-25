import React from 'react'
import { cn } from '../lib/utils'

export function Card({ children, className, hover = false, ...props }) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl border border-gray-200 shadow-sm',
        hover && 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className, ...props }) {
  return (
    <div className={cn('p-6 pb-4', className)} {...props}>
      {children}
    </div>
  )
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={cn('p-6 pt-0', className)} {...props}>
      {children}
    </div>
  )
}
