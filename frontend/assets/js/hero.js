// hero.js - animação suave quando a seção entra na viewport
document.addEventListener('section:loaded', (e) => {
  const section = e.target.querySelector('#hero');
  if (!section) return;
  const img = section.querySelector('.hero-img');
  const title = section.querySelector('.hero-title');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(en=>{
      if (en.isIntersecting) {
        title.style.opacity = 1;
        title.style.transform = 'translateY(0)';
        img.style.opacity = 1;
        img.style.transform = 'translateY(0)';
        obs.unobserve(en.target);
      }
    });
  }, {threshold:0.25});
  [title, img].forEach(el=>{
    el.style.opacity=0;
    el.style.transform='translateY(18px)';
    observer.observe(el);
  });
});
