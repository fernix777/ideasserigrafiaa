import React from 'react'
import { galleryContent } from '../content/siteContent'

function GalleryItem({ item, index }) {
  return (
    <article
      className="flex flex-col overflow-hidden rounded-3xl border border-ideas-gray/20 bg-white/70 shadow-lg shadow-ideas-dark/5 backdrop-blur transition-transform hover:-translate-y-1 dark:border-ideas-gray/10 dark:bg-ideas-dark/30"
    >
      <div
        className="relative aspect-[4/5] w-full bg-gradient-to-br from-ideas-primary/15 via-transparent to-ideas-secondary/20"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(217,41,41,0.15) 0%, rgba(191,52,52,0.05) 100%), url(${item.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        aria-label={item.title}
      />
      <div className="flex h-full flex-col gap-2 p-5">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-ideas-primary/80">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="text-lg font-semibold text-ideas-dark dark:text-ideas-light">{item.title}</h3>
        <p className="text-sm text-ideas-dark/70 dark:text-ideas-light/70">{item.description}</p>
      </div>
    </article>
  )
}

function GallerySection() {
  return (
    <section id={galleryContent.id} className="space-y-8 py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-3xl font-bold text-ideas-dark dark:text-ideas-light">
            {galleryContent.title}
          </h2>
          <p className="text-sm text-ideas-dark/70 dark:text-ideas-light/70">
            {galleryContent.highlight}
          </p>
        </div>
        <a
          className="inline-flex items-center justify-center rounded-full border border-ideas-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ideas-primary transition-colors hover:bg-ideas-primary hover:text-white"
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          Ver más trabajos
        </a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {galleryContent.items.map((item, index) => (
          <GalleryItem key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}

export default GallerySection
