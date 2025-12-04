const video1 = '/assets/images/video1.mp4'
const video2 = '/assets/images/video2.mp4'
const video3 = '/assets/images/video3.mp4'
const video4 = '/assets/images/video4.mp4'
const video5 = '/assets/images/video5.mp4'
const video6 = '/assets/images/video6.mp4'
const video7 = '/assets/images/video7.mp4'

export const navigation = [
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Trabajos', href: '#trabajos' },
  { name: 'Contacto', href: '#contacto' }
]

export const heroContent = {
  title: 'Ideas Serigrafía — Calidad y creatividad en Posadas',
  description:
    'Diseñamos y producimos textiles con procesos personalizados para marcas y emprendimientos. Desde el concepto hasta la entrega final, cuidamos cada detalle.',
  primaryCta: {
    label: 'Solicitar presupuesto',
    href: '#contacto',
    description: 'Te respondemos en menos de 24 horas'
  },
  secondaryCta: {
    label: 'Escribir por WhatsApp',
    href: 'https://wa.me/5493764695751',
    external: true
  },
  badges: ['Serigrafía textil', 'Sublimación', 'Diseño gráfico'],
  mediaAlt: 'Productos estampados de Ideas Serigrafía',
  videos: [
    {
      title: 'Recorrido por el taller y los procesos de Ideas Serigrafía',
      src: video1
    },
    {
      title: 'Taller en acción',
      src: video2
    },
    {
      title: 'Control de color',
      src: video3
    }
  ]
}

export const aboutContent = {
  id: 'nosotros',
  title: 'Nosotros',
  description:
    'Nacimos hace más de 50 años en la Ciudad de Buenos Aires y trajimos a la tierra colorada la experiencia, el ritmo innovador y la mirada cosmopolita de la capital. Hoy, desde nuestro taller en Posadas, combinamos técnicas tradicionales de serigrafía con tecnología de última generación para diseñar y producir piezas textiles únicas para marcas, instituciones y proyectos culturales del NEA y todo el país.',
  pillars: [
    {
      title: 'Herencia y vanguardia',
      description: 'Integramos el oficio serigráfico aprendido en Buenos Aires con procesos digitales y automatizados para lograr resultados consistentes.'
    },
    {
      title: 'Equipo especialista',
      description: 'Artistas, diseñadores y técnicos acompañan cada etapa —desde el concepto hasta la entrega final— con asesoramiento cercano y riguroso.'
    },
    {
      title: 'Impacto regional',
      description: 'Producimos en Posadas con estándares de gran ciudad, tiempos ágiles y logística para atender Misiones, el NEA y clientes nacionales.'
    }
  ]
}

export const galleryContent = {
  id: 'trabajos',
  title: 'Trabajos',
  highlight:
    'Seleccionamos algunos proyectos recientes que muestran la variedad de técnicas, materiales y estilos que ofrecemos.',
  categories: ['Todos', 'Cartelería', 'Plotter', 'Dulcería', 'Branding', 'Varios'],
  items: [
    // Cartelería
    { title: 'Cartel Carne de Cerdo', category: 'Cartelería', image: '/assets/images/carne-cerdo-cartel.jpg' },
    { title: 'Carnicería La Familia', category: 'Cartelería', image: '/assets/images/carniceria-laflia.jpg' },
    { title: 'Cartel Empanadas', category: 'Cartelería', image: '/assets/images/cartel empanadas.jpg' },
    { title: 'Hamburguesería', category: 'Cartelería', image: '/assets/images/cartelhamburgueseria.jpg' },
    { title: 'Despensa', category: 'Cartelería', image: '/assets/images/despensa.jpg' },
    { title: 'Ferretería', category: 'Cartelería', image: '/assets/images/ferreteria.jpg' },
    { title: 'Mercería', category: 'Cartelería', image: '/assets/images/merceria.jpg' },
    { title: 'Pollería', category: 'Cartelería', image: '/assets/images/polleria1.jpg' },
    { title: 'Vinoteca', category: 'Cartelería', image: '/assets/images/vinoteca.jpg' },

    // Plotter
    { title: 'Plotter Auto 1', category: 'Plotter', image: '/assets/images/auto_plotter2.jpg' },
    { title: 'Plotter Auto 2', category: 'Plotter', image: '/assets/images/auto_plotter3.jpg' },
    { title: 'Plotter Auto 3', category: 'Plotter', image: '/assets/images/plotter_auto.jpg' },

    // Dulcería
    { title: 'Dulcería 1', category: 'Dulcería', image: '/assets/images/dulce1.jpg' },
    { title: 'Dulcería 2', category: 'Dulcería', image: '/assets/images/dulce2.jpg' },
    { title: 'Dulcería 3', category: 'Dulcería', image: '/assets/images/dulce3.jpg' },
    { title: 'Dulcería 4', category: 'Dulcería', image: '/assets/images/dulce4.jpg' },

    // Branding
    { title: 'Barbería Zeus', category: 'Branding', image: '/assets/images/barberia_zeus.jpg' },
    { title: 'Casa Bianca', category: 'Branding', image: '/assets/images/casa-bianca.jpg' },
    { title: 'Constanza', category: 'Branding', image: '/assets/images/constanza.jpg' },
    { title: 'Cuervos', category: 'Branding', image: '/assets/images/cuervos.jpg' },
    { title: 'Evolución', category: 'Branding', image: '/assets/images/evolucion.jpg' },
    { title: 'Filomena', category: 'Branding', image: '/assets/images/filomena.jpg' },
    { title: 'Línea Tecnología', category: 'Branding', image: '/assets/images/linea_tecnologia.jpg' },
    { title: 'Logo Redefinido', category: 'Branding', image: '/assets/images/logo-redefinido.png' },
    { title: 'Peluquería', category: 'Branding', image: '/assets/images/peluqueria.jpg' },
    { title: 'Pololo Llantas', category: 'Branding', image: '/assets/images/pololo_llantas.jpg' },
    { title: 'Salón Lucía', category: 'Branding', image: '/assets/images/salon_lucia.jpg' },
    { title: 'Yuyi', category: 'Branding', image: '/assets/images/yuyi.jpg' },

    // Varios (WhatsApp Images)
    { title: 'Trabajo Reciente 1', category: 'Varios', image: '/assets/images/Imagen de WhatsApp 2025-10-28 a las 17.02.43_7e7ce9ff.jpg' },
    { title: 'Trabajo Reciente 2', category: 'Varios', image: '/assets/images/Imagen de WhatsApp 2025-10-28 a las 17.02.43_943bf77b.jpg' },
    { title: 'Trabajo Reciente 3', category: 'Varios', image: '/assets/images/Imagen de WhatsApp 2025-10-28 a las 17.03.17_d8651093.jpg' },
    { title: 'Trabajo Reciente 4', category: 'Varios', image: '/assets/images/WhatsApp Image 2024-11-08 at 18.04.15.jpeg' },
    { title: 'Trabajo Reciente 5', category: 'Varios', image: '/assets/images/WhatsApp Image 2024-11-08 at 18.04.17.jpeg' },
    { title: 'Trabajo Reciente 6', category: 'Varios', image: '/assets/images/WhatsApp Image 2024-11-08 at 18.04.18.jpeg' },
    { title: 'Trabajo Reciente 7', category: 'Varios', image: '/assets/images/WhatsApp Image 2024-11-08 at 18.04.19.jpeg' },
    { title: 'Trabajo Reciente 8', category: 'Varios', image: '/assets/images/WhatsApp Image 2024-11-08 at 18.04.22.jpeg' },
    { title: 'Trabajo Reciente 9', category: 'Varios', image: '/assets/images/WhatsApp Image 2024-11-08 at 18.04.23.jpeg' },
    { title: 'Trabajo Reciente 10', category: 'Varios', image: '/assets/images/WhatsApp Image 2024-11-08 at 18.04.36.jpeg' },
    { title: 'Trabajo Reciente 11', category: 'Varios', image: '/assets/images/WhatsApp Image 2024-11-08 at 18.04.38 (1).jpeg' },
    { title: 'Trabajo Reciente 12', category: 'Varios', image: '/assets/images/WhatsApp Image 2024-11-08 at 18.04.38.jpeg' },
    { title: 'Trabajo Reciente 13', category: 'Varios', image: '/assets/images/WhatsApp Image 2024-11-08 at 18.04.41 (1).jpeg' },
    { title: 'Trabajo Reciente 14', category: 'Varios', image: '/assets/images/WhatsApp Image 2024-11-08 at 18.04.41.jpeg' },
    { title: 'Trabajo Reciente 15', category: 'Varios', image: '/assets/images/WhatsApp Image 2024-11-08 at 18.04.42.jpeg' },
    { title: 'Trabajo Reciente 16', category: 'Varios', image: '/assets/images/WhatsApp Image 2024-11-08 at 18.04.43.jpeg' },
    { title: 'Trabajo Reciente 17', category: 'Varios', image: '/assets/images/WhatsApp Image 2024-11-08 at 18.05.01.jpeg' }
  ]
}

export const contactContent = {
  id: 'contacto',
  title: 'Contacto',
  description:
    'Contanos sobre tu idea o necesidad de producción y coordinemos una reunión. Respondemos en menos de 24 horas.',
  info: [
    {
      label: 'WhatsApp',
      value: '+54 9 3764 69-5751',
      href: 'https://wa.me/5493764695751'
    },
    {
      label: 'Email',
      value: 'marioserigraf@hotmail.com',
      href: 'mailto:marioserigraf@hotmail.com'
    },
    {
      label: 'Dirección',
      value: 'Chacra 148 casa A 1, N3300, Posadas, Misiones, Argentina',
      href: 'https://www.google.com/maps/place/Ideas+serigrafia/@-27.3690065,-55.9519581,17z/data=!3m1!4b1!4m6!3m5!1s0x9457bd05e3f82069:0x71dc1f51379e07de!8m2!3d-27.3690113!4d-55.9473447!16s%2Fg%2F11x_m39p35?hl=es-419&entry=ttu',
      external: true
    }
  ],
  map: {
    title: 'Mapa de Ideas Serigrafía',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.8891586540835!2d-55.9519581!3d-27.3690065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457bd05e3f82069%3A0x71dc1f51379e07de!2sIdeas%20Serigrafia!5e0!3m2!1ses-419!2sar!4v1732673100000!5m2!1ses-419!2sar'
  }
}

export const footerContent = {
  copy: '© Ideas Serigrafía — Chacra 148 casa A 1, N3300, Posadas, Misiones',
  socials: [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/ideasserigrafia'
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61578359083931'
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@ideasserigrafia'
    }
  ]
}

export const videoContent = {
  id: 'videos',
  title: 'Explorá nuestros procesos en video',
  description:
    'Una selección de registros para conocer cómo trabajamos cada etapa: desde el setup de marcos hasta los detalles finales de producción.',
  items: [
    {
      title: 'Preparación de marcos',
      description: 'Nuestro proceso para emulsionar y registrar los marcos antes de imprimir.',
      src: video1
    },
    {
      title: 'Taller en acción',
      description: 'Vista general del taller mientras corren varias producciones en simultáneo.',
      src: video2
    },
    {
      title: 'Control de color',
      description: 'Ajustamos tintas y probamos tonos para asegurar colores precisos.',
      src: video3
    },
    {
      title: 'Impresión textil',
      description: 'Secuencia completa de impresión sobre remeras premium.',
      src: video4
    },
    {
      title: 'Secado y curado',
      description: 'Mostramos cómo fijamos las tintas para garantizar durabilidad.',
      src: video5
    },
    {
      title: 'Detalle de acabados',
      description: 'Enfoque en terminaciones y control de calidad antes de la entrega.',
      src: video6
    },
    {
      title: 'Empaquetado final',
      description: 'Empaquetamos los pedidos listos para enviar a clientes y puntos de venta.',
      src: video7
    }
  ]
}
