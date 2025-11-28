# Ideas Serigrafía - Sitio Web

Sitio web profesional de Ideas Serigrafía, empresa de serigrafía ubicada en San Salvador de Jujuy, Argentina.

## 🚀 Despliegue Rápido en Vercel

### Opción 1: Desde GitHub (Recomendado)

1. **Sube tu código a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Preparado para Vercel"
   git remote add origin https://github.com/TU_USUARIO/ideasserigrafia.git
   git push -u origin main
   ```

2. **Despliega en Vercel**:
   - Ve a [vercel.com/new](https://vercel.com/new)
   - Importa tu repositorio de GitHub
   - Configura las variables de entorno (ver abajo)
   - Haz clic en "Deploy"

3. **Configura las variables de entorno** en Vercel Dashboard:
   - `RESEND_API_KEY` - Tu API key de Resend
   - `NEXT_PUBLIC_RESEND_FROM` - Email verificado en Resend
   - `NEXT_PUBLIC_RESEND_TO` - Email donde recibirás los mensajes

### Opción 2: Con Vercel CLI

```bash
# Instala Vercel CLI
npm install -g vercel

# Inicia sesión
vercel login

# Despliega
vercel

# Configura variables de entorno
vercel env add RESEND_API_KEY
vercel env add NEXT_PUBLIC_RESEND_FROM
vercel env add NEXT_PUBLIC_RESEND_TO

# Despliega a producción
vercel --prod
```

## 📚 Documentación Completa

- **[README_VERCEL.md](./README_VERCEL.md)** - Guía completa de despliegue en Vercel
- **[DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)** - Checklist paso a paso

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 16
- **React**: 19.2
- **Estilos**: Tailwind CSS 3.4
- **Email**: Resend API
- **Video Player**: React Player
- **Hosting**: Vercel (optimizado)

## 💻 Desarrollo Local

### Requisitos

- Node.js 18.x o superior
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env.local

# Editar .env.local con tus credenciales
# RESEND_API_KEY=re_tu_api_key
# NEXT_PUBLIC_RESEND_FROM=Ideas Serigrafía <email@verificado.com>
# NEXT_PUBLIC_RESEND_TO=destino@email.com
```

### Comandos

```bash
# Desarrollo
npm run dev
# Abre http://localhost:3000

# Build de producción
npm run build

# Iniciar en producción
npm start

# Linting
npm run lint
```

## 🔧 Verificación Pre-Despliegue

Ejecuta el script de verificación antes de desplegar:

```powershell
.\verify-deployment.ps1
```

Este script verifica:
- ✅ Node.js y npm instalados
- ✅ Dependencias correctas
- ✅ Build exitoso
- ✅ Archivos de configuración presentes
- ✅ Estado de Git

## 📧 Configuración de Resend

1. Crea una cuenta en [resend.com](https://resend.com)
2. Genera una API key en [resend.com/api-keys](https://resend.com/api-keys)
3. Verifica tu dominio o usa `onboarding@resend.dev` para pruebas
4. Configura las variables de entorno con tus credenciales

## 🌐 Estructura del Sitio

### Header
- Logo de la empresa
- Menú de navegación (Nosotros, Trabajos, Contacto)
- Toggle de tema claro/oscuro
- Enlaces a redes sociales

### Secciones

- **Hero**: Imagen/video de bienvenida con CTA de WhatsApp
- **Nosotros**: Historia y descripción de la empresa
- **Trabajos**: Galería de imágenes y videos de trabajos realizados
- **Contacto**: Formulario de contacto y mapa de ubicación

### Footer
- Menú de navegación
- Copyright
- Enlaces a redes sociales
- Botón de WhatsApp

## 🎨 Paleta de Colores

- Tonos principales: Amarillo, naranja, ocre
- Tonos complementarios: Grises y oscuros
- Soporte para modo claro y oscuro

## 📱 Características

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Modo claro/oscuro
- ✅ Formulario de contacto funcional
- ✅ Integración con WhatsApp
- ✅ Galería de trabajos
- ✅ Optimizado para SEO
- ✅ Headers de seguridad
- ✅ Compresión automática
- ✅ Optimización de imágenes

## 🔒 Seguridad

- Headers de seguridad configurados
- Variables de entorno protegidas
- HTTPS automático en Vercel
- Validación de formularios
- Protección contra XSS y CSRF

## 📊 Monitoreo

Una vez desplegado en Vercel, tendrás acceso a:

- **Analytics**: Métricas de tráfico y rendimiento
- **Logs**: Errores y requests en tiempo real
- **Speed Insights**: Métricas de velocidad
- **Web Vitals**: Core Web Vitals

## 🆘 Soporte

Si encuentras problemas:

1. Revisa los logs en Vercel Dashboard
2. Consulta [README_VERCEL.md](./README_VERCEL.md)
3. Verifica las variables de entorno
4. Revisa la documentación de [Next.js](https://nextjs.org/docs)

## 📄 Licencia

Proyecto privado - Ideas Serigrafía © 2025

---

**¿Listo para desplegar?** Sigue la guía en [README_VERCEL.md](./README_VERCEL.md) o ejecuta `.\verify-deployment.ps1` para verificar que todo esté listo.
