import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StructuredData from '../components/StructuredData'
import GoogleAnalytics from '../components/GoogleAnalytics'
import GoogleTagManager, { GoogleTagManagerNoScript } from '../components/GoogleTagManager'
import { generateMetadata as generateSEOMetadata } from '../config/metadata'

export const metadata = generateSEOMetadata({
    title: 'Ideas Serigrafía | Serigrafía Profesional en Posadas, Misiones',
    description: 'Servicios de serigrafía profesional en Posadas, Misiones. Más de 50 años de experiencia en estampado textil, sublimación y diseño gráfico. Calidad y creatividad para marcas y emprendimientos.',
})

export default function RootLayout({ children }) {
    return (
        <html lang="es" className="dark">
            <head>
                <meta name="theme-color" content="#1a1a1a" />
                <meta name="color-scheme" content="dark light" />
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
                <StructuredData />
                <GoogleTagManager />
            </head>
            <body className="flex min-h-screen flex-col bg-ideas-light text-ideas-dark transition-colors dark:bg-ideas-dark dark:text-ideas-light">
                <GoogleTagManagerNoScript />
                <GoogleAnalytics />
                <Header />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
