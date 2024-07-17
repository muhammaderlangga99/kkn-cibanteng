import React from 'react'
import { cn } from '@/lib/utils'

export default function HeaderText({children, className} : {children: string, className?: string}) {
    return (
        <div>
            <h1 className={cn('font-bold text-white', className)}>{children}</h1>
        </div>
    );
}
