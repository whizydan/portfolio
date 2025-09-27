# Whizydan's Portfolio — Next.js 15

This is a personal portfolio built with **Next.js 15**

## Features
- Project gallery (cards + project detail pages)
- About / Resume / Contact pages
- Responsive, mobile-first design
- SEO-ready (meta tags, Open Graph)
- Image optimization using Next.js image handling
- Accessibility basics (semantic HTML, keyboard focus)
- Analytics (Vercel Analytics)

## Tech stack
- Next.js 15
- React
- Tailwind CSS
- Shadcn
- TypeScript

## Quick start (local)
```bash
# clone
git clone https://github.com/whizydan/portfolio.git
cd portfolio

# install
npm install
# or
yarn

# development
npm run dev
# or
yarn dev

# build
npm run build
npm run start
# or
yarn build
yarn start
```

## Recommended package.json scripts
```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack",
    "start": "next start",
    "lint": "eslint"
  }
}
```

## SEO & social
- Add dynamic Open Graph tags per page.
- Provide a default og-image and dynamic images per project.
- Add `robots.txt` and `sitemap.xml` (auto-generate on build or via server).

## Deployment
**Vercel (recommended)**:
1. Push repo to GitHub/GitLab/Bitbucket.
2. Import project on Vercel.
3. Deploy — Vercel runs `npm run build`.

Other hosts: any Node host that supports Next.js like cpanel etc.

## Performance & accessibility tips
- Use `next/image` for optimized images.
- Use dynamic imports for large components.
- Run Lighthouse and address issues.
- Ensure proper contrast and keyboard accessibility.

## Troubleshooting
- `next dev` fails → check Node version (Node 22 recommended).
- Images not optimizing → configure `next.config.js` domains.
- Build fails on CI → ensure lint rules are followed.

## Contributing
1. Fork the repo
2. Create branch `feature/your-feature`
3. Run `npm run lint` and `npm run build`
4. Open a PR

## License
MIT © whizydan
