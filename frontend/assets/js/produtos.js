document.addEventListener("section:loaded", (e) => {
  const section = e.target.querySelector("#produtos");
  if (!section) return;
  // animação suave: cards surgem em cascata
  const cards = section.querySelectorAll(".produto-card");
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cards.forEach((c, i) => {
            setTimeout(() => {
              c.style.opacity = 1;
              c.style.transform = "translateY(0)";
            }, i * 100);
          });
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  cards.forEach((c) => {
    c.style.opacity = 0;
    c.style.transform = "translateY(18px)";
  });
  observer.observe(section);
});
