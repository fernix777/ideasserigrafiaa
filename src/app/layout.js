import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
    title: 'Ideas Serigrafía',
    description: 'Servicios de serigrafía profesional',
}

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className="flex min-h-screen flex-col bg-ideas-light text-ideas-dark transition-colors dark:bg-ideas-dark dark:text-ideas-light">
                <Header />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
