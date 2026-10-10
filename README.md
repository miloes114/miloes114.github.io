# Camilo Escobar-Sierra — Academic Research Website

Source for my bilingual academic research website: **https://camiloescobarsierra.com**

I am a postdoctoral researcher and lecturer working across **molecular ecology, environmental stress biology, systems ecology and integrative eco-omics**. My research focuses on how environmental stress reorganises biological systems across molecular, organismal and ecological scales, with aquatic organisms, communities and holobionts as the main empirical foundation.

The website presents my research programme, selected projects and publications, academic trajectory, teaching and mentoring in **English and Spanish**.

- **English:** https://camiloescobarsierra.com/
- **Español:** https://camiloescobarsierra.com/es/
- **Academic CV:** https://camiloescobarsierra.com/miloes114-academic-cv/
- **GitHub:** https://github.com/miloes114
- **Google Scholar:** https://scholar.google.com/citations?user=MZuNEEoAAAAJ&hl=en
- **ORCID:** https://orcid.org/0000-0001-9105-4378

## Built with Quarto

The site is intentionally lightweight: five mirrored English/Spanish content pages, one shared SCSS stylesheet, shared image assets, and a small language-switch script.

- **Home / Inicio** — research identity and programme overview
- **Research / Investigación** — research questions, biological resilience and the emerging Hi-SGH framework
- **Projects / Proyectos** — selected research compendia, computational workflows and resources
- **Publications / Publicaciones** — selected publications, software, data resources and research compendia
- **About / Sobre mí** — scientific trajectory, academic roots, teaching, mentoring and career direction

The `ES / EN` navbar control preserves the equivalent page when switching languages. English remains at the root URL and Spanish is published under `/es/`.

## Use this repository for your own academic website

This repository can also serve as a starting point for a personal academic site.

A simple workflow is:

1. **Fork this repository** into your GitHub account.
2. Rename the repository to **`<your-username>.github.io`** if you want it to be your GitHub user site.
3. Replace the English content in:
   - `index.qmd`
   - `research.qmd`
   - `projects.qmd`
   - `publications.qmd`
   - `about.qmd`
4. Replace or translate the mirrored Spanish pages under `es/`.
5. Update `_quarto.yml` with your name, site URL, description and profile links.
6. Adjust colours, typography and responsive components in `styles.scss`.
7. Preview locally with Quarto.
8. Publish the rendered site with GitHub Pages.

The structure is deliberately small enough to understand and modify without a web framework.

## Local preview

Install [Quarto](https://quarto.org/), clone the repository and run:

```bash
quarto preview
```

To render the complete bilingual site:

```bash
quarto render
```

The rendered website is written to `_site/`, including the Spanish pages under `_site/es/`.

## Repository structure

```text
.
├── _quarto.yml
├── index.qmd
├── research.qmd
├── projects.qmd
├── publications.qmd
├── about.qmd
├── es/
│   ├── index.qmd
│   ├── research.qmd
│   ├── projects.qmd
│   ├── publications.qmd
│   └── about.qmd
├── includes/
│   └── language-switch.html
├── assets/
│   ├── js/
│   │   └── language-switch.js
│   └── images/
│       ├── home/
│       ├── profile/
│       └── research/
└── styles.scss
```

The site does not require R, Python or Jupyter to render.

## Bilingual structure

Each Spanish page uses `lang: es` and has an English counterpart with reciprocal `hreflang` metadata. The language switcher updates the navbar labels and sends visitors to the corresponding page in the other language.

The scientific content is maintained as authored translations rather than automatic browser translation, so terminology and interpretation can be reviewed explicitly.

## Reusing the design

The Quarto configuration, styling, bilingual navigation and reusable layout components are available under the MIT License. You are welcome to adapt them for your own academic website.

My research text, biography, publication descriptions and other personal academic content are not part of the reusable template and remain my original content. When adapting the repository, replace those sections with your own material.

If this repository helps you build your site, a link back is appreciated but not required.

## Research resources

Selected open research resources linked from the website include:

- [EchoGO](https://github.com/miloes114/EchoGo) — annotation-context-aware functional interpretation for non-model eco-omics
- [Holtemme Gammarus Ecotoxicogenomics](https://github.com/miloes114/holtemme-gammarus-ecotoxicogenomics) — reproducible field ecotoxicogenomics research compendium

## License

Code, Quarto configuration, stylesheets and reusable layout components are licensed under the [MIT License](LICENSE).

Original scientific writing, biographical text, publication descriptions and personal academic content remain © Camilo Escobar-Sierra unless otherwise stated.
