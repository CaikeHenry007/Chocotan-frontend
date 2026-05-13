document.addEventListener('section:loaded', (e) => {
  const form = e.target.querySelector('#contact-form');
  if (!form) return;
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    // placeholder: aqui você pode integrar com backend ou serviço de email
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Enviando...';
    setTimeout(()=> {
      btn.disabled = false;
      btn.textContent = 'Enviar';
      form.reset();
      alert('Mensagem enviada (demo).');
    }, 1000);
  });
});
