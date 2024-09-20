'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Monitor, Smartphone } from 'lucide-react'
import { useMediaQuery } from '@/hooks/use-media-query'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const isMobileOrTablet = useMediaQuery("(max-width: 1024px)")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const getIcon = (value: string) => {
    if (value === 'system') {
      return isMobileOrTablet ? <Smartphone className="h-5 w-5" /> : <Monitor className="h-5 w-5" />
    } else if (value === 'light') {
      return <Sun className="h-5 w-5" />
    } else {
      return <Moon className="h-5 w-5" />
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Toggle theme">
          {getIcon(theme)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          {getIcon('light')}
          <span className="ml-2">Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          {getIcon('dark')}
          <span className="ml-2">Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          {getIcon('system')}
          <span className="ml-2">System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
