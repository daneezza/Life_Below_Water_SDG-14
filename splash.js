var splashScreen = document.querySelector('.splash');

setTimeout(function() {
    splashScreen.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = 'home.html';
    }, 500);
}, 3500);
