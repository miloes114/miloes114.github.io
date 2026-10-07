# Camilo Escobar-Sierra — Academic Research Website

Source for my academic research website: **https://miloes114.github.io**

I am a postdoctoral researcher and lecturer working across **molecular ecology, environmental stress biology, systems ecology and integrative eco-omics**. My research focuses on how environmental stress reorganises biological systems across molecular, organismal and ecological scales, with aquatic organisms, communities and holobionts as the main empirical foundation.

The website presents my research programme, selected projects and publications, academic trajectory, teaching and mentoring.

**Academic CV:** https://miloes114.github.io/miloes114-academic-cv/  
**GitHub:** https://github.com/miloes114  
**Google Scholar:** https://scholar.google.com/citations?user=MZuNEEoAAAAJ&hl=en  
**ORCID:** https://orcid.org/0000-0001-9105-4378

## Built with Quarto

The site is intentionally lightweight: five Quarto pages, one SCSS stylesheet, and no database or application framework.

- **Home** — research identity and programme overview
- **Research** — research questions, biological resilience and the emerging Hi-SGH framework
- **Projects** — selected research compendia, computational workflows and resources
- **Publications** — selected publications, software, data resources and research compendia
- **About** — scientific trajectory, academic roots, teaching, mentoring and career direction

The visual design uses a restrained academic layout with responsive grids, a small colour palette and simple HTML/CSS components.

## Use this repository for your own academic website

This repository can also serve as a starting point for a personal academic site.

A simple workflow is:

1. **Fork this repository** into your GitHub account.
2. Rename the repository to **`<your-username>.github.io`** if you want it to be your GitHub user site.
3. Replace the personal and research content in:
   - `index.qmd`
   - `research.qmd`
   - `projects.qmd`
   - `publications.qmd`
   - `about.qmd`
4. Update `_quarto.yml` with your name, site URL, description and profile links.
5. Adjust colours, typography and responsive components in `styles.scss`.
6. Preview locally with Quarto.
7. Publish the rendered site with GitHub Pages.

The current structure is deliberately small enough to understand and modify without a web framework.

## Local preview

Install [Quarto](https://quarto.org/), clone the repository and run:

```bash
quarto preview
```

To render the complete site:

```bash
quarto render
```

The rendered website is written to `_site/`, which is excluded from version control.

## Repository structure

```text
.
├── _quarto.yml
├── index.qmd
├── research.qmd
├── projects.qmd
├── publications.qmd
├── about.qmd
├── styles.scss
└── assets/
    └── images/
```

The site does not require R, Python or Jupyter to render.

## Reusing the design

The Quarto configuration, styling and reusable layout components are available under the MIT License. You are welcome to adapt them for your own academic website.

My research text, biography, publication descriptions and other personal academic content are not part of the reusable template and remain my original content. When adapting the repository, replace those sections with your own material.

If this repository helps you build your site, a link back is appreciated but not required.

## Research resources

Selected open research resources linked from the website include:

- [EchoGO](https://github.com/miloes114/EchoGo) — annotation-context-aware functional interpretation for non-model eco-omics
- [Holtemme Gammarus Ecotoxicogenomics](https://github.com/miloes114/holtemme-gammarus-ecotoxicogenomics) — reproducible field ecotoxicogenomics research compendium

## License

Code, Quarto configuration, stylesheets and reusable layout components are licensed under the [MIT License](LICENSE).

Original scientific writing, biographical text, publication descriptions and personal academic content remain © Camilo Escobar-Sierra unless otherwise stated.
