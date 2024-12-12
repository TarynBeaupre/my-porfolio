document.addEventListener('DOMContentLoaded', () => {
    
    // Lastest update time
    const lastUpdated = document.getElementById('last-updated');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    lastUpdated.textContent = new Date().toLocaleDateString(undefined, options);
  
    // Hero typing animation
    const texts = [
      { id: 'hero-heading', text: "Hi, I'm Taryn Beaupré." },
      { id: 'hero-paragraph', text: 'A full-stack developer using technology for good.' },
      { id: 'hero-small', text: 'Interests: Cybersecurity & Machine Learning.' }
    ];
  
    const typeText = (elementId, text, delay = 50) => {
      const element = document.getElementById(elementId);
      element.style.opacity = 1;
      let index = 0;
  
      const typeInterval = setInterval(() => {
        if (index < text.length) {
          element.textContent += text[index];
          index++;
        } else {
          clearInterval(typeInterval);
        }
      }, delay);
    };
  
    let totalDelay = 0;
    texts.forEach(({ id, text }) => {
      setTimeout(() => typeText(id, text), totalDelay);
      totalDelay += text.length * 50 + 500;
    });
  
    const downloadButton = document.getElementById('download-pdf');
    downloadButton.addEventListener('click', () => {
        const pdfUrl = './files/BeaupreTaryn.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'CV_Taryn_Beaupre.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    const scrollArrow = document.querySelector('.scroll-arrow');

    scrollArrow.addEventListener('click', () => {
      const aboutSection = document.querySelector('.about');
      const aboutTop = aboutSection.getBoundingClientRect().top - 70;
    
      if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        window.scrollTo({
          top: aboutTop,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo({
          top: aboutSection.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });

    document.addEventListener('scroll', () => {
      
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
            scrollArrow.classList.add('active');
        } else {
            scrollArrow.classList.remove('active');
        }
    });
});
  