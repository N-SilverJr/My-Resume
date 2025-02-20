document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    let menuOpen = false;

    menuBtn?.addEventListener('click', () => {
        if(!menuOpen) {
            menuBtn.classList.add('open');
            navLinks.style.display = 'flex';
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            navLinks.style.display = 'none';
            menuOpen = false;
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    contactForm?.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // You would typically send this to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });

    // Animate sections on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Dynamic age calculation
    const calculateAge = () => {
        const birthYear = 2007; 
        const currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    };

    // Update copyright year
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        footerYear.textContent = `© ${new Date().getFullYear()} Nshuti Shalom Silver Jr. All rights reserved.`;
    }

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Skill bars animation
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.1)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });

    // Image lazy loading
    const images = document.querySelectorAll('img[data-src]');
    const imageOptions = {
        threshold: 0,
        rootMargin: '0px 0px 50px 0px'
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    }, imageOptions);

    images.forEach(img => imageObserver.observe(img));

    // Form validation
    const validateForm = () => {
        const nameInput = document.querySelector('input[type="text"]');
        const emailInput = document.querySelector('input[type="email"]');
        const messageInput = document.querySelector('textarea');
        
        // Simple email validation
        const isValidEmail = (email) => {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        };

        if (nameInput && emailInput && messageInput) {
            nameInput.addEventListener('input', function() {
                this.classList.toggle('invalid', this.value.length < 2);
            });

            emailInput.addEventListener('input', function() {
                this.classList.toggle('invalid', !isValidEmail(this.value));
            });

            messageInput.addEventListener('input', function() {
                this.classList.toggle('invalid', this.value.length < 10);
            });
        }
    };

    validateForm();

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    // Handle theme preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    const toggleTheme = (e) => {
        if (e.matches) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    };

    prefersDarkScheme.addListener(toggleTheme);
    toggleTheme(prefersDarkScheme);
});