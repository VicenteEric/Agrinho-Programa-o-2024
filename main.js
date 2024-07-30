// Script para simular inscrição em uma vaga
document.addEventListener('DOMContentLoaded', function() {
    const inscreverBotoes = document.querySelectorAll('.inscrever-btn');

    inscreverBotoes.forEach(function(btn) {
        btn.addEventListener('click', function() {
            alert('Você se inscreveu para esta vaga!');
        });
    });
});