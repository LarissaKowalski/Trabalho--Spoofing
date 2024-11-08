// Efeito de fade-in para a tela inicial
document.addEventListener("DOMContentLoaded", function () {
    const inicioSection = document.getElementById("inicio");
    inicioSection.style.opacity = 0;  // Começa invisível
    let opacity = 0;

    // Função para animar o fade-in
    function fadeIn() {
        if (opacity < 1) {
            opacity += 0.02;  // Aumenta a opacidade
            inicioSection.style.opacity = opacity;
            requestAnimationFrame(fadeIn);
        }
    }

    fadeIn();  // Chama a animação
});

// Efeito de animação no botão (quando o usuário passa o mouse sobre o botão)
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector('.btn'); // Se tiver um botão específico no HTML
    if (btn) {
        // Altera o botão quando o mouse passar sobre ele
        btn.addEventListener('mouseover', function() {
            btn.style.transform = 'scale(1.1)';
            btn.style.transition = 'transform 0.3s ease';
        });

        // Restaura o botão ao passar o mouse para fora
        btn.addEventListener('mouseout', function() {
            btn.style.transform = 'scale(1)';
        });
    }
});

// Navegação de Paginação (Redirecionamento para as páginas)
document.addEventListener("DOMContentLoaded", function () {
    const paginationLinks = document.querySelectorAll('.pagination .page');
    
    paginationLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link (recarregar a página)

            const pageNumber = link.textContent; // Obtém o número da página clicada

            // Mapeando os números das páginas para os arquivos HTML correspondentes
            let pageURL = '';
            switch (pageNumber) {
                case '1':
                    pageURL = 'index.html';  // Página inicial
                    break;
                case '2':
                    pageURL = 'spoofing.html';  // O que é Spoofing?
                    break;
                case '3':
                    pageURL = 'resultados.html';  // Resultados
                    break;
                case '4':
                    pageURL = 'quemsomos.html';  // Quem Somos
                    break;
                default:
                    pageURL = 'index.html';  // Padrão para a primeira página
            }

            // Redireciona para a página correspondente
            window.location.href = pageURL;
        });
    });
});
