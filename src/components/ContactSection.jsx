'use client'

import React, { useState } from 'react'
import { contactContent } from '../content/siteContent'

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ success: false, message: '' })

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: '¡Mensaje enviado con éxito! Te responderemos a la brevedad.'
        })
        // Reset form
        setFormData({ name: '', email: '', message: '' })
      } else {
        console.error('API Error Response:', data);
        const errorMessage = data.details || data.error || 'Error al enviar el mensaje';
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus({
        success: false,
        message: error.message || 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus.success) {
    return (
      <section id={contactContent.id} className="space-y-10 py-16">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold text-ideas-dark dark:text-ideas-light sm:text-4xl">
            ¡Mensaje enviado con éxito!
          </h2>
          <p className="mx-auto max-w-2xl text-base text-ideas-dark/80 dark:text-ideas-light/80">
            {submitStatus.message}
          </p>
          <button
            onClick={() => setSubmitStatus({ success: false, message: '' })}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-ideas-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-transform hover:-translate-y-0.5 hover:bg-ideas-secondary"
          >
            Enviar otro mensaje
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id={contactContent.id} className="space-y-10 py-16">
      <div className="space-y-4 text-center md:text-left">
        <h2 className="text-3xl font-bold text-ideas-dark dark:text-ideas-light sm:text-4xl">
          {contactContent.title}
        </h2>
        <p className="mx-auto max-w-2xl text-base text-ideas-dark/80 dark:text-ideas-light/80">
          {contactContent.description}
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="space-y-8">
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 rounded-3xl border border-ideas-gray/20 bg-white/70 p-6 shadow-lg shadow-ideas-dark/5 backdrop-blur dark:border-ideas-gray/10 dark:bg-ideas-dark/30"
          >
            <div className="grid gap-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-ideas-dark/70 dark:text-ideas-light/70" htmlFor="name">
                Nombre *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Juan Pérez"
                className="rounded-xl border border-ideas-gray/40 bg-transparent px-4 py-3 text-sm text-ideas-dark focus:border-ideas-primary focus:outline-none focus:ring-2 focus:ring-ideas-primary/30 dark:text-ideas-light"
                required
              />
              {formData.name === '' && (
                <p className="text-xs text-red-500">El nombre es obligatorio</p>
              )}
            </div>
            <div className="grid gap-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-ideas-dark/70 dark:text-ideas-light/70" htmlFor="email">
                Correo electrónico *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="hola@ejemplo.com"
                className="rounded-xl border border-ideas-gray/40 bg-transparent px-4 py-3 text-sm text-ideas-dark focus:border-ideas-primary focus:outline-none focus:ring-2 focus:ring-ideas-primary/30 dark:text-ideas-light"
                required
              />
              {formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? (
                <p className="text-xs text-red-500">Por favor ingresa un correo electrónico válido</p>
              ) : null}
            </div>
            <div className="grid gap-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-ideas-dark/70 dark:text-ideas-light/70" htmlFor="message">
                Mensaje *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Contanos qué necesitas producir..."
                className="rounded-2xl border border-ideas-gray/40 bg-transparent px-4 py-3 text-sm text-ideas-dark focus:border-ideas-primary focus:outline-none focus:ring-2 focus:ring-ideas-primary/30 dark:text-ideas-light"
                required
              />
              {formData.message === '' && (
                <p className="text-xs text-red-500">El mensaje es obligatorio</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting || !formData.name || !formData.email || !formData.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)}
              className="inline-flex items-center justify-center rounded-full bg-ideas-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-transform hover:-translate-y-0.5 hover:bg-ideas-secondary disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar consulta'}
            </button>
            <p className="text-xs text-ideas-dark/60 dark:text-ideas-light/60">
              * Campos obligatorios
            </p>
            {submitStatus.message && !submitStatus.success && (
              <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
                {submitStatus.message}
              </div>
            )}
          </form>

          <div className="grid gap-4 rounded-3xl border border-ideas-gray/20 bg-white/70 p-6 shadow-lg shadow-ideas-dark/5 backdrop-blur dark:border-ideas-gray/10 dark:bg-ideas-dark/30">
            {contactContent.info.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ideas-dark/60 dark:text-ideas-light/60">
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-base font-medium text-ideas-dark transition-colors hover:text-ideas-primary dark:text-ideas-light"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-base font-medium text-ideas-dark dark:text-ideas-light">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-ideas-gray/20 shadow-lg shadow-ideas-dark/5 dark:border-ideas-gray/10">
          <iframe
            title={contactContent.map.title}
            src={contactContent.map.src}
            width="100%"
            height="100%"
            style={{ minHeight: '420px', border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
