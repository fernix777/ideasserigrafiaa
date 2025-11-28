import React from 'react'
import { navigation, footerContent } from '../content/siteContent'

const socialIcons = {
  instagram: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.2h2.4L16.2 11h-2.7V9.2c0-.78.26-1.3 1.48-1.3H16.3V6.2c-.26-.03-1.13-.1-2.14-.1-2.12 0-3.56 1.15-3.56 3.26V11H8.5v2.8h2.1V21h2.9z" />
    </svg>
  ),
  tiktok: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M15.75 3a4.5 4.5 0 0 0 3 2.85v2.19a6.2 6.2 0 0 1-3-.78v6.66a4.56 4.56 0 1 1-4.56-4.56c.31 0 .6.03.89.09V12.6a1.8 1.8 0 1 0 1.2 1.69V3h2.47z" />
    </svg>
  )
}

function Footer() {
  return (
    <footer className="border-t border-ideas-gray/20 bg-ideas-light/90 text-ideas-dark dark:border-ideas-gray/10 dark:bg-ideas-dark/80 dark:text-ideas-light">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium tracking-wide text-ideas-dark/70 dark:text-ideas-light/70">
            {footerContent.copy}
          </p>
          <div className="flex gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-ideas-dark/60 dark:text-ideas-light/60">
            {footerContent.socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-transparent px-3 py-2 transition-colors hover:border-ideas-primary/40 hover:bg-ideas-primary/10 hover:text-ideas-primary"
              >
                {socialIcons[social.label.toLowerCase()]}
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm font-medium text-ideas-dark/70 dark:text-ideas-light/70">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-ideas-primary">
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer
