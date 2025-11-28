'use client'

import { useEffect } from 'react'
import { initTheme } from '../hooks/useTheme'

export default function ThemeProvider({ children }) {
    useEffect(() => {
        initTheme()
    }, [])

    return <>{children}</>
}
