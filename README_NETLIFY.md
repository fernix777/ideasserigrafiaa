# Despliegue en Netlify

Instrucciones para desplegar este proyecto Next.js en Netlify.

Requisitos previos
- Node.js 18.x (la configuración del proyecto sugiere `node: 18.x`).
- Cuenta en Netlify.

Pasos locales (PowerShell)

1. Instalar dependencias:

```powershell
npm install
```

2. Probar build localmente:

```powershell
npm run build
npm run start
```

Configurar en Netlify

1. Subir el repositorio a Git (ya hecho) y conectar el repositorio en Netlify.
2. En Netlify Site Settings / Build & deploy: dejar el comando de build por defecto (`npm run build`).
3. No es necesario cambiar el directorio de publicación: el plugin de Netlify para Next.js gestionará la salida.
4. Asegurate de usar Node 18 en Netlify (puedes configurar `NODE_VERSION` o Netlify detectará por `package.json` `engines`).

Opcional: usar Netlify CLI

```powershell
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

Notas
- Se agregó `netlify.toml` con el plugin oficial `@netlify/plugin-nextjs`.
- Se actualizó `package.json` para exigir Node 18 y añadir el plugin en `devDependencies`.
- Si encuentras problemas con la versión de Node en Netlify, especifica la versión en "Environment" o añade un archivo `.nvmrc` con `18`.

Si quieres, puedo:
- Renombrar/normalizar los archivos de imagen en `public/assets/images` (quitar espacios) y actualizar rutas.
- Añadir variables de entorno o ajustes específicos de producción.
