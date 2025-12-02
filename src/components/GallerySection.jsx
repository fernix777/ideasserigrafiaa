'use client'

import GalleryItem from './GalleryItem'
import ImageModal from './ImageModal'
import { portfolioProjects } from '../content/portfolioData'
import { useGalleryModal } from '../hooks/useGalleryModal'

export default function GallerySection() {
  const { isOpen, selectedProject, currentImageIndex, openModal, closeModal, nextImage, prevImage } = useGalleryModal()

  return (
    <>
      <section id="trabajos" className="space-y-8 py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-3xl font-bold text-ideas-dark dark:text-ideas-light">
              Trabajos
            </h2>
            <p className="text-sm text-ideas-dark/70 dark:text-ideas-light/70">
              Seleccionamos algunos proyectos recientes que muestran la variedad de técnicas, materiales y estilos que ofrecemos.
            </p>
          </div>
          <a
            className="inline-flex items-center justify-center rounded-full border border-ideas-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ideas-primary transition-colors hover:bg-ideas-primary hover:text-white"
            href="https://www.instagram.com/ideasserigrafia"
            target="_blank"
            rel="noreferrer"
          >
            Ver más trabajos
          </a>
        </div>

        {/* Galería responsiva */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {portfolioProjects.map((project, index) => (
            <GalleryItem
              key={project.id}
              project={project}
              index={index}
              onOpenModal={openModal}
            />
          ))}
        </div>
      </section>

      {/* Modal interactivo */}
      <ImageModal
        isOpen={isOpen}
        project={selectedProject}
        imageIndex={currentImageIndex}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  )
}
