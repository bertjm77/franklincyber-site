// FranklinCyber v3.4 — main.js (nav + year; mobile-safe)
(function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.nav-toggle');
  const list = document.getElementById('nav-list');
  if (toggle && list){
    toggle.addEventListener('click', ()=>{
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      list.classList.toggle('open');
    });
    document.addEventListener('click', (e)=>{
      if (!list.contains(e.target) && !toggle.contains(e.target)){
        list.classList.remove('open'); toggle.setAttribute('aria-expanded','false');
      }
    });
    document.addEventListener('keydown', (e)=>{
      if (e.key === 'Escape'){ list.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }
    });
  }
})();