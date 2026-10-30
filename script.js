// Ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile
const menu = document.getElementById('menu');
const btn = document.getElementById('menuBtn');
btn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') { menu.classList.remove('open'); btn.setAttribute('aria-expanded', false); }
});

// Texto digitado no cargo
const roles = ['Desenvolvedor Web', 'Automação de Processos'];
const typed = document.getElementById('typed');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduce) {
  typed.textContent = roles.join(' | ');
} else {
  let r = 0, i = 0, del = false;
  (function tick() {
    const word = roles[r];
    typed.textContent = word.slice(0, i);
    if (!del && i === word.length) { del = true; return setTimeout(tick, 1800); }
    if (del && i === 0) { del = false; r = (r + 1) % roles.length; }
    i += del ? -1 : 1;
    setTimeout(tick, del ? 35 : 70);
  })();
}

// Revelar ao rolar
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: .12 });
  items.forEach(el => io.observe(el));
} else {
  items.forEach(el => el.classList.add('in'));
}

// Link ativo no menu
const links = document.querySelectorAll('#menu a');
const secs = [...links].map(a => document.querySelector(a.getAttribute('href')));
const spy = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
secs.forEach(s => s && spy.observe(s));
