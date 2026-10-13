(function () {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");

  function applyTheme(theme) {
    root.dataset.theme = theme;
    if (toggle) {
      toggle.textContent = theme === "light" ? "Dark mode" : "Light mode";
      toggle.setAttribute("aria-pressed", String(theme === "light"));
    }
  }

  applyTheme(root.dataset.theme === "light" ? "light" : "dark");

  if (toggle) {
    toggle.addEventListener("click", () => {
      const next = root.dataset.theme === "light" ? "dark" : "light";
      applyTheme(next);
      try { localStorage.setItem("theme", next); } catch (e) { /* storage blocked: theme lasts for this page only */ }
    });
  }

  // Screenshot slots show their expected filename until the image is added to assets/img/.
  document.querySelectorAll(".shot img").forEach((img) => {
    const markMissing = () => img.closest(".shot").classList.add("missing");
    if (img.complete && img.naturalWidth === 0) markMissing();
    else img.addEventListener("error", markMissing);
  });

  const page = location.pathname.split("/").pop() || "index.html";
  const section = document.body.dataset.section || page;
  document.querySelectorAll(".nav a").forEach((link) => {
    if (link.getAttribute("href") === section) link.setAttribute("aria-current", "page");
  });
})();
