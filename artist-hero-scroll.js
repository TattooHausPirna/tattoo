// js/artist-hero-scroll.js

document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.artist-hero');
    const heroName = document.querySelector('.artist-name-hero');
    const contentSections = document.querySelectorAll('.scroll-reveal-section');

    if (!hero || !heroName) {
        return; // Don't run if essential elements aren't on the page
    }

    const initialHeroHeight = hero.offsetHeight;
    const finalHeroHeight = 150; // The height of the final header banner
    const animationDistance = initialHeroHeight - finalHeroHeight;

    const initialFontSize = parseFloat(window.getComputedStyle(heroName).fontSize);
    const finalFontSize = 32; // The final font size of the title

    const finalOpacity = 0.3; // The final opacity for the title

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Calculate progress, but don't let it go beyond 1 (100%)
        const progress = Math.min(scrollY / animationDistance, 1);

        // Calculate current values
        const currentHeight = initialHeroHeight - (initialHeroHeight - finalHeroHeight) * progress;
        const currentFontSize = initialFontSize - (initialFontSize - finalFontSize) * progress;
        const currentOpacity = 1 - (1 - finalOpacity) * progress; // Fade from 1 down to 0.3

        requestAnimationFrame(() => {
            hero.style.height = `${currentHeight}px`;
            heroName.style.fontSize = `${currentFontSize}px`;
            heroName.style.opacity = currentOpacity;
        });

        // --- Animate Content Sections on Reveal ---
        contentSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            if (sectionTop < screenHeight * 0.85) {
                section.classList.add('is-visible');
            }
        });
    });

    // Initial check for sections already in view
    contentSections.forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight) {
            section.classList.add('is-visible');
        }
    });
}); 