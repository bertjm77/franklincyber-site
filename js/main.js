// FranklinCyber v3.5 — main.js (nav + year + scroll + focus-safe)
(function(){
  // Update copyright year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
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

  // Smooth focus scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener('click', e=>{
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        target.setAttribute('tabindex','-1');
        target.focus({preventScroll:true});
      }
    });
  });
})();
