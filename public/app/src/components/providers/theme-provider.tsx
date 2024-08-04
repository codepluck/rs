'use client'

// React Imports
import { useEffect, useMemo, useState } from 'react'


import defaultTheme from "@/components/theme"

const ThemeProvider = props => {
    const { children, direction } = props
    const theme = useMemo(() => {
        return defaultTheme
    }, [])

    useEffect(() => {

    }, [])

    return (
        <section
            theme={theme}
            defaultMode={"light"}
            modeStorageKey={`${theme.?.direction?.toLowerCase().split(' ').join('-')}-theme-mode`}
        >
            {children}
        </section>
    )
}

export default ThemeProvider
