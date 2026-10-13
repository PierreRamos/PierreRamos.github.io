(function () {
  const root = document.documentElement;
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Theme: dark by default, light choice saved.
  const toggle = document.querySelector(".theme-toggle");
  const ditherFields = [];

  function applyTheme(theme) {
    root.dataset.theme = theme;
    if (toggle) {
      toggle.querySelector("span").textContent = theme === "light" ? "Dark" : "Light";
      toggle.setAttribute("aria-pressed", String(theme === "light"));
      toggle.setAttribute("aria-label", theme === "light" ? "Switch to dark mode" : "Switch to light mode");
    }
    ditherFields.forEach(drawDither);
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      const next = root.dataset.theme === "light" ? "dark" : "light";
      applyTheme(next);
      try { localStorage.setItem("theme", next); } catch (e) { /* storage blocked: theme lasts for this page only */ }
    });
  }

  // Navigation: current page and the mobile menu.
  const section = document.body.dataset.section || location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach((link) => {
    if (link.getAttribute("href") === section) link.setAttribute("aria-current", "page");
  });

  const bar = document.querySelector(".bar");
  const menu = document.querySelector(".menu-toggle");
  if (bar && menu) {
    menu.addEventListener("click", () => menu.setAttribute("aria-expanded", String(bar.classList.toggle("open"))));
  }

  // Manila clock in the ticker.
  const clocks = document.querySelectorAll(".clock");
  if (clocks.length) {
    const format = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Manila", hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const tick = () => clocks.forEach((clock) => { clock.textContent = format.format(new Date()); });
    tick();
    setInterval(tick, 1000);
  }

  // Screenshot slots without an image yet show an ordered-dither field that reacts to the cursor.
  const W = 128, H = 72;
  const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map((v) => (v + 0.5) / 16);

  function inkRGB() {
    const hex = getComputedStyle(root).getPropertyValue("--ink").trim().replace("#", "");
    return [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
  }

  function drawDither(field) {
    const [r, g, b] = inkRGB();
    const data = field.image.data;
    const k = field.seed, t = field.time;
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        let v = 0.5 + 0.25 * Math.sin(x * 0.07 + k + t * 3) * Math.cos(y * 0.09 - k + t * 2)
                    + 0.2 * Math.sin((x + y) * 0.035 + k * 2 + t * 5);
        v = v * 0.5 - (y / H) * 0.15 + 0.08 * (1 - x / W);
        const dx = x - field.mx, dy = y - field.my;
        v += 0.55 * Math.exp(-(dx * dx + dy * dy) / 90);
        const i = (y * W + x) * 4;
        data[i] = r; data[i + 1] = g; data[i + 2] = b;
        data[i + 3] = v > BAYER[(y & 3) * 4 + (x & 3)] ? 70 : 0;
      }
    }
    field.ctx.putImageData(field.image, 0, 0);
  }

  function animate(field) {
    if (!field.hovered) { field.running = false; return; }
    field.time += 0.004;
    drawDither(field);
    requestAnimationFrame(() => animate(field));
  }

  function addDither(shot, seed) {
    if (shot.querySelector("canvas")) return;
    const canvas = document.createElement("canvas");
    canvas.width = W; canvas.height = H;
    canvas.setAttribute("aria-hidden", "true");
    shot.prepend(canvas);
    const ctx = canvas.getContext("2d");
    const field = { ctx, image: ctx.createImageData(W, H), seed, time: 0, mx: -1e3, my: -1e3, hovered: false, running: false };
    const hoverTarget = shot.closest("a") || shot;

    hoverTarget.addEventListener("pointermove", (e) => {
      const rect = canvas.getBoundingClientRect();
      field.mx = ((e.clientX - rect.left) / rect.width) * W;
      field.my = ((e.clientY - rect.top) / rect.height) * H;
      field.hovered = true;
      if (reducedMotion) drawDither(field);
      else if (!field.running) { field.running = true; animate(field); }
    });
    hoverTarget.addEventListener("pointerleave", () => {
      field.hovered = false; field.mx = field.my = -1e3;
      drawDither(field);
    });

    ditherFields.push(field);
    drawDither(field);
  }

  document.querySelectorAll(".shot").forEach((shot, index) => {
    const img = shot.querySelector("img");
    const markMissing = () => { shot.classList.add("missing"); addDither(shot, index * 1.7 + 0.5); };
    if (!img) markMissing();
    else if (img.complete && img.naturalWidth === 0) markMissing();
    else img.addEventListener("error", markMissing);
  });

  applyTheme(root.dataset.theme === "light" ? "light" : "dark");
})();
