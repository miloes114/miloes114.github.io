(() => {
  const pages = {
    "index.html": { en: "Home", es: "Inicio" },
    "research.html": { en: "Research", es: "Investigación" },
    "projects.html": { en: "Projects", es: "Proyectos" },
    "publications.html": { en: "Publications", es: "Publicaciones" },
    "about.html": { en: "About", es: "Sobre mí" }
  };

  const path = window.location.pathname.replace(/\/+/g, "/");
  const isSpanish = /^\/es(?:\/|$)/.test(path);
  const segments = path.split("/").filter(Boolean);
  const lastSegment = segments.at(-1);
  const currentFile = !lastSegment || lastSegment === "es" ? "index.html" : lastSegment;
  const safeFile = Object.prototype.hasOwnProperty.call(pages, currentFile)
    ? currentFile
    : "index.html";

  const navLinks = Array.from(document.querySelectorAll(".navbar-nav .nav-link"));

  navLinks.forEach((link) => {
    const label = link.textContent.trim();
    const pageFile = Object.keys(pages).find(
      (file) => label === pages[file].en || label === pages[file].es
    );

    if (!pageFile) return;

    link.textContent = isSpanish ? pages[pageFile].es : pages[pageFile].en;
    link.href = isSpanish
      ? `/es/${pageFile === "index.html" ? "" : pageFile}`
      : `/${pageFile === "index.html" ? "" : pageFile}`;

    link.classList.remove("active");
    link.removeAttribute("aria-current");

    if (pageFile === safeFile) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  const languageLink = navLinks.find((link) => {
    const label = link.textContent.trim();
    return label === "ES" || label === "EN";
  });

  if (languageLink) {
    languageLink.classList.add("language-switch");
    languageLink.textContent = isSpanish ? "EN" : "ES";
    languageLink.href = isSpanish
      ? `/${safeFile === "index.html" ? "" : safeFile}`
      : `/es/${safeFile === "index.html" ? "" : safeFile}`;
    languageLink.setAttribute("hreflang", isSpanish ? "en" : "es");
    languageLink.setAttribute("lang", isSpanish ? "en" : "es");
    languageLink.setAttribute(
      "aria-label",
      isSpanish ? "English" : "Español"
    );
  }

  if (isSpanish) {
    const footerRight = document.querySelector(".nav-footer-right");
    if (footerRight) {
      footerRight.textContent = "Ecología molecular · Biología del estrés ambiental";
    }
  }
})();
