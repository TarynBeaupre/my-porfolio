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
        const scrollTop = window.scrollY;
        const body = document.body;
        const aboutSection = document.querySelector('.about');
        const aboutBottom = aboutSection.getBoundingClientRect().bottom + scrollTop;

        const transitionPoint = aboutBottom;

        if (scrollTop >= transitionPoint) {
            body.classList.add('scrolled');
        } else {
            body.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
});
