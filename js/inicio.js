// Variables globales
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu móvil
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menu al hacer click en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Scroll suave para los enlaces de navegación
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efecto parallax en scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.header');
    const floatingElements = document.querySelectorAll('.floating-element');
    
    // Cambiar opacidad del header en scroll
    if (scrolled > 100) {
        header.style.background = 'rgba(12, 12, 12, 0.98)';
    } else {
        header.style.background = 'rgba(12, 12, 12, 0.95)';
    }
    
    // Efecto parallax en elementos flotantes
    floatingElements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Animaciones al hacer scroll (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar secciones para animaciones
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Función para volver a la página de carga
function volverACarga() {
    window.location.href = '../index.html';
}

// Funciones para los botones del hero
document.addEventListener('DOMContentLoaded', () => {
    const btnPrimary = document.querySelector('.btn-primary');
    const btnSecondary = document.querySelector('.btn-secondary');
    
    // Botones de modo de juego
    const btnPartidaRapida = document.getElementById('btn-partida-rapida');
    const btnMuerteSubita = document.getElementById('btn-muerte-subita');
    
    if (btnPrimary) {
        btnPrimary.addEventListener('click', () => {
            // Aquí puedes agregar la funcionalidad para "Comenzar"
            console.log('Botón Comenzar clickeado');
            // Por ejemplo: window.location.href = 'pagina-siguiente.html';
        });
    }
    
    if (btnSecondary) {
        btnSecondary.addEventListener('click', () => {
            // Scroll suave hacia la sección "Acerca de"
            document.querySelector('#acerca').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Funcionalidad para el botón "Partida Rápida"
    if (btnPartidaRapida) {
        btnPartidaRapida.addEventListener('click', () => {
            console.log('Navegando a Partida Rápida...');
            window.location.href = './partida_rapida.html';
        });
    }
    
    // Funcionalidad para el botón "Muerte Súbita"
    if (btnMuerteSubita) {
        btnMuerteSubita.addEventListener('click', () => {
            console.log('Modo Muerte Súbita seleccionado');
            // Aquí puedes agregar la lógica para Muerte Súbita
            alert('Modo Muerte Súbita - Funcionalidad por implementar');
        });
    }
});

// Efecto de escritura en el título
function typeWriter(element, text, speed = 100) {
    element.innerHTML = '';
    let i = 0;
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    
    typing();
}

// Inicializar efecto de escritura cuando se carga la página
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});
