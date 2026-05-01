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
                icon.classList.replace('ph-list', 'ph-x');
                menuToggleBtn.setAttribute('aria-expanded', 'true');
                document.body.style.overflow = 'hidden'; // Bloquea el scroll del fondo
            } else {
                // Cerrar
                mobileMenu.classList.add('translate-x-full');
                icon.classList.replace('ph-x', 'ph-list');
                menuToggleBtn.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = ''; // Restaura el scroll
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
            // Obtenemos la tarjeta padre más cercana
            const card = e.target.closest('li'); 
            const statusSpan = card.querySelector('.d-status');
            // Seleccionamos el contenedor del icono de forma más segura
            const iconContainer = card.querySelector('div.w-12.h-12'); 

            if(e.target.checked) {
                statusSpan.textContent = 'En uso (1.2 kW)'; // Es mejor setear el texto exacto
                statusSpan.classList.replace('text-muted', 'text-accent');
                iconContainer.classList.remove('opacity-50', 'grayscale');
            } else {
                statusSpan.textContent = 'Inactivo (0 W)';
                statusSpan.classList.replace('text-accent', 'text-muted');
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
});
