'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

const FILE_EXTENSIONS = ['.mp4', '.mov', '.webm']

function isFileSource(url) {
  if (!url || typeof url !== 'string') return false
  return FILE_EXTENSIONS.some((ext) => url.toLowerCase().includes(ext))
}

function VideoPlayer({ url, title, poster, className = '', playing = false }) {
  if (!url) {
    return null
  }

  if (isFileSource(url)) {
    return (
      <div className={className}>
        <div className="relative overflow-hidden rounded-3xl border border-ideas-gray/30 bg-ideas-light/80 shadow-lg shadow-ideas-primary/5 backdrop-blur dark:border-ideas-gray/20 dark:bg-ideas-dark/60">
          <video
            key={url}
            src={url}
            className="aspect-[16/9] h-full w-full rounded-3xl object-cover"
            controls
            autoPlay={playing}
            muted={playing}
            playsInline
            poster={poster ?? undefined}
            preload="metadata"
          />
        </div>
        {title ? (
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.32em] text-ideas-dark/60 dark:text-ideas-light/60">
            {title}
          </p>
        ) : null}
      </div>
    )
  }

  return (
    <div className={className}>
      <div className="relative overflow-hidden rounded-3xl border border-ideas-gray/30 bg-ideas-light/80 shadow-lg shadow-ideas-primary/5 backdrop-blur dark:border-ideas-gray/20 dark:bg-ideas-dark/60">
        <div className="relative aspect-[16/9]">
          <ReactPlayer
            url={url}
            width="100%"
            height="100%"
            controls
            playsinline
            playing={playing}
            light={poster || false}
            playIcon={
              <button className="flex h-16 w-16 items-center justify-center rounded-full bg-ideas-primary text-white shadow-lg shadow-ideas-primary/40 transition hover:-translate-y-0.5 hover:bg-ideas-secondary">
                <span className="ml-0.5 text-2xl">▶</span>
              </button>
            }
            config={{
              youtube: {
                playerVars: {
                  rel: 0,
                  modestbranding: 1
                }
              },
              vimeo: {
                controls: true
              }
            }}
          />
        </div>
      </div>
      {title ? (
        <p className="mt-3 text-xs font-medium uppercase tracking-[0.32em] text-ideas-dark/60 dark:text-ideas-light/60">
          {title}
        </p>
      ) : null}
    </div>
  )
}

export default VideoPlayer
