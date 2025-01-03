const fecharAvatar = document.getElementById('btnClose')
const avatarWrapper = document.getElementById('avatarWrapper')
fecharAvatar.addEventListener('click', function(){

})


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

// Função de rolagem suave
linksNav.forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Impedir preventDefault APENAS para "btn-inscrever" e "tutorial"
        if (link.id === 'btn-inscrever' || link.id === 'tutorial') {
            return; // Deixa o comportamento padrão
        }

        event.preventDefault(); // Prevenir o comportamento padrão para outros links

        var textoLink = link.textContent.trim();
        var targetElement;

        // Mapeamento dos links para os elementos-alvo
        switch (textoLink) {
            case 'Contato':
                targetElement = document.getElementById('footerContato');
                break;
            case 'Sobre':
                targetElement = document.getElementById('aboutMore');
                break;
            case 'Início':
                targetElement = document.getElementById('headerInicio');
                break;
            default:
                return; // Não faz nada se o link não corresponder a um alvo
        }

        // Verificar se o alvo existe e rolar até ele
        if (targetElement) {
            var targetPosition = targetElement.offsetTop;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
