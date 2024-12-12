document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.createElement('div');
    starsContainer.classList.add('stars');
    document.body.appendChild(starsContainer);

    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.classList.add('round'); 
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 1 + 1}s`;
        starsContainer.appendChild(star);
    }

    // Smooth transition on scroll
    const handleScroll = () => {
        const navBar = document.getElementById('header')
        const scrollTop = window.scrollY;
        const body = document.body;
        const aboutSection = document.querySelector('.about');
        const aboutBottom = aboutSection.getBoundingClientRect().top + scrollTop;

        const transitionPoint = aboutBottom;

        if (scrollTop >= transitionPoint) {
            navBar.classList.add('scrolled');
            navBar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            body.classList.add('scrolled');
        } else {
            navBar.classList.remove('scrolled');
            body.classList.remove('scrolled');
            navBar.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';

        }
    };

    window.addEventListener('scroll', handleScroll);
});
