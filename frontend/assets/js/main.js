// main.js - carregamento de seções, menu mobile e utilitários
document.addEventListener("DOMContentLoaded", () => {
  // inserir ano no footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // carregar HTML parcial das seções
  document.querySelectorAll("[data-include]").forEach(async (el) => {
    const url = el.getAttribute("data-include");
    try {
      const res = await fetch(url);
      if (res.ok) {
        el.innerHTML = await res.text();
        // dispatch evento para que scripts de seção possam inicializar
        el.dispatchEvent(new CustomEvent("section:loaded"));
      } else {
        el.innerHTML = `<p>Erro ao carregar seção: ${url}</p>`;
      }
    } catch (err) {
      el.innerHTML = `<p>Erro ao carregar seção: ${url}</p>`;
    }
  });

  // mobile hamburger
  const btn = document.getElementById("btn-hamburger");
  const nav = document.getElementById("nav");
  btn.addEventListener("click", () => {
    nav.classList.toggle("open");
    btn.classList.toggle("open");
  });

  // fechar menu ao clicar em link
  document.addEventListener("click", (e) => {
    if (e.target.matches(".nav a")) {
      nav.classList.remove("open");
      btn.classList.remove("open");
    }
  });

  // smooth scroll for internal links
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href");
    if (id === "#") return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
