import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ThemeProvider from '../components/ThemeProvider'
import { themeScript } from './theme-script'

export const metadata = {
    title: 'Ideas Serigrafía',
    description: 'Servicios de serigrafía profesional',
}

export default function RootLayout({ children }) {
    return (
        <html lang="es" suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: themeScript,
                    }}
                />
            </head>
            <body className="flex min-h-screen flex-col bg-ideas-light text-ideas-dark transition-colors dark:bg-ideas-dark dark:text-ideas-light">
                <ThemeProvider>
                    <Header />
                    <main className="flex-1">
                        {children}
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
