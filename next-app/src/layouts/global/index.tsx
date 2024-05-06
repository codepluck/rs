"use client"
import LoadingSpinner from '@/components/ui/loader'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

import Header from "@/layouts/global/header"
export default function PublicLayout({ children }) {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, []);
    if (loading) {
        return (
            <>
                <LoadingSpinner />
            </>
        )
    }
    return (
        <>
            <Header />
            <p>From Public Layout</p>
            {children}
        </>
    )
}