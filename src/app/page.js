import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import PhotoGallery from '../components/PhotoGallery'
import ContactSection from '../components/ContactSection'

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
