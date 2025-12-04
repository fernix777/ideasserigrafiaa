import React from 'react'

import Logo from './Logo'
import { navigation } from '../content/siteContent'

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ideas-gray/20 bg-ideas-light/90 backdrop-blur dark:border-ideas-gray/10 dark:bg-ideas-dark/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#hero" className="flex items-center gap-3">
          <div className="flex items-center rounded-xl bg-white/0 p-0 transition-all duration-300 dark:bg-white/90 dark:px-3 dark:py-2 dark:shadow-[0_8px_20px_rgba(0,0,0,0.3)]">
            <Logo className="h-12 w-auto" />
          </div>
          <div className="text-sm font-medium text-ideas-dark/70 dark:text-ideas-light/70">
            Serigrafía • Posadas, Misiones
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-ideas-dark/80 dark:text-ideas-light/80 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ideas-primary dark:hover:text-ideas-primary"
            >
              {item.name}
            </a>
          ))}

        </nav>

      </div>
    </header>
  )
}

export default Header
