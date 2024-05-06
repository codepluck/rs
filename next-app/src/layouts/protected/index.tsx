import type { AppProps } from 'next/app'

export default function ProtectedLayout({ children }) {
    return (
        <>
            {children}
            <p>From Protected Layout</p>
        </>
    )
}