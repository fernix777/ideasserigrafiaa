'use client'

import { businessInfo, siteConfig } from '../config/metadata'

export default function StructuredData() {
    // LocalBusiness Schema
    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${siteConfig.url}/#localbusiness`,
        name: businessInfo.name,
        image: siteConfig.ogImage,
        description: businessInfo.description,
        url: siteConfig.url,
        telephone: businessInfo.phone,
        email: businessInfo.email,
        priceRange: businessInfo.priceRange,
        address: {
            '@type': 'PostalAddress',
            streetAddress: businessInfo.address.streetAddress,
            addressLocality: businessInfo.address.addressLocality,
            addressRegion: businessInfo.address.addressRegion,
            postalCode: businessInfo.address.postalCode,
            addressCountry: businessInfo.address.addressCountry
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: businessInfo.geo.latitude,
            longitude: businessInfo.geo.longitude
        },
        openingHoursSpecification: businessInfo.openingHours.map(hours => {
            const [days, time] = hours.split(' ')
            const [open, close] = time.split('-')

            return {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: days.split('-').map(day => {
                    const dayMap = {
                        'Mo': 'Monday',
                        'Tu': 'Tuesday',
                        'We': 'Wednesday',
                        'Th': 'Thursday',
                        'Fr': 'Friday',
                        'Sa': 'Saturday',
                        'Su': 'Sunday'
                    }
                    return dayMap[day]
                }),
                opens: open,
                closes: close
            }
        }),
        areaServed: businessInfo.areaServed.map(area => ({
            '@type': 'City',
            name: area
        })),
        sameAs: [
            businessInfo.social.instagram,
            businessInfo.social.facebook,
            businessInfo.social.tiktok
        ]
    }

    // Organization Schema
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: businessInfo.name,
        legalName: businessInfo.legalName,
        url: siteConfig.url,
        logo: `${siteConfig.url}/assets/images/logo.png`,
        foundingDate: businessInfo.foundingYear,
        description: businessInfo.description,
        email: businessInfo.email,
        telephone: businessInfo.phone,
        address: {
            '@type': 'PostalAddress',
            streetAddress: businessInfo.address.streetAddress,
            addressLocality: businessInfo.address.addressLocality,
            addressRegion: businessInfo.address.addressRegion,
            postalCode: businessInfo.address.postalCode,
            addressCountry: businessInfo.address.addressCountry
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: businessInfo.phone,
            contactType: 'customer service',
            email: businessInfo.email,
            availableLanguage: ['Spanish']
        },
        sameAs: [
            businessInfo.social.instagram,
            businessInfo.social.facebook,
            businessInfo.social.tiktok
        ]
    }

    // Service Schema
    const serviceSchemas = businessInfo.services.map((service, index) => ({
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${siteConfig.url}/#service-${index}`,
        serviceType: service.name,
        name: service.name,
        description: service.description,
        provider: {
            '@id': `${siteConfig.url}/#organization`
        },
        areaServed: businessInfo.areaServed.map(area => ({
            '@type': 'City',
            name: area
        })),
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: siteConfig.url,
            servicePhone: businessInfo.phone,
            serviceSmsNumber: businessInfo.whatsapp
        }
    }))

    // BreadcrumbList Schema
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Inicio',
                item: siteConfig.url
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Nosotros',
                item: `${siteConfig.url}/#nosotros`
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: 'Trabajos',
                item: `${siteConfig.url}/#trabajos`
            },
            {
                '@type': 'ListItem',
                position: 4,
                name: 'Contacto',
                item: `${siteConfig.url}/#contacto`
            }
        ]
    }

    // WebSite Schema
    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: businessInfo.name,
        description: siteConfig.description,
        publisher: {
            '@id': `${siteConfig.url}/#organization`
        },
        inLanguage: 'es-AR'
    }

    return (
        <>
            {/* LocalBusiness Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema)
                }}
            />

            {/* Organization Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema)
                }}
            />

            {/* Service Schemas */}
            {serviceSchemas.map((schema, index) => (
                <script
                    key={`service-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schema)
                    }}
                />
            ))}

            {/* BreadcrumbList Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema)
                }}
            />

            {/* WebSite Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema)
                }}
            />
        </>
    )
}
