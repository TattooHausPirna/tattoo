document.addEventListener('DOMContentLoaded', () => {

    // --- Entry Animation ---
    window.onload = () => {
        document.body.classList.add('loaded');
    };

    // --- Scroll-triggered Animations ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const packageCards = document.querySelectorAll('.package-card');
    const observerCallback = (entries, observer) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting && !entry.target.classList.contains('is-visible')) {
                const cardIndex = Array.from(packageCards).indexOf(entry.target);
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, cardIndex * 120);
                observer.unobserve(entry.target);
            }
        });
    };
    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);
    packageCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        scrollObserver.observe(card);
    });

    // --- Parallax Hero Image ---
    const eventHero = document.querySelector('.event-hero');
    if (eventHero) {
        const heroImage = eventHero.querySelector('.hero-image-container');
        
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            heroImage.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        });
    }

    // --- Smooth Scroll for CTA Button ---
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault();
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // --- Hover Effects Enhancement ---
    // Remove JS hover, use CSS only

});
