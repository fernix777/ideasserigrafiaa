# SEO Assets - Manual Steps

## Icons Needed

You have logo files in `/public/images/` that can be used to create the following icons:

### Required Icons:

1. **favicon.ico** (32x32px)
   - Location: `/public/favicon.ico`
   - Use: Browser tab icon
   - Tool: Use https://favicon.io/ or any image converter
   - Source: Use `/public/images/logo-ideas-sin-fondo.png`

2. **apple-touch-icon.png** (180x180px)
   - Location: `/public/apple-touch-icon.png`
   - Use: iOS home screen icon
   - Tool: Resize your logo to 180x180px
   - Source: Use `/public/images/logo-ideas-sin-fondo.png`

3. **android-chrome-192x192.png** (192x192px)
   - Location: `/public/android-chrome-192x192.png`
   - Use: Android home screen icon
   - Tool: Resize your logo to 192x192px
   - Source: Use `/public/images/logo-ideas-sin-fondo.png`

4. **android-chrome-512x512.png** (512x512px)
   - Location: `/public/android-chrome-512x512.png`
   - Use: Android splash screen
   - Tool: Resize your logo to 512x512px
   - Source: Use `/public/images/logo-ideas-sin-fondo.png`

## Quick Online Tools:

- **Favicon Generator**: https://favicon.io/favicon-converter/
  - Upload your logo and it will generate all sizes
  
- **Image Resizer**: https://www.iloveimg.com/resize-image
  - Resize to specific dimensions

- **PWA Asset Generator**: https://www.pwabuilder.com/imageGenerator
  - Upload one image and get all PWA icons

## Open Graph Image

✅ Already created: `/public/og-image.jpg`
- This is used for social media previews (Facebook, Twitter, LinkedIn)
- Dimensions: 1200x630px

## Alternative: Use Existing Logo

If you want to quickly use your existing logo for all icons:

```powershell
# From the project root, copy the logo to required locations
# (You'll need to resize them manually or use online tools)

Copy-Item "public\images\logo-ideas-sin-fondo.png" "public\apple-touch-icon.png"
Copy-Item "public\images\logo-ideas-sin-fondo.png" "public\android-chrome-192x192.png"
Copy-Item "public\images\logo-ideas-sin-fondo.png" "public\android-chrome-512x512.png"
```

Then use an online tool to convert and resize them to the correct dimensions.
