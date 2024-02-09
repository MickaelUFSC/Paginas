document.addEventListener('DOMContentLoaded', function () {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function (card) {
        var parcial = card.querySelector('.parcial');
        var name = card.querySelector('.name');
        var img = card.querySelector('.img');
        card.addEventListener('click', function () {
            img.style.filter = 'grayscale(0)';
            if (parcial.style.bottom === '0px') {
                parcial.style.bottom = '-200px'; // Change the value of the bottom property here
                parcial.style.transition = 'all 0.5s ease-in-out'; // Change the value of the transition property here
                return;
            }
            else{
                parcial.style.bottom = '0px'; // Change the value of the bottom property here
                parcial.style.transition = 'all 0.5s ease-in-out';
                return;
            }
        });

        card.addEventListener('mouseover', function () {
            img.style.filter = 'grayscale(100)'+'blur(1px)';
            img.style.transition = 'all 0.5s ease-in-out';
            name.style.opacity = '1';
            name.style.transition = 'all 0.5s ease-in-out';
        });
        card.addEventListener('mouseleave', function () {
            img.style.filter = 'grayscale(0)'+'blur(0px)';
            img.style.transition = 'all 0.5s ease-in-out';
            name.style.opacity = '0';
            name.style.transition = 'all 0.5s ease-in-out';
        });

    });
});