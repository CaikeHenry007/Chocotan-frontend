document.addEventListener("section:loaded", (e) => {
  const section = e.target.querySelector("#galeria");
  if (!section) return;
  // lightbox simples
  section.addEventListener("click", (ev) => {
    const img = ev.target.closest("img");
    if (!img) return;
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.inset = 0;
    overlay.style.background = "rgba(0,0,0,0.8)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = 9999;
    const big = document.createElement("img");
    big.src = img.src;
    big.style.maxWidth = "90%";
    big.style.maxHeight = "90%";
    big.style.borderRadius = "12px";
    overlay.appendChild(big);
    overlay.addEventListener("click", () => overlay.remove());
    document.body.appendChild(overlay);
  });
});
