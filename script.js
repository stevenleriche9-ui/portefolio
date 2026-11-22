(function(){
  var rm = matchMedia('(prefers-reduced-motion: reduce)').matches;

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  var header = document.getElementById('top');
  var burger = document.getElementById('burger');
  function setMenu(open){
    header.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    burger.textContent = open ? '✕' : '☰';
  }
  burger.addEventListener('click', function(){ setMenu(!header.classList.contains('open')); });
  document.querySelectorAll('nav a').forEach(function(a){
    a.addEventListener('click', function(){ setMenu(false); });
  });

  var form = document.getElementById('f');
  var ok = document.getElementById('ok');
  if (form && ok) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      ok.textContent = 'Envoi en cours…';
      var url = form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/');
      fetch(url, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      }).then(function(r){
        if (!r.ok) throw new Error('http');
        ok.textContent = 'Merci ! Ton message a bien été envoyé.';
        form.reset();
      }).catch(function(){
        ok.textContent = "Le message n'a pas pu être envoyé. Écris-moi directement à siestevenlericheherve@gmail.com";
      }).then(function(){ btn.disabled = false; });
    });
  }

  var el = document.getElementById('typed');
  if (el && !rm) {
    var roles = ['Étudiant en Informatique', 'Réseau informatique et Télécoms', 'Développement web et mobile'];
    var r = 0, i = 0, del = false;
    var tick = function(){
      var w = roles[r];
      el.textContent = w.slice(0, i);
      if (!del && i === w.length) { del = true; return setTimeout(tick, 1800); }
      if (del && i === 0) { del = false; r = (r + 1) % roles.length; }
      i += del ? -1 : 1;
      setTimeout(tick, del ? 40 : 90);
    };
    el.textContent = '';
    setTimeout(tick, 900);
  }

  document.querySelectorAll('section h3.t, .two>*, .card, .box').forEach(function(e, k){
    e.classList.add('rv');
    e.style.setProperty('--d', (k % 3) * .12 + 's');
  });
  var io = new IntersectionObserver(function(es){
    es.forEach(function(x){
      if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); }
    });
  }, { threshold: .15 });
  document.querySelectorAll('.rv').forEach(function(e){ io.observe(e); });

  var links = [].slice.call(document.querySelectorAll('nav a')).filter(function(a){
    var h = a.getAttribute('href');
    return h && h.length > 1 && h.charAt(0) === '#' && document.querySelector(h);
  });
  var secs = links.map(function(a){ return document.querySelector(a.getAttribute('href')); });
  function setActive(){
    var cur = 0;
    secs.forEach(function(s, i){ if (s.getBoundingClientRect().top < 120) cur = i; });
    links.forEach(function(a, i){ a.classList.toggle('act', i === cur); });
  }
  addEventListener('scroll', setActive, { passive: true });
  setActive();
})();