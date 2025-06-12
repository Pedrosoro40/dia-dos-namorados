const fotos = [
      "../img/20220917_141051.jpg",
      "../img/20221021_232050.jpg",
      "../img/20230514_180953.jpg",
      "../img/20230827_185037.jpg",
      "../img/20231021_225011.jpg",
      "../img/20240106_144621.jpg",
      "../img/20240511_191337.jpg",
      "../img/20240511_191430.jpg",
      "../img/20241208_221818.jpg",
      "../img/DSCM748.jpg",
      "../img/DSCN7250.jpg",
      "../img/IMG-20231210-WA0023.jpg",
      "../img/IMG-20241118-WA0356.jpg",
      "../img/IMG-20250610-WA0074.jpg",
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