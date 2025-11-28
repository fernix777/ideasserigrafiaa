import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import GallerySection from '../components/GallerySection'
import ContactSection from '../components/ContactSection'

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-6xl px-4">
            <Hero />
            <AboutSection />
            <GallerySection />
            <ContactSection />
        </div>
    )
}
