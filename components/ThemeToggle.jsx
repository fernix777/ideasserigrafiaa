'use client'

import React from 'react'
import { useTheme } from '../hooks/useTheme'

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full border border-ideas-gray/40 px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-ideas-dark/80 opacity-50 transition-colors dark:text-ideas-light/80"
        aria-hidden="true"
      >
        <span className="h-4 w-4" />
        <span>Modo...</span>
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-ideas-gray/40 px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-ideas-dark/80 transition-colors hover:border-ideas-primary hover:text-ideas-primary dark:text-ideas-light/80 dark:hover:text-ideas-primary"
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      <span className="relative flex h-4 w-4 items-center justify-center">
        {isDark ? (
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
            <path d="M17.75 15.45a8 8 0 1 1-9.2-10.2 1 1 0 0 1 .9 1.74A6 6 0 1 0 17 15.7a1 1 0 0 1 .75-.25Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
            <path d="M12 18.5a1 1 0 0 1 1 1V21a1 1 0 0 1-2 0v-1.5a1 1 0 0 1 1-1Zm0-13a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1.5a1 1 0 0 0 1 1Zm6.36 3.14a1 1 0 0 0 1.41 0l1.06-1.06a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 0 1.41ZM4.17 17.83a1 1 0 0 0 1.41 0L6.64 16.8a1 1 0 1 0-1.41-1.42l-1.06 1.06a1 1 0 0 0 0 1.41ZM21 11h-1.5a1 1 0 0 0 0 2H21a1 1 0 0 0 0-2ZM4.5 12a1 1 0 0 0-1-1H2a1 1 0 0 0 0 2h1.5a1 1 0 0 0 1-1Zm14.19 4.8-1.06-1.06a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41ZM6.64 7.2 5.58 6.14A1 1 0 1 0 4.17 7.55L5.23 8.6a1 1 0 1 0 1.41-1.41ZM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z" />
          </svg>
        )}
      </span>
      <span>{isDark ? 'Modo oscuro' : 'Modo claro'}</span>
    </button>
  )
}

export default ThemeToggle
