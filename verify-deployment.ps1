# Script de Verificación Pre-Despliegue para Vercel
# Ejecuta este script antes de desplegar

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Verificación Pre-Despliegue Vercel" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar Node.js
Write-Host "Verificando Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version 2>$null
    Write-Host "  OK - Node.js $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "  ERROR - Node.js no encontrado" -ForegroundColor Red
    Write-Host "  Instala Node.js 18.x desde https://nodejs.org" -ForegroundColor Gray
    exit 1
}

# Verificar npm
Write-Host "Verificando npm..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version 2>$null
    Write-Host "  OK - npm $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "  ERROR - npm no encontrado" -ForegroundColor Red
    exit 1
}

# Verificar archivos de configuración
Write-Host "Verificando archivos de configuración..." -ForegroundColor Yellow
$requiredFiles = @(
    "package.json",
    "next.config.mjs",
    "vercel.json",
    ".vercelignore",
    ".env.example"
)

$allFilesExist = $true
foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "  OK - $file" -ForegroundColor Green
    } else {
        Write-Host "  ERROR - $file no encontrado" -ForegroundColor Red
        $allFilesExist = $false
    }
}

if (-not $allFilesExist) {
    Write-Host ""
    Write-Host "ERROR: Faltan archivos de configuración" -ForegroundColor Red
    exit 1
}

# Verificar variables de entorno
Write-Host "Verificando variables de entorno..." -ForegroundColor Yellow
if (Test-Path ".env.local") {
    Write-Host "  OK - .env.local encontrado" -ForegroundColor Green
    Write-Host "  NOTA: Configura las mismas variables en Vercel" -ForegroundColor Yellow
} else {
    Write-Host "  ADVERTENCIA - .env.local no encontrado" -ForegroundColor Yellow
    Write-Host "  Crea uno basado en .env.example para desarrollo local" -ForegroundColor Gray
}

# Instalar dependencias
Write-Host "Instalando dependencias..." -ForegroundColor Yellow
npm install --silent
if ($LASTEXITCODE -eq 0) {
    Write-Host "  OK - Dependencias instaladas" -ForegroundColor Green
} else {
    Write-Host "  ERROR - Fallo al instalar dependencias" -ForegroundColor Red
    exit 1
}

# Verificar build
Write-Host "Compilando proyecto..." -ForegroundColor Yellow
npm run build 2>&1 | Out-Null
if ($LASTEXITCODE -eq 0) {
    Write-Host "  OK - Build exitoso" -ForegroundColor Green
} else {
    Write-Host "  ERROR - Build falló" -ForegroundColor Red
    Write-Host "  Ejecuta 'npm run build' para ver los errores" -ForegroundColor Gray
    exit 1
}

# Resumen
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  RESUMEN" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Tu proyecto está listo para Vercel!" -ForegroundColor Green
Write-Host ""
Write-Host "Próximos pasos:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Sube tu código a GitHub:" -ForegroundColor White
Write-Host "   git init" -ForegroundColor Gray
Write-Host "   git add ." -ForegroundColor Gray
Write-Host "   git commit -m 'Preparado para Vercel'" -ForegroundColor Gray
Write-Host "   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git" -ForegroundColor Gray
Write-Host "   git push -u origin main" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Despliega en Vercel:" -ForegroundColor White
Write-Host "   - Ve a https://vercel.com/new" -ForegroundColor Gray
Write-Host "   - Importa tu repositorio de GitHub" -ForegroundColor Gray
Write-Host "   - Configura las variables de entorno:" -ForegroundColor Gray
Write-Host "     * RESEND_API_KEY" -ForegroundColor DarkGray
Write-Host "     * NEXT_PUBLIC_RESEND_FROM" -ForegroundColor DarkGray
Write-Host "     * NEXT_PUBLIC_RESEND_TO" -ForegroundColor DarkGray
Write-Host "   - Haz clic en Deploy" -ForegroundColor Gray
Write-Host ""
Write-Host "Documentación completa: README_VERCEL.md" -ForegroundColor Cyan
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
