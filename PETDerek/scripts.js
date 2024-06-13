// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Cambio Dinámico de Contenido
function toggleContent(id) {
    var content = document.getElementById(id);
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

// Animaciones al Entrar en el Campo de Visión
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript cargado y funcionando");
    // Código existente para desplazamiento suave aquí
});

document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los enlaces que navegan a una sección
    const links = document.querySelectorAll('nav a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Scroll suave hacia la sección
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Remueve la clase 'active-section' de todas las secciones
            document.querySelectorAll('section').forEach(section => {
                section.classList.remove('active-section');
            });

            // Añade la clase 'active-section' a la sección objetivo
            targetSection.classList.add('active-section');

            // Establece un temporizador para remover la clase 'active-section' después de 5 segundos
            setTimeout(() => {
                targetSection.classList.remove('active-section');
            }, 5000); // 5000 milisegundos = 5 segundos
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');

    // Función para desplazarse hacia arriba
    window.scrollToTop = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Mostrar u ocultar el botón de volver al principio
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) { // Si se desplaza más de 500px
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
});
