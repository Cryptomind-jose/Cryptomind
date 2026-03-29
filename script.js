// Mostrar solo la sección seleccionada
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = this.getAttribute('href').substring(1);
    document.querySelectorAll('.content, .hero').forEach(sec => sec.classList.add('hidden'));
    document.getElementById(target).classList.remove('hidden');
  });
});
