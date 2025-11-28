'use client'

import React, { useMemo, useState } from 'react'
import { heroContent } from '../content/siteContent'
import VideoPlayer from './VideoPlayer'

function Hero() {
  const videos = heroContent.videos ?? []
  const [activeIndex, setActiveIndex] = useState(0)
  const activeVideo = useMemo(() => videos[activeIndex] ?? null, [videos, activeIndex])

  return (
    <section id="hero" className="grid gap-8 pb-16 pt-12 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-center">
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-ideas-primary">Serigrafía & diseño</p>
          <h1 className="text-4xl font-black leading-tight text-ideas-dark dark:text-ideas-light sm:text-5xl">
            {heroContent.title}
          </h1>
          <p className="max-w-xl text-base text-ideas-dark/80 dark:text-ideas-light/80 sm:text-lg">
            {heroContent.description}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={heroContent.primaryCta.href}
            className="inline-flex items-center justify-center rounded-lg bg-ideas-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-ideas-primary/20 transition-transform hover:-translate-y-0.5 hover:bg-ideas-secondary"
          >
            {heroContent.primaryCta.label}
          </a>
          <a
            href={heroContent.secondaryCta.href}
            target={heroContent.secondaryCta.external ? '_blank' : undefined}
            rel={heroContent.secondaryCta.external ? 'noreferrer' : undefined}
            className="inline-flex items-center justify-center rounded-lg border border-ideas-primary px-6 py-3 text-sm font-semibold text-ideas-primary transition-colors hover:bg-ideas-primary hover:text-white"
          >
            {heroContent.secondaryCta.label}
          </a>
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-ideas-dark/50 dark:text-ideas-light/50">
          {heroContent.primaryCta.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {heroContent.badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center rounded-full border border-ideas-gray/40 px-4 py-1 text-xs font-medium uppercase tracking-wide text-ideas-dark/70 dark:text-ideas-light/70"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
      <div className="relative flex flex-col items-center gap-4">
        {activeVideo?.src ? (
          <VideoPlayer
            key={activeVideo.src}
            url={activeVideo.src}
            title={activeVideo.title}
            className="w-full max-w-3xl"
            playing
          />
        ) : (
          <div className="aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl border border-ideas-gray/30 bg-gradient-to-br from-ideas-primary/15 via-transparent to-ideas-secondary/20 shadow-lg">
            <div className="flex h-full w-full items-center justify-center text-sm font-medium uppercase tracking-[0.3em] text-ideas-dark/40 dark:text-ideas-light/40">
              {heroContent.mediaAlt}
            </div>
          </div>
        )}
        {videos.length > 1 ? (
          <div className="flex w-full max-w-3xl flex-wrap gap-2">
            {videos.map((video, index) => {
              const isActive = index === activeIndex
              const baseClasses =
                'flex-1 min-w-[140px] rounded-xl border px-3 py-2 text-left text-xs font-medium uppercase tracking-[0.22em] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ideas-primary'
              const activeClasses = 'border-ideas-primary bg-ideas-primary/15 text-ideas-primary shadow-md shadow-ideas-primary/20'
              const inactiveClasses =
                'border-ideas-gray/30 bg-white/70 text-ideas-dark/70 hover:border-ideas-primary/40 hover:bg-ideas-primary/10 dark:border-ideas-gray/20 dark:bg-ideas-dark/60 dark:text-ideas-light/70'

              return (
                <button
                  key={video.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
                >
                  {video.title}
                </button>
              )
            })}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default Hero
