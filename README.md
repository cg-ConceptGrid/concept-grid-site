# CONCEPT GRID — Motion Website

A standalone responsive website for CONCEPT GRID. It is separate from the original `concept-grid-website` repository.

## Direction
**Architectural Editorial / Cinematic** — graphite and warm-paper palette, bold Manrope typography, yellow accent, architectural grid lines, large project photography and motion that supports the content.

## Stack
- HTML, CSS and vanilla JavaScript
- No build step, framework, package manager or paid animation library
- Responsive desktop, tablet and mobile layout
- English / Arabic toggle with RTL support
- Scroll reveal, hero title reveal, marquee, scroll progress, image hover zoom and custom pointer on desktop
- `prefers-reduced-motion` support

## Edit projects and replace images
All project and company content is stored in `content.js`.

### Replace a project photo
1. Upload the new photo into `assets/projects/`.
2. Find the relevant object in the `projects` array in `content.js`.
3. Replace its `image` value with a relative path, e.g. `image: "assets/projects/new-facade.jpg"`.

You can also replace `hero.image`, `hero.insetImage` or `aboutImage`.

### Remove a project
Delete its object from the `projects` array or set `visible: false`.

### Add a project
Copy an existing object, assign a unique `id`, set both language labels, image path and a layout (`wide`, `medium` or `third`).

> The first version uses the current site's public project photos as temporary imagery, so the new layout is populated while the replacement photos are selected. Move final images into this repository's `assets/` folder to make the new site fully self-contained.

## Contact data
Phone number, email and Behance link are in `content.js`.

## Publish through GitHub Pages
1. Create a **new public repository** under `cg-ConceptGrid` named `concept-grid-motion-site`.
2. Upload the contents of this folder to the repository root.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**, choose `main` and `/(root)`, then save.
5. Expected URL: `https://cg-conceptgrid.github.io/concept-grid-motion-site/`.

The original website repository remains untouched.