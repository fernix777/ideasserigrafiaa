'use client'

import { useState, useCallback } from 'react'

export function useGalleryModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = useCallback((project, imageIndex = 0) => {
    setSelectedProject(project)
    setCurrentImageIndex(imageIndex)
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    setSelectedProject(null)
  }, [])

  const nextImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        (prev + 1) % selectedProject.images.length
      )
    }
  }, [selectedProject])

  const prevImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      )
    }
  }, [selectedProject])

  return {
    isOpen,
    selectedProject,
    currentImageIndex,
    openModal,
    closeModal,
    nextImage,
    prevImage
  }
}
