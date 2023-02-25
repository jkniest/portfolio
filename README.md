# jkniest.de

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm run dev
```

## Production

Before building you should add the env variable `NUXT_PUBLIC_HOST` for sitemap and image generation. This should be the domain where the site will be hosted. The value can be set in an .env file or via a regular environment variable.

Build the application for production:

```bash
pnpm run generate
```

Locally preview production build:

```bash
pnpm run preview
```
