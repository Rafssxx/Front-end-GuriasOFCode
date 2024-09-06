var btnReadMore = document.getElementById('btn-read-more') 
btnReadMore.addEventListener('click', function() {
    var pReadMore = document.getElementById('p-read-more');
 
   if(pReadMore.classList.contains('d-none'))
    {
        pReadMore.classList.remove('d-none')
        pReadMore.classList.add('d-block');
    } else
    {
        pReadMore.classList.remove('d-block')
        pReadMore.classList.add('d-none');
    }
});

var linksNav = document.querySelectorAll('.navbar-nav a');

linksNav.forEach(function(link) {
    link.addEventListener('click', function(event) {
    event.preventDefault();
        
       
        var textoLink = link.textContent;
        if (textoLink.trim() === 'Contato') {
            var footer = document.getElementById('footerContato');
            var footerPosition = footer.offsetTop;
            
            // Rola até a posição do elemento
            window.scrollTo({
                top: footerPosition,
                behavior: 'smooth'
            });
        }
        if(textoLink.trim() ==='Sobre')
            {
                var aboutMore = document.getElementById('aboutMore');
                var aboutMorePosition = aboutMore.offsetTop;
                window.scrollTo({
                    top: aboutMorePosition,
                    behavior: 'smooth'
                });
            }
        if(textoLink.trim() === 'Home')
            {
                var header = document.getElementById('headerHome');
                var headerPosition = header.offsetTop;
                window.scrollTo({
                    top: headerPosition,
                    behavior: 'smooth'
                });
            }
            
        if(textoLink.trim() === 'Apoiadores')
        {
            var Apoiadores = document.getElementById('Apoiadores')
            var ApoiadoresPosition = Apoiadores.offsetTop;
            window.scrollTo({
                top:ApoiadoresPosition,
                behavior:'smooth'
            })
        }
    });   
});
//fim roda scroll

//timer até o dia do evento

const dataEvento = new Date("September 25, 2024 00:00:00").getTime();

// Atualiza o contador a cada segundo
const intervalo = setInterval(function() {
  // Data e hora atuais
  const agora = new Date().getTime();

  // Distância entre agora e a data do evento
  const distancia = dataEvento - agora;

  // Cálculo do tempo em dias, horas, minutos e segundos
  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  // Exibe a contagem regressiva no elemento HTML
  document.getElementById("countdown").innerHTML = 
    dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";

  // Se a contagem terminar, exibe uma mensagem
  if (distancia < 0) {
    clearInterval(intervalo);
    document.getElementById("countdown").innerHTML = "O evento começou!";
  }
}, 1000);





