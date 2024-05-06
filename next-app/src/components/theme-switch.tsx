"use client"

import { useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from './ui/button'
import { useTheme } from './theme/theme-provider'

export default function ThemeSwitch() {
    const { theme, setTheme } = useTheme()

    /* Update theme-color meta tag
     * when theme is updated */
    useEffect(() => {
        const themeColor = theme === 'dark' ? '#020817' : '#fff'
        const metaThemeColor = document.querySelector("meta[name='theme-color']")
        metaThemeColor && metaThemeColor.setAttribute('content', themeColor)
    }, [theme])

    return (
        <Button
            size='icon'
            variant='ghost'
            className='rounded-full'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </Button>
    )
}