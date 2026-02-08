// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        const isDisplay = mobileNav.style.display === 'flex';
        mobileNav.style.display = isDisplay ? 'none' : 'flex';
        mobileNav.style.flexDirection = 'column';
        mobileNav.style.padding = '20px';
        mobileNav.style.background = '#fff';
        mobileNav.style.position = 'absolute';
        mobileNav.style.top = '100%';
        mobileNav.style.left = '0';
        mobileNav.style.right = '0';
        mobileNav.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
        mobileNav.style.textAlign = 'center';
    });
}

// Close mobile menu on link click
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.style.display = 'none';
    });
});

// Smooth Scroll (Native typically works, but this ensures cushion)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Only if it's not a generic #
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// TESTIMONIAL CAROUSEL
const slides = document.querySelectorAll('.testimonial-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.carousel-dots');
let currentSlide = 0;

if (slides.length > 0) {
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[n].classList.add('active');
        dots[n].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function goToSlide(n) {
        currentSlide = n;
        showSlide(currentSlide);
    }

    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // Auto play
    setInterval(nextSlide, 5000); // Change every 5 seconds
}
