# FranklinCyber Website — v3.4 (Mobile-optimized + Self-hosted fonts)

This build merges the v3.2 responsive fixes with v3.3 local fonts. No external font calls.

## Structure
```
/assets/eye.svg
/assets/shield-chip.svg
/assets/fonts/Inter-Regular.woff2
/assets/fonts/Inter-Bold.woff2
/assets/fonts/Orbitron-Regular.woff2
/assets/fonts/Orbitron-Bold.woff2
/css/styles.css
/js/main.js
index.html
```

## Fonts
- The CSS is wired for **Inter** (400, 700) and **Orbitron** (400, 700) via `@font-face`.
- Included WOFF2 files are **placeholders**. Replace them with legitimate binaries named exactly as above.
- After replacement, no code changes are needed.

## Deploy
Upload all files to Azure Static Web Apps, Azure Storage + CDN, GitHub Pages, Netlify, etc.
