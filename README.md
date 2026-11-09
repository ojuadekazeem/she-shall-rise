# She Shall Rise Foundation website

Next.js (App Router, TypeScript) site with four pages: Home, Our Story, Programs, and Get Involved.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content

Nearly all text lives in `lib/content.ts` (vision, mission, values, programs, promise, declaration).
Colors are set at the top of `app/globals.css`. The logo files are in `public/`.

**Before launch:** replace the placeholder email `hello@sheshallrise.org` in `lib/content.ts`.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to https://vercel.com/new, import the repository, and click **Deploy**.
   Vercel detects Next.js automatically; no settings or environment variables are needed.

Or, from this folder with the Vercel CLI:

```bash
npx vercel
```
