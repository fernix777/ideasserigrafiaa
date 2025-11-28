'use client'

import React, { useMemo, useState } from 'react'
import VideoPlayer from './VideoPlayer'

function VideoPlaylist({ content }) {
  const items = content?.items ?? []
  const [activeIndex, setActiveIndex] = useState(0)

  const activeItem = useMemo(() => items[activeIndex] ?? null, [items, activeIndex])

  if (!items.length) {
    return null
  }

  return (
    <section id={content?.id} className="py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-ideas-primary">{content?.title}</p>
          <p className="max-w-3xl text-base text-ideas-dark/80 dark:text-ideas-light/80">{content?.description}</p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <VideoPlayer
            key={activeItem?.src}
            url={activeItem?.src}
            title={activeItem?.title}
            poster={activeItem?.poster}
            className="w-full"
          />

          <aside className="flex flex-col gap-3">
            {items.map((item, index) => {
              const isActive = index === activeIndex
              const baseClasses =
                'flex flex-col rounded-2xl border px-4 py-3 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ideas-primary'
              const activeClasses = 'border-ideas-primary bg-ideas-primary/10 shadow-lg shadow-ideas-primary/20'
              const inactiveClasses =
                'border-ideas-gray/30 bg-white/60 hover:border-ideas-primary/40 hover:bg-ideas-primary/5 dark:border-ideas-gray/20 dark:bg-ideas-dark/60'

              return (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
                >
                  <span className="text-sm font-semibold text-ideas-dark dark:text-ideas-light">{item.title}</span>
                  {item.description ? (
                    <span className="mt-1 text-xs text-ideas-dark/70 dark:text-ideas-light/70">{item.description}</span>
                  ) : null}
                </button>
              )
            })}
          </aside>
        </div>
      </div>
    </section>
  )
}

export default VideoPlaylist
