// Função para alternar a exibição do texto "Ler mais"
var btnReadMore = document.getElementById('btn-read-more');
btnReadMore.addEventListener('click', function() {
    var pReadMore = document.getElementById('p-read-more');
    
    if (pReadMore.classList.contains('d-none')) {
        pReadMore.classList.remove('d-none');
        pReadMore.classList.add('d-block');
    } else {
        pReadMore.classList.remove('d-block');
        pReadMore.classList.add('d-none');
    }
});

// Rolar suavemente para as seções ao clicar nos links do navbar
var linksNav = document.querySelectorAll('.navbar-nav a');
linksNav.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        var textoLink = link.textContent.trim();
        var targetElement;

        switch (textoLink) {
            case 'Contato':
                targetElement = document.getElementById('footerContato');
                break;
            case 'Sobre':
                targetElement = document.getElementById('aboutMore');
                break;
            case 'Início':
                targetElement = document.getElementById('headerHome');
                break;
            case 'Apoiadores':
                targetElement = document.getElementById('Apoiadores');
                break;
            default:
                return; // Não faz nada se o link não corresponder
        }

        if (targetElement) {
            var targetPosition = targetElement.offsetTop;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
