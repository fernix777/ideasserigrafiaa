import { useEffect, useState, useCallback } from 'react'

const STORAGE_KEY = 'site-theme'
const listeners = new Set()
let currentTheme
let mediaQuery
let initialized = false

const applyThemeClass = (value) => {
  const root = document.documentElement
  if (value === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

const setTheme = (value) => {
  if (typeof window === 'undefined') return
  currentTheme = value
  applyThemeClass(value)
  window.localStorage.setItem(STORAGE_KEY, value)
  listeners.forEach((listener) => listener(value))
}

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') {
    return stored
  }

  mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  return mediaQuery.matches ? 'dark' : 'dark'
}

export function initTheme() {
  if (typeof window === 'undefined' || initialized) return
  initialized = true

  currentTheme = getInitialTheme()
  applyThemeClass(currentTheme)

  mediaQuery = mediaQuery ?? window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', (event) => {
    setTheme(event.matches ? 'dark' : 'light')
  })
}

export function useTheme() {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === 'undefined') {
      return currentTheme ?? 'dark'
    }
    currentTheme = currentTheme ?? getInitialTheme()
    return currentTheme
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    listeners.add(setThemeState)
    setThemeState(currentTheme)

    return () => {
      listeners.delete(setThemeState)
    }
  }, [])

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
  }, [theme])

  return {
    theme,
    isDark: theme === 'dark',
    toggleTheme
  }
}
