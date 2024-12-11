document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav ul');
    
    // Last update
    const lastUpdated = document.getElementById('last-updated');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    lastUpdated.textContent = new Date().toLocaleDateString(undefined, options);
  
    // Nav bar burger menu toggle
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      document.querySelector('header').classList.toggle('open');
    });
  
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
  
    // Scroll-based background adjustment
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const body = document.body;
        const aboutSection = document.querySelector('.about'); // Assume `.about` is the class for the "About Me" section
        const aboutBottom = aboutSection.getBoundingClientRect().bottom + scrollTop; // Position of the bottom of "About Me"
    
        const transitionPoint = aboutBottom; // Change background once "About Me" ends
    
        if (scrollTop >= transitionPoint) {
          body.classList.add('scrolled');
        } else {
          body.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll);

    const downloadButton = document.getElementById('download-pdf');
    downloadButton.addEventListener('click', () => {
        const pdfUrl = './files/BeaupreTaryn.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'CV_Taryn_Beaupre.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Remove the link after clicking to clean up
    });
  });
  