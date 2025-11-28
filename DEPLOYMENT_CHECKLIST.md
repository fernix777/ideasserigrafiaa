# ✅ Checklist de Despliegue en Vercel

## Antes de Desplegar

- [ ] **Código en Git**: Tu proyecto está en un repositorio Git
  ```bash
  git status  # Verifica el estado
  git add .
  git commit -m "Preparado para Vercel"
  ```

- [ ] **Build exitoso localmente**: El proyecto compila sin errores
  ```bash
  npm run build
  ```

- [ ] **Variables de entorno preparadas**: Tienes los siguientes datos:
  - [ ] API Key de Resend (`RESEND_API_KEY`)
  - [ ] Email verificado en Resend (`NEXT_PUBLIC_RESEND_FROM`)
  - [ ] Email de destino (`NEXT_PUBLIC_RESEND_TO`)

## Configuración de Resend

- [ ] **Cuenta creada**: Tienes cuenta en [resend.com](https://resend.com)
- [ ] **API Key generada**: Creada en [resend.com/api-keys](https://resend.com/api-keys)
- [ ] **Dominio/Email verificado**: 
  - Opción A: Dominio verificado en [resend.com/domains](https://resend.com/domains)
  - Opción B: Usando `onboarding@resend.dev` para pruebas

## Despliegue en Vercel

### Método 1: Desde GitHub (Recomendado)

- [ ] **Código en GitHub**:
  ```bash
  git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
  git push -u origin main
  ```

- [ ] **Proyecto importado en Vercel**:
  1. Ve a [vercel.com/new](https://vercel.com/new)
  2. Conecta tu cuenta de GitHub
  3. Selecciona el repositorio
  4. Haz clic en "Import"

- [ ] **Variables de entorno configuradas**:
  En Vercel Dashboard → Settings → Environment Variables:
  - [ ] `RESEND_API_KEY` = `re_tu_api_key`
  - [ ] `NEXT_PUBLIC_RESEND_FROM` = `Ideas Serigrafía <email@verificado.com>`
  - [ ] `NEXT_PUBLIC_RESEND_TO` = `destino@email.com`

- [ ] **Despliegue iniciado**: Haz clic en "Deploy"

### Método 2: Con Vercel CLI

- [ ] **CLI instalado**:
  ```bash
  npm install -g vercel
  ```

- [ ] **Login realizado**:
  ```bash
  vercel login
  ```

- [ ] **Proyecto desplegado**:
  ```bash
  vercel
  ```

- [ ] **Variables configuradas**:
  ```bash
  vercel env add RESEND_API_KEY
  vercel env add NEXT_PUBLIC_RESEND_FROM
  vercel env add NEXT_PUBLIC_RESEND_TO
  ```

- [ ] **Despliegue a producción**:
  ```bash
  vercel --prod
  ```

## Verificación Post-Despliegue

- [ ] **Sitio accesible**: La URL de Vercel carga correctamente
- [ ] **Página principal**: Se ve correctamente
- [ ] **Header y Footer**: Logo y enlaces funcionan
- [ ] **Navegación**: Todas las páginas cargan
- [ ] **Formulario de contacto**: 
  - [ ] Se puede llenar
  - [ ] Se envía sin errores
  - [ ] Llega el email de confirmación
- [ ] **Responsive**: Funciona en móvil y desktop
- [ ] **Performance**: Verifica métricas en Vercel Dashboard

## Configuración de Dominio Personalizado (Opcional)

- [ ] **Dominio agregado**: Settings → Domains → Add Domain
- [ ] **DNS configurado**:
  - [ ] Registro A: `76.76.21.21`
  - [ ] Registro CNAME: `www` → `cname.vercel-dns.com`
- [ ] **SSL activo**: Vercel genera certificado automáticamente (espera 24-48h)

## Monitoreo y Mantenimiento

- [ ] **Analytics activado**: Dashboard → Analytics
- [ ] **Logs revisados**: Dashboard → Deployments → Logs
- [ ] **Alertas configuradas**: Settings → Notifications
- [ ] **Auto-deploy activado**: Git pushes despliegan automáticamente

## Solución de Problemas

Si algo falla, revisa:

1. **Logs de build**: Vercel Dashboard → Deployments → [tu deploy] → Build Logs
2. **Logs de runtime**: Vercel Dashboard → Deployments → [tu deploy] → Function Logs
3. **Variables de entorno**: Settings → Environment Variables
4. **Resend Dashboard**: [resend.com/emails](https://resend.com/emails) para ver emails enviados

## URLs Importantes

- **Tu sitio**: `https://tu-proyecto.vercel.app`
- **Dashboard Vercel**: `https://vercel.com/dashboard`
- **Dashboard Resend**: `https://resend.com/overview`
- **Repositorio**: `https://github.com/TU_USUARIO/TU_REPO`

---

## 🎉 ¡Despliegue Completado!

Una vez marcados todos los checkboxes, tu aplicación estará en producción y lista para recibir tráfico.

**Próximos pasos sugeridos:**
- Comparte la URL con clientes
- Configura Google Analytics
- Agrega tu dominio personalizado
- Configura backups automáticos del código
