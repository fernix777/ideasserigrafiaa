'use client'

import Image from 'next/image'
import { useEffect } from 'react'

export default function ImageModal({ isOpen, project, imageIndex, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeydown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeydown)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, onClose, onNext, onPrev])

  if (!isOpen || !project) return null

  const currentImage = project.images?.[imageIndex]

  if (!currentImage) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ideas-dark/80 backdrop-blur"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-4xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagen */}
        <div className="relative aspect-[4/5] md:aspect-[16/9] overflow-hidden rounded-2xl bg-ideas-dark">
          <Image
            src={currentImage}
            alt={`${project.title} - Imagen ${imageIndex + 1}`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
          />
        </div>

        {/* Controles de navegación */}
        <div className="absolute inset-0 flex items-center justify-between px-4 rounded-2xl pointer-events-none">
          <button
            onClick={onPrev}
            className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition text-white text-2xl pointer-events-auto"
            aria-label="Imagen anterior"
          >
            ←
          </button>
          <button
            onClick={onNext}
            className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition text-white text-2xl pointer-events-auto"
            aria-label="Siguiente imagen"
          >
            →
          </button>
        </div>

        {/* Contador de imágenes */}
        <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {imageIndex + 1} / {project.images.length}
        </div>

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white text-2xl transition"
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        {/* Info del proyecto */}
        <div className="mt-4 bg-white/10 backdrop-blur p-4 rounded-xl text-white">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          <p className="text-sm text-gray-200 mt-2">{project.description}</p>
          <div className="flex gap-2 mt-3 flex-wrap">
            {project.details?.techniques?.map((tech) => (
              <span key={tech} className="bg-ideas-primary/80 px-3 py-1 rounded-full text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-white/20 text-xs text-gray-300 flex gap-4">
            <span>Año: {project.details?.year}</span>
            <span>Colores: {project.details?.colors}</span>
          </div>
        </div>

        {/* Indicador de teclado */}
        <div className="mt-2 text-center text-xs text-white/60">
          Usa ← → para navegar o ESC para cerrar
        </div>
      </div>
    </div>
  )
}
