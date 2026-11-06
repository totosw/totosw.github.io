(() => {
  const header = document.querySelector(".site-header");
  if (header) {
    const setHeaderState = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    setHeaderState();
    window.addEventListener("scroll", setHeaderState, { passive: true });
  }

  const stage = document.querySelector(".hero-stage");
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (stage && finePointer && !reducedMotion) {
    stage.addEventListener("pointermove", (event) => {
      const rect = stage.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      stage.style.setProperty("--mx", x.toFixed(3));
      stage.style.setProperty("--my", y.toFixed(3));
    });

    stage.addEventListener("pointerleave", () => {
      stage.style.setProperty("--mx", "0");
      stage.style.setProperty("--my", "0");
    });
  }
})();
