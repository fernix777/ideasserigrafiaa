'use client'

import Image from 'next/image'

export default function GalleryItem({ project, index, onOpenModal }) {
  return (
    <article
      onClick={() => onOpenModal(project, 0)}
      className="group cursor-pointer flex flex-col overflow-hidden rounded-3xl border border-ideas-gray/20 bg-white/70 shadow-lg shadow-ideas-dark/5 backdrop-blur transition-transform hover:-translate-y-1 dark:border-ideas-gray/10 dark:bg-ideas-dark/30"
    >
      {/* Imagen con efecto hover */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-ideas-primary/15 via-transparent to-ideas-secondary/20">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
        />

        {/* Badge con número de imágenes */}
        {project.images?.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 rounded-full text-xs font-semibold">
            +{project.images.length - 1}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex h-full flex-col gap-2 p-5">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-ideas-primary/80">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="text-lg font-semibold text-ideas-dark dark:text-ideas-light">
          {project.title}
        </h3>
        <p className="text-sm text-ideas-dark/70 dark:text-ideas-light/70">
          {project.description}
        </p>
        <div className="mt-auto pt-3 border-t border-ideas-gray/10">
          <button className="text-xs font-semibold text-ideas-primary hover:text-ideas-secondary transition">
            Ver detalles →
          </button>
        </div>
      </div>
    </article>
  )
}
