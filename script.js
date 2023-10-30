const c1 = document.querySelector('.c1');
const c2 = document.querySelector('.c2');
const c3 = document.querySelector('.c3');

window.addEventListener('mousemove', function (e) {
    c1.style.left = e.clientX + 'px';
    c1.style.top = e.clientY + 'px';

    c2.style.left = e.clientX + 'px';
    c2.style.top = e.clientY-100 + 'px';

    c3.style.left = e.clientX-100 + 'px';
    c3.style.top = e.clientY + 'px';
});

