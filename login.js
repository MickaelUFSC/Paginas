document.addEventListener('DOMContentLoaded', function () {
    var cards = document.querySelectorAll('.card');
    var eyes = document.querySelectorAll('.eye');
    // Itera sobre os elementos com a classe "card"
    cards.forEach(function(card) {
        // Verifica se a classe contém a palavra "off"
        if (card.classList.contains('off')) {
            card.style.display = 'none';
        }
        else if (card.classList.contains('on')) {
            card.style.display = 'block';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var cards = document.querySelectorAll('.card');
    var change = document.querySelectorAll('.change');

    function toggleCardAnimation() {
        cards.forEach(function(card) {

            card.classList.toggle('off');
            card.classList.toggle('on');
            
            if (card.classList.contains('off')) {
                card.style.animation = 'rotateCard 1.1s linear ';
                setTimeout(function() {
                    card.style.display = 'none';
                }, 1000);
            }
            else if (card.classList.contains('on')) {
                setTimeout(function() {
                    card.style.display = 'block';
                }, 1000);
                card.style.animation = 'rotateCardinverse 1.1s linear';

            }
        });
    }
    // Itera sobre os elementos com a classe "change"
    change.forEach(function(change) {
        // Adiciona um evento de clique
        change.addEventListener('click', function() {
            // Itera sobre os elementos com a classe "card"
            toggleCardAnimation();
        });
    });


});


document.addEventListener('DOMContentLoaded', function () {
    var eye = document.querySelectorAll('.eye');
    var password = document.getElementById('password');

    eye.forEach(function(eye) {
        eye.addEventListener('click', function() {
            eye.classList.toggle('-slash');
        });
    });

});