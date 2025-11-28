import React from 'react'
import { aboutContent } from '../content/siteContent'

function AboutSection() {
  return (
    <section id={aboutContent.id} className="space-y-6 py-16">
      <div className="space-y-3 text-center md:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-ideas-primary sm:text-4xl">
          {aboutContent.title}
        </h2>
        <p className="mx-auto max-w-3xl text-base text-ideas-dark/80 dark:text-ideas-light/80">
          {aboutContent.description}
        </p>
      </div>
      <dl className="grid gap-6 md:grid-cols-3">
        {aboutContent.pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-2xl border border-ideas-gray/30 bg-white/60 p-6 shadow-sm shadow-ideas-dark/5 backdrop-blur dark:border-ideas-gray/20 dark:bg-ideas-dark/40"
          >
            <dt className="text-lg font-semibold text-ideas-dark dark:text-ideas-light">
              {pillar.title}
            </dt>
            <dd className="mt-2 text-sm text-ideas-dark/70 dark:text-ideas-light/70">
              {pillar.description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default AboutSection
