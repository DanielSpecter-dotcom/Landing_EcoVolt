document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize AOS Animation Library
    AOS.init({
        once: true,
        offset: 50,
        duration: 800,
        easing: 'ease-out-cubic',
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md', 'bg-white/95');
            navbar.classList.remove('bg-white/80', 'border-primary/5');
            navbar.classList.add('border-primary/10');
        } else {
            navbar.classList.remove('shadow-md', 'bg-white/95', 'border-primary/10');
            navbar.classList.add('bg-white/80', 'border-primary/5');
        }
    });

    // Mobile Menu Toggle
    const menuToggleBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    
    if (menuToggleBtn && mobileMenu) {
        menuToggleBtn.addEventListener('click', () => {
            const icon = menuToggleBtn.querySelector('i');
            
            if (mobileMenu.classList.contains('translate-x-full')) {
                // Abrir
                mobileMenu.classList.remove('translate-x-full');
                icon.classList.remove('ph-list');
                icon.classList.add('ph-x');
            } else {
                // Cerrar
                mobileMenu.classList.add('translate-x-full');
                icon.classList.remove('ph-x');
                icon.classList.add('ph-list');
            }
        });

        // Cerrar menú al hacer clic en un enlace
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
                const icon = menuToggleBtn.querySelector('i');
                icon.classList.remove('ph-x');
                icon.classList.add('ph-list');
            });
        });
    }

    // Toggles visual effect
    const toggles = document.querySelectorAll('.device-toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('change', (e) => {
            const card = e.target.closest('.device-card');
            const statusSpan = card.querySelector('.d-status');
            const iconContainer = card.querySelector('.rounded-xl');
            const toggleWrapper = card.querySelector('.bg-gray-200'); // the visual track of the custom toggle is peer-checked driven, but we can do extra logic if needed

            if(e.target.checked) {
                statusSpan.textContent = statusSpan.textContent.replace('Apagado', 'Encendido').replace('Inactivo', 'En uso');
                statusSpan.classList.add('text-accent');
                statusSpan.classList.remove('text-muted');
                iconContainer.classList.remove('opacity-50', 'grayscale');
            } else {
                statusSpan.textContent = statusSpan.textContent.replace('Encendido', 'Apagado').replace('En uso', 'Inactivo');
                statusSpan.classList.remove('text-accent');
                statusSpan.classList.add('text-muted');
                iconContainer.classList.add('opacity-50', 'grayscale');
            }
        });
    });

    // Registration Form Demo
    const regForm = document.getElementById('regForm');
    if (regForm) {
        regForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = regForm.querySelector('button');
            const originalText = btn.textContent;
            
            btn.innerHTML = '<i class="ph-bold ph-spinner animate-spin"></i> Creando cuenta...';
            btn.classList.add('opacity-80', 'cursor-not-allowed');
            
            setTimeout(() => {
                btn.innerHTML = '<i class="ph-bold ph-check-circle text-xl"></i> ¡Bienvenido a EcoVolt!';
                btn.classList.remove('bg-accent', 'hover:bg-accent-hover', 'opacity-80', 'cursor-not-allowed');
                btn.classList.add('bg-primary', 'hover:bg-primary-light');
                regForm.reset();
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.classList.remove('bg-primary', 'hover:bg-primary-light');
                    btn.classList.add('bg-accent', 'hover:bg-accent-hover');
                }, 3000);
                
            }, 1500);
        });
    }

    // Scroll-to-Top Button
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Active Nav Link Highlighting
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('#nav-links a');

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('text-accent');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('text-accent');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => navObserver.observe(section));

    // Parallax Effect for Background Glows
    const parallaxElements = document.querySelectorAll('.parallax-glow');
    if (parallaxElements.length > 0) {
        window.addEventListener('scroll', () => {
            let scrollY = window.scrollY;
            window.requestAnimationFrame(() => {
                parallaxElements.forEach(el => {
                    let speed = parseFloat(el.getAttribute('data-speed')) || 0.1;
                    el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
                });
            });
        });
    }
});
