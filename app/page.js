import Hero from '../src/components/Hero'
import AboutSection from '../src/components/AboutSection'
import PhotoGallery from '../src/components/PhotoGallery'
import ContactSection from '../src/components/ContactSection'

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-6xl px-4">
            <Hero />
            <AboutSection />
            <PhotoGallery />
            <ContactSection />
        </div>
    )
}
