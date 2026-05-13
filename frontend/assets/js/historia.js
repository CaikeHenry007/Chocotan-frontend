document.addEventListener("section:loaded", (e) => {
  const section = e.target.querySelector("#historia");
  if (!section) return;
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          section.querySelectorAll(".card").forEach((c, i) => {
            c.style.opacity = 1;
            c.style.transform = "translateY(0)";
          });
          obs.unobserve(en.target);
        }
      });
    },
    { threshold: 0.2 },
  );
  section.querySelectorAll(".card").forEach((c) => {
    c.style.opacity = 0;
    c.style.transform = "translateY(18px)";
  });
  observer.observe(section);
});
