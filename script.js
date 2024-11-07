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
// Remove a parte do código, pois não há botão com a classe '.btn'
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

// Navegação de Paginação (Simula a troca de conteúdo entre as páginas)
document.addEventListener("DOMContentLoaded", function () {
    const paginationLinks = document.querySelectorAll('.pagination .page');
    
    paginationLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const pageNumber = link.textContent; // Obtém o número da página clicada
            alert(`Página ${pageNumber} clicada! (Aqui você pode carregar o conteúdo da página)`);

            // Aqui você pode adicionar a lógica para carregar o conteúdo específico da página
            // Exemplo: mudar a URL, alterar o conteúdo da página, etc.
            // window.location.href = `pagina${pageNumber}.html`; // Para navegar para outra página
        });
    });
});
