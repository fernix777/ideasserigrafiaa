# Guía de Despliegue en Vercel - Ideas Serigrafía

## 📋 Requisitos Previos

1. **Cuenta de Vercel**: Crea una cuenta gratuita en [vercel.com](https://vercel.com)
2. **Cuenta de Resend**: Necesitarás una API key de [resend.com](https://resend.com) para el envío de emails
3. **Git**: Tu proyecto debe estar en un repositorio de Git (GitHub, GitLab, o Bitbucket)

## 🚀 Pasos para Desplegar

### Opción 1: Despliegue desde GitHub (Recomendado)

1. **Sube tu código a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Preparado para Vercel"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```

2. **Conecta con Vercel**:
   - Ve a [vercel.com/new](https://vercel.com/new)
   - Selecciona "Import Git Repository"
   - Autoriza a Vercel para acceder a tu GitHub
   - Selecciona el repositorio `ideasserigrafia.com`

3. **Configura el proyecto**:
   - **Framework Preset**: Next.js (se detecta automáticamente)
   - **Root Directory**: `./` (dejar por defecto)
   - **Build Command**: `npm run build` (ya configurado)
   - **Output Directory**: `.next` (automático)

4. **Configura las Variables de Entorno**:
   
   En la sección "Environment Variables", agrega:
   
   | Variable | Valor | Descripción |
   |----------|-------|-------------|
   | `RESEND_API_KEY` | `re_tu_api_key_real` | Tu API key de Resend |
   | `NEXT_PUBLIC_RESEND_FROM` | `Ideas Serigrafía <tu-email@verificado.com>` | Email verificado en Resend |
   | `NEXT_PUBLIC_RESEND_TO` | `destino@email.com` | Email donde recibirás los mensajes |

   > ⚠️ **IMPORTANTE**: El email en `NEXT_PUBLIC_RESEND_FROM` debe estar verificado en tu cuenta de Resend

5. **Despliega**:
   - Haz clic en "Deploy"
   - Espera 1-2 minutos mientras Vercel construye y despliega tu aplicación
   - ¡Listo! Tu sitio estará disponible en `https://tu-proyecto.vercel.app`

### Opción 2: Despliegue con Vercel CLI

1. **Instala Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Inicia sesión**:
   ```bash
   vercel login
   ```

3. **Despliega**:
   ```bash
   vercel
   ```
   
   Sigue las instrucciones en pantalla:
   - Set up and deploy? **Y**
   - Which scope? Selecciona tu cuenta
   - Link to existing project? **N**
   - What's your project's name? `ideasserigrafia`
   - In which directory is your code located? `./`
   - Want to override the settings? **N**

4. **Configura variables de entorno**:
   ```bash
   vercel env add RESEND_API_KEY
   vercel env add NEXT_PUBLIC_RESEND_FROM
   vercel env add NEXT_PUBLIC_RESEND_TO
   ```

5. **Despliega a producción**:
   ```bash
   vercel --prod
   ```

## 🔧 Configuración de Resend

1. **Obtén tu API Key**:
   - Ve a [resend.com/api-keys](https://resend.com/api-keys)
   - Crea una nueva API key
   - Copia la key (comienza con `re_`)

2. **Verifica tu dominio o email**:
   - Ve a [resend.com/domains](https://resend.com/domains)
   - Opción A: Verifica tu dominio completo (recomendado para producción)
   - Opción B: Usa el dominio de prueba `onboarding@resend.dev` (solo para testing)

3. **Configura el email de origen**:
   - Si verificaste tu dominio: `Ideas Serigrafía <contacto@tudominio.com>`
   - Si usas el dominio de prueba: `Ideas Serigrafía <onboarding@resend.dev>`

## 📝 Variables de Entorno Requeridas

Crea estas variables en el dashboard de Vercel:

```env
# API Key de Resend (OBLIGATORIO)
RESEND_API_KEY=re_tu_api_key_aquí

# Email verificado desde el que se enviarán los correos (OBLIGATORIO)
NEXT_PUBLIC_RESEND_FROM=Ideas Serigrafía <email@verificado.com>

# Email donde recibirás los mensajes del formulario de contacto (OBLIGATORIO)
NEXT_PUBLIC_RESEND_TO=tu-email@destino.com
```

## 🔄 Actualizaciones Automáticas

Una vez conectado con GitHub:
- Cada `git push` a la rama `main` desplegará automáticamente a producción
- Los pull requests crearán previews automáticos
- Puedes ver el estado de los despliegues en el dashboard de Vercel

## 🌐 Dominio Personalizado

Para usar tu propio dominio:

1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Agrega tu dominio (ej: `ideasserigrafia.com`)
4. Configura los DNS según las instrucciones de Vercel:
   - Tipo: `A` → Valor: `76.76.21.21`
   - Tipo: `CNAME` → Nombre: `www` → Valor: `cname.vercel-dns.com`

## ✅ Verificación Post-Despliegue

Después del despliegue, verifica:

1. **Página principal**: Debe cargar correctamente
2. **Formulario de contacto**: Envía un mensaje de prueba
3. **Recepción de email**: Verifica que llegue el correo
4. **Responsive**: Prueba en móvil y desktop
5. **Performance**: Vercel te mostrará métricas automáticamente

## 🐛 Solución de Problemas

### Error: "RESEND_API_KEY is not set"
- Verifica que agregaste la variable en Vercel
- Asegúrate de que no tiene espacios extra
- Redespliega después de agregar variables

### Error: "Error al enviar el correo"
- Verifica que el email en `NEXT_PUBLIC_RESEND_FROM` esté verificado en Resend
- Revisa los logs en el dashboard de Resend
- Comprueba que la API key sea válida

### El sitio no carga
- Revisa los logs en Vercel Dashboard → Deployments → [tu despliegue] → Logs
- Verifica que el build se completó exitosamente
- Comprueba que todas las dependencias estén en `package.json`

## 📊 Monitoreo

Vercel proporciona automáticamente:
- **Analytics**: Tráfico y rendimiento
- **Logs**: Errores y requests
- **Speed Insights**: Métricas de velocidad
- **Web Vitals**: Core Web Vitals

Accede desde: Dashboard → Tu Proyecto → Analytics/Logs

## 🔒 Seguridad

- ✅ Las variables de entorno están encriptadas
- ✅ HTTPS automático con certificado SSL
- ✅ Las API keys nunca se exponen al cliente
- ✅ Protección DDoS incluida

## 📞 Soporte

- **Documentación Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Documentación Resend**: [resend.com/docs](https://resend.com/docs)
- **Comunidad Vercel**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

---

**¡Tu aplicación está lista para producción!** 🎉
