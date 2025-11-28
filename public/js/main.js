// Script mínimo para el prototipo: logo en canvas, toggle de tema y manejo simple de formulario
(function(){
  // logo simple en canvas
  const canvas = document.getElementById('logoCanvas');
  if(canvas && canvas.getContext){
    const ctx = canvas.getContext('2d');
    // fondo transparente, texto y un ícono simple
    ctx.fillStyle = '#222';
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText('IDEAS',8,22);
    ctx.fillStyle = '#e09b12';
    ctx.fillRect(8,28,60,6);
    ctx.fillStyle = '#111';
    ctx.font = '10px sans-serif';
    ctx.fillText('SERIGRAFIA',8,50);
  }

  // tema: recordar en localStorage
  const themeToggle = document.getElementById('themeToggle');
  function setTheme(t){
    if(t==='dark') document.documentElement.setAttribute('data-theme','dark');
    else document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('site-theme',t);
  }
  const saved = localStorage.getItem('site-theme');
  if(saved) setTheme(saved);
  themeToggle && themeToggle.addEventListener('click', ()=>{
    const now = document.documentElement.hasAttribute('data-theme') ? 'light' : 'dark';
    setTheme(now==='dark' ? 'light' : 'dark');
  });

  // manejo simple del formulario (no envía nada real en prototipo)
  const form = document.getElementById('contactForm');
  form && form.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Formulario enviado (prototipo). Próximo paso: conectar backend o servicio de emails.');
    form.reset();
  });
})();