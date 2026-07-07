# Richard Efrem — Portfolio

A creative, bold portfolio site built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Where to edit your content

Everything personal lives in the [`data/`](./data) folder — you don't need to touch the components:

| File | What it controls |
|------|------------------|
| [`data/profile.ts`](./data/profile.ts) | Your name, tagline, about paragraphs, and links (email, GitHub, **LinkedIn**, **resume**) |
| [`data/projects.ts`](./data/projects.ts) | Project cards — add `demo` URLs, `image` paths, and toggle `featured` |
| [`data/skills.ts`](./data/skills.ts) | The skills grid |

### TODOs left for you (search for `TODO`)
1. **LinkedIn URL** — in `data/profile.ts` → `links.linkedin`.
2. **Resume** — drop a `resume.pdf` into a `public/` folder (create it), or update `links.resumeUrl`.
3. **Project screenshots** — add images to `public/projects/` and set `image:` on each project for richer cards.
4. **Live demo links** — add `demo:` URLs to any deployed projects.

## Deploy (free)

The easiest path is **Vercel** (made by the Next.js team):

1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com), "Add New Project", import the repo.
3. Click Deploy — done. You'll get a `yourname.vercel.app` URL (custom domains supported).

## Structure

```
app/            # Next.js App Router (layout, page, global styles)
components/      # Nav, Hero, About, Projects, Skills, Contact, Footer
data/           # ← edit these to update content
```
