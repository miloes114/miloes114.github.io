/* Playback controls for the original research GIFs. */
(() => {
  const setup = () => {
    document.querySelectorAll(".research-concept-figure").forEach((figure) => {
      const toggle = figure.querySelector(".research-motion-toggle");
      const animated = figure.querySelector(".research-animation");
      if (!toggle || !animated) return;
      toggle.hidden = false;

      const update = () => {
        const paused = figure.classList.contains("is-paused");
        toggle.textContent = paused
          ? (toggle.dataset.playLabel || "Play animation")
          : (toggle.dataset.pauseLabel || "Pause animation");
        toggle.setAttribute("aria-label", toggle.textContent);
        toggle.setAttribute("aria-pressed", paused ? "true" : "false");
      };

      toggle.addEventListener("click", () => {
        const paused = figure.classList.toggle("is-paused");
        if (!paused) {
          // Refresh the GIF element when reactivated to resume its frames.
          animated.src = animated.getAttribute("src");
        }
        update();
      });
      update();
    });
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup, { once: true });
  } else {
    setup();
  }
})();
