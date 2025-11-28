# 🚀 DESPLIEGUE EN VERCEL - GUÍA RÁPIDA

## ✅ Estado: LISTO PARA DESPLEGAR

Tu proyecto está completamente preparado para Vercel.

## 📋 PASOS RÁPIDOS

### 1️⃣ Obtén tus credenciales de Resend

Ve a https://resend.com y obtén:
- API Key (empieza con `re_`)
- Email verificado para enviar desde

### 2️⃣ Sube a GitHub

```bash
git init
git add .
git commit -m "Preparado para Vercel"
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

### 3️⃣ Despliega en Vercel

1. Ve a https://vercel.com/new
2. Conecta tu GitHub
3. Importa tu repositorio
4. Agrega estas variables de entorno:
   - `RESEND_API_KEY` = tu API key de Resend
   - `NEXT_PUBLIC_RESEND_FROM` = Ideas Serigrafía <tu-email@verificado.com>
   - `NEXT_PUBLIC_RESEND_TO` = email@destino.com
5. Haz clic en "Deploy"

### 4️⃣ ¡Listo!

Tu sitio estará en vivo en 2-3 minutos en:
`https://tu-proyecto.vercel.app`

## 📚 Documentación Completa

- **README_VERCEL.md** - Guía detallada paso a paso
- **DEPLOYMENT_CHECKLIST.md** - Checklist completo
- **readme.md** - Documentación del proyecto

## 🔧 Verificar antes de desplegar

```powershell
.\verify-deployment.ps1
```

## ❓ ¿Necesitas ayuda?

Lee README_VERCEL.md para instrucciones detalladas y solución de problemas.

---

**Tiempo estimado**: 10 minutos
**Dificultad**: Fácil
**Costo**: Gratis (plan gratuito de Vercel)
