const slider = document.querySelector('.reviews-slider');

slider.addEventListener('wheel', (e) => {
    e.preventDefault();
    slider.scrollLeft += e.deltaY * 0.7;
});
const faders = document.querySelectorAll('.card, .tile');

const appearOptions = {
  threshold: 0.3
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
document.querySelector('.copyright-row p').innerHTML = `&copy; ${new Date().getFullYear()} Плитка Ізмаїл. Всі права захищені.`;