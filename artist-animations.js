document.addEventListener('DOMContentLoaded', () => {

    // --- Entry Animation ---
    // Add a 'loaded' class to the body once the page content is loaded.
    // CSS will handle the animations based on this class.
    window.onload = () => {
        document.body.classList.add('loaded');
    };

    // --- Scroll-triggered Animations ---
    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the item must be visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    };

    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all elements that need to be animated on scroll
    const animatedElements = document.querySelectorAll('.artist-bio, .gallery-item');
    animatedElements.forEach(el => scrollObserver.observe(el));


    // --- Parallax Hero Image ---
    const hero = document.querySelector('.artist-hero');
    if (hero) {
        const heroImage = hero.querySelector('.hero-image-container');
        
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            // The '0.5' value determines the speed of the parallax effect.
            // A lower number means a more subtle effect.
            heroImage.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        });
    }

});
