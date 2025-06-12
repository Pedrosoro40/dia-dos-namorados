const fotos = [
      "./img/20220917_141051.jpg",
      "./img/20221021_232050.jpg",
      "./img/20230514_180953.jpg",
      "./img/20230827_185037.jpg",
      "./img/20231021_225011.jpg",
      "./img/20240106_144621.jpg",
      "./img/20240511_191337.jpg",
      "./img/20240511_191430.jpg",
      "./img/20241208_221818.jpg",
      "./img/DSCM748.jpg",
      "./img/DSCN7250.jpg",
      "./img/IMG-20231210-WA0023.jpg",
      "./img/IMG-20241118-WA0356.jpg",
      "./img/IMG-20250610-WA0074.jpg",
    ];

     let index = 0;

    function iniciarSlideshow() {
      const slideshow = document.getElementById('slideshow');
      const img = document.getElementById('fotoAtual');
      slideshow.style.display = 'block';
      
      setInterval(() => {
        index = (index + 1) % fotos.length;
        img.style.opacity = 0;
        setTimeout(() => {
          img.src = fotos[index];
          img.style.opacity = 1;
        }, 500);
      }, 3000);
    }
    window.onload = function() {
  const audio = document.getElementById('bgMusic');
  const btn = document.getElementById('invisiblePlay');
  
  // Simula um clique programático (funciona na maioria dos navegadores)
  setTimeout(() => {
    btn.click();
    audio.play().catch(e => {
      // Se falhar, tenta novamente com interação real
      document.body.addEventListener('click', () => audio.play(), { once: true });
    });
  }, 1000);
};

document.getElementById('invisiblePlay').addEventListener('click', function() {
  document.getElementById('bgMusic').play();
});
function atualizarContadorRomantico() {
  const inicioNamoro = new Date('2022-09-17T00:00:00');
  const agora = new Date();
  
  let diff = Math.floor((agora - inicioNamoro) / 1000); // diferença em segundos
  
  const anos = Math.floor(diff / (365 * 24 * 60 * 60));
  diff -= anos * 365 * 24 * 60 * 60;
  
  const meses = Math.floor(diff / (30 * 24 * 60 * 60));
  diff -= meses * 30 * 24 * 60 * 60;
  
  const dias = Math.floor(diff / (24 * 60 * 60));
  diff -= dias * 24 * 60 * 60;
  
  const horas = Math.floor(diff / (60 * 60));
  diff -= horas * 60 * 60;
  
  const minutos = Math.floor(diff / 60);
  const segundos = diff % 60;
  
  const texto = `❤️ ${anos}a ${meses}m ${dias}d ${horas}h ${minutos}min ${segundos}s ❤️`;
  document.getElementById('tempoJuntos').textContent = texto;
  
  // Atualiza a cada segundo
  setTimeout(atualizarContadorRomantico, 1000);
}

// Inicia o contador
document.addEventListener('DOMContentLoaded', atualizarContadorRomantico);
const texto = `Nossa jornada de amor: ${anos} ano${anos !== 1 ? 's' : ''}, ${meses} mês${meses !== 1 ? 'es' : ''}, ${dias} dia${dias !== 1 ? 's' : ''}, ${horas}h ${minutos}min ${segundos}s`;