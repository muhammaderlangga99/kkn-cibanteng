'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { IconMoonStar, IconSun, IconComputer } from '@irsyadadl/paranoid';
import { cn } from '@/lib/utils';
const ThemeSwitch = ({ className }: { className?: String }) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    // <select value={theme} onChange={e => setTheme(e.target.value)}>
    //   <option value="system">System</option>
    //   <option value="dark">Dark</option>
    //   <option value="light">Light</option>
    // </select>
    <Select value={ theme } onValueChange={(value) => setTheme(value)}>
      <SelectTrigger className={`bg-transparent flex items-center ${className}`}>
        <SelectValue placeholder="Theme"/>
          </SelectTrigger>
          
      <SelectContent>
        <SelectItem value="light"><IconSun className='size-4 inline-block' /> light</SelectItem>
        <SelectItem value="dark"><IconMoonStar className='size-4 inline-block'/> dark</SelectItem>
        <SelectItem value="system"><IconComputer className='size-4 inline-block' /> system</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default ThemeSwitch