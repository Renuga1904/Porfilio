# Muthu Renuga — Portfolio

Personal portfolio for **Muthu Renuga**, Frontend Developer (React.js).
Built with React 19, Vite, Tailwind CSS v4, Framer Motion, React Router and Lucide icons.

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # serve the production build
npm run lint
```

## Structure

```
src/
  data/portfolio.js        ← all content (text, links, skills, projects)
  components/
    layout/                Navbar, Footer
    ui/                    Button, Chip, Reveal, SectionHeading, LinkedInIcon
    mockups/               crafted UI previews used until real screenshots are added
    ProjectVisual.jsx      screenshot-or-mockup switch
  sections/                Hero, About, Skills, Experience (+Education), Projects, Contact
  hooks/                   useActiveSection, useScrolled
  pages/                   Home, NotFound
  index.css                design tokens (colors, fonts, shadows)
```

## Things to add

| What | Where |
| --- | --- |
| Profile photo (optional) | put `public/profile.jpg`, set `profile.photo: '/profile.jpg'` |
| Project screenshots (optional) | put e.g. `public/projects/exammate.webp`, set `image` on the project |
| Sericulture live link | add to that project's `links` array |
| Social share image | add `public/og-image.png` (1200×630) and an `og:image` meta tag in `index.html` |

## Resume (view-only)

The resume is rendered as a web page at `/resume` from `src/data/resume.js` — no PDF is hosted,
so there is no file to download, and browser printing / "Save as PDF" is blocked on that page.
Update the resume by editing `src/data/resume.js`.

## Contact form

Messages are delivered to `kmuthurenuga1904@gmail.com` via [Web3Forms](https://web3forms.com) (free).

1. Open https://web3forms.com, choose **Create Access Key**, enter `kmuthurenuga1904@gmail.com`.
2. Copy the key from the email you receive into `.env`: `VITE_WEB3FORMS_KEY=your-key`.
3. Restart `npm run dev`. When deploying, add the same variable in your host's environment settings
   (e.g. Vercel → Project → Settings → Environment Variables) and redeploy.

The key is meant to be public (it only allows sending to your inbox). Each message arrives with
the sender's name, email and message, and replying answers the sender directly.

## Deploying

Any static host works. `vercel.json` (Vercel) and `public/_redirects` (Netlify) route all paths to
`index.html`, so `/resume` works on refresh.
