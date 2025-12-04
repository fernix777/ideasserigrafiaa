'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { galleryContent } from '../content/siteContent'

export default function PhotoGallery() {
    const [selectedCategory, setSelectedCategory] = useState('Todos')
    const [selectedImageIndex, setSelectedImageIndex] = useState(null)
    const [filteredItems, setFilteredItems] = useState(galleryContent.items)

    useEffect(() => {
        if (selectedCategory === 'Todos') {
            setFilteredItems(galleryContent.items)
        } else {
            setFilteredItems(galleryContent.items.filter(item => item.category === selectedCategory))
        }
    }, [selectedCategory])

    const openLightbox = (index) => {
        setSelectedImageIndex(index)
        document.body.style.overflow = 'hidden'
    }

    const closeLightbox = () => {
        setSelectedImageIndex(null)
        document.body.style.overflow = 'unset'
    }

    const navigateLightbox = (direction) => {
        if (selectedImageIndex === null) return

        let newIndex = selectedImageIndex + direction
        if (newIndex < 0) newIndex = filteredItems.length - 1
        if (newIndex >= filteredItems.length) newIndex = 0

        setSelectedImageIndex(newIndex)
    }

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImageIndex === null) return

            if (e.key === 'Escape') closeLightbox()
            if (e.key === 'ArrowLeft') navigateLightbox(-1)
            if (e.key === 'ArrowRight') navigateLightbox(1)
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [selectedImageIndex, filteredItems.length])

    return (
        <section id={galleryContent.id} className="py-20 bg-white dark:bg-ideas-dark transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-12 text-center space-y-4">
                    <h2 className="text-4xl font-bold text-ideas-dark dark:text-ideas-light">
                        {galleryContent.title}
                    </h2>
                    <p className="text-lg text-ideas-dark/70 dark:text-ideas-light/70 max-w-2xl mx-auto">
                        {galleryContent.highlight}
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {galleryContent.categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-ideas-primary text-white shadow-lg scale-105'
                                    : 'bg-gray-100 dark:bg-ideas-gray/10 text-ideas-dark/70 dark:text-ideas-light/70 hover:bg-gray-200 dark:hover:bg-ideas-gray/20'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredItems.map((item, index) => (
                        <div
                            key={`${item.image}-${index}`}
                            className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-ideas-gray/10 cursor-pointer"
                            onClick={() => openLightbox(index)}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-ideas-primary text-xs font-bold uppercase tracking-wider mb-1">
                                    {item.category}
                                </span>
                                <h3 className="text-white font-medium text-lg line-clamp-1">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImageIndex !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 hidden md:block"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 hidden md:block"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="relative w-full max-w-5xl aspect-[4/3] md:aspect-[16/9] max-h-[85vh]">
                        <Image
                            src={filteredItems[selectedImageIndex].image}
                            alt={filteredItems[selectedImageIndex].title}
                            fill
                            className="object-contain"
                            quality={100}
                            priority
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                            <h3 className="text-white text-xl font-medium mb-2">
                                {filteredItems[selectedImageIndex].title}
                            </h3>
                            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm backdrop-blur-md">
                                {filteredItems[selectedImageIndex].category}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
