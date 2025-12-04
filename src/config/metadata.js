// SEO Configuration and Metadata
// Centralized configuration for all SEO-related data

export const siteConfig = {
    name: 'Ideas Serigrafía',
    description: 'Servicios de serigrafía profesional en Posadas, Misiones. Más de 50 años de experiencia en estampado textil, sublimación y diseño gráfico. Calidad y creatividad para marcas y emprendimientos.',
    url: 'https://www.ideaserigrafia.com',
    ogImage: 'https://www.ideaserigrafia.com/og-image.jpg',
    locale: 'es_AR',
    type: 'website',
}

export const businessInfo = {
    name: 'Ideas Serigrafía',
    legalName: 'Ideas Serigrafía',
    description: 'Taller de serigrafía profesional con más de 50 años de experiencia. Diseñamos y producimos textiles personalizados con procesos de calidad para marcas, instituciones y proyectos culturales.',
    foundingYear: '1970',

    // Contact Information
    email: 'marioserigraf@hotmail.com',
    phone: '+54 9 3764 69-5751',
    whatsapp: '+5493764695751',

    // Address
    address: {
        streetAddress: 'Chacra 148 casa A 1',
        addressLocality: 'Posadas',
        addressRegion: 'Misiones',
        postalCode: 'N3300',
        addressCountry: 'AR',
        fullAddress: 'Chacra 148 casa A 1, N3300, Posadas, Misiones, Argentina'
    },

    // Geographic Coordinates (from Google Maps)
    geo: {
        latitude: -27.3690113,
        longitude: -55.9473447
    },

    // Service Area
    areaServed: [
        'Posadas',
        'Misiones',
        'Corrientes',
        'Chaco',
        'Formosa',
        'Argentina'
    ],

    // Social Media
    social: {
        instagram: 'https://www.instagram.com/ideasserigrafia',
        facebook: 'https://www.facebook.com/profile.php?id=61578359083931',
        tiktok: 'https://www.tiktok.com/@ideasserigrafia'
    },

    // Services
    services: [
        {
            name: 'Serigrafía Textil',
            description: 'Estampado profesional en textiles con tintas de alta calidad y durabilidad'
        },
        {
            name: 'Sublimación',
            description: 'Impresión por sublimación para diseños de alta definición en poliéster'
        },
        {
            name: 'Diseño Gráfico',
            description: 'Desarrollo de diseños personalizados para estampado y branding'
        },
        {
            name: 'Merchandising Corporativo',
            description: 'Producción de indumentaria y productos personalizados para empresas'
        },
        {
            name: 'Producciones Artísticas',
            description: 'Series limitadas y producciones especiales para artistas y eventos'
        }
    ],

    // Business Hours (adjust as needed)
    openingHours: [
        'Mo-Fr 09:00-18:00',
        'Sa 09:00-13:00'
    ],

    // Price Range
    priceRange: '$$'
}

export const seoKeywords = {
    primary: [
        'serigrafía Posadas',
        'estampado textil Misiones',
        'sublimación Posadas',
        'diseño gráfico Posadas',
        'serigrafía profesional'
    ],
    secondary: [
        'estampado remeras',
        'merchandising corporativo',
        'indumentaria personalizada',
        'serigrafía NEA',
        'taller serigrafía Misiones'
    ],
    local: [
        'serigrafía en Posadas',
        'estampado textil en Misiones',
        'taller de serigrafía Posadas',
        'sublimación en Posadas'
    ]
}

// Default metadata generator
export function generateMetadata({
    title = siteConfig.name,
    description = siteConfig.description,
    image = siteConfig.ogImage,
    url = siteConfig.url,
    type = 'website'
} = {}) {
    return {
        title,
        description,
        keywords: [...seoKeywords.primary, ...seoKeywords.secondary].join(', '),
        authors: [{ name: siteConfig.name }],
        creator: siteConfig.name,
        publisher: siteConfig.name,
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        metadataBase: new URL(siteConfig.url),
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: siteConfig.name,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: siteConfig.locale,
            type,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
            creator: '@ideasserigrafia',
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        verification: {
            google: 'google4ecbfb762c82a2aa',
        },
    }
}
