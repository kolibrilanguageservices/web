// Kolibri Language Services - Main JavaScript
// Funcionalidad principal para el sitio web bilingüe

document.addEventListener('DOMContentLoaded', function() {
    console.log('Kolibri Language Services - Inicializando...');
    
    // Inicializar componentes
    initializeLanguageSwitcher();
    initializeSmoothScrolling();
    initializeAnimations();
    initializeAnalytics();
    
    // Establecer idioma predeterminado (Alemán) sin parámetros de URL
    setDefaultLanguage('de');
    
    console.log('Kolibri Language Services - Página cargada correctamente');
});

// Inicializar selector de idioma
function initializeLanguageSwitcher() {
    const languageButtons = document.querySelectorAll('.language-btn');
    const languageContents = document.querySelectorAll('.language-content');
    
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            
            // Actualizar botones activos
            languageButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Mostrar contenido del idioma seleccionado
            languageContents.forEach(content => {
                content.classList.add('hidden');
                if (content.id === `content-${selectedLang}`) {
                    content.classList.remove('hidden');
                }
            });
            
            console.log(`Idioma cambiado a: ${selectedLang}`);
        });
    });
}

// Establecer idioma predeterminado
function setDefaultLanguage(lang = 'de') {
    const defaultButton = document.querySelector(`[data-lang="${lang}"]`);
    const defaultContent = document.querySelector(`#content-${lang}`);
    
    if (defaultButton && defaultContent) {
        // Activar botón predeterminado
        document.querySelectorAll('.language-btn').forEach(btn => btn.classList.remove('active'));
        defaultButton.classList.add('active');
        
        // Mostrar contenido predeterminado
        document.querySelectorAll('.language-content').forEach(content => content.classList.add('hidden'));
        defaultContent.classList.remove('hidden');
        
        console.log(`Idioma predeterminado establecido: ${lang}`);
    }
}

// Inicializar scroll suave
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Inicializar animaciones
function initializeAnimations() {
    // Animación de entrada para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
    const animatedElements = document.querySelectorAll('.service-card, .about-item, .contact-item, .profile-container');
    animatedElements.forEach(el => observer.observe(el));
}

// Detectar idioma del navegador
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const supportedLangs = ['de', 'es', 'en'];
    
    // Extraer código de idioma principal
    const langCode = browserLang.split('-')[0];
    
    if (supportedLangs.includes(langCode)) {
        return langCode;
    }
    
    return 'de'; // Predeterminado alemán
}

// Mostrar notificación
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos básicos para notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #333;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Manejar formulario de contacto (futuro)
function handleContactForm(formData) {
    console.log('Datos del formulario:', formData);
    
    // Aquí se implementaría el envío real del formulario
    showNotification('Mensaje enviado correctamente', 'success');
}

// Manejar reserva de clases (futuro)
function handleBooking(bookingData) {
    console.log('Datos de reserva:', bookingData);
    
    // Aquí se implementaría la lógica de reserva
    showNotification('Reserva realizada correctamente', 'success');
}

// Validar formulario
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Manejar errores
function handleError(error, context = '') {
    console.error(`Error en ${context}:`, error);
    showNotification('Ha ocurrido un error. Inténtalo de nuevo.', 'error');
}

// Función para obtener información del servicio
function getServiceInfo(serviceId, lang = 'de') {
    const services = {
        spanish: {
            de: { name: "Spanischkurse", icon: "🇪🇸" },
            es: { name: "Clases de Español", icon: "🇪🇸" },
            en: { name: "Spanish Classes", icon: "🇪🇸" }
        },
        english: {
            de: { name: "Englischkurse", icon: "🇺🇸" },
            es: { name: "Clases de Inglés", icon: "🇺🇸" },
            en: { name: "English Classes", icon: "🇺🇸" }
        },
        homework: {
            de: { name: "Hausaufgabenhilfe", icon: "✏️" },
            es: { name: "Ayuda de Tareas", icon: "✏️" },
            en: { name: "Homework Help", icon: "✏️" }
        }
    };
    
    return services[serviceId]?.[lang] || services[serviceId]?.de;
}

// Inicializar Analytics y tracking de eventos
function initializeAnalytics() {
    // Tracking de clicks en botones de WhatsApp
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            const service = this.closest('.service-card')?.querySelector('.service-title')?.textContent || 'general';
            gtag('event', 'click', {
                'event_category': 'contact',
                'event_label': 'whatsapp_' + service.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase(),
                'value': 1
            });
        });
    });
    
    // Tracking de cambios de idioma
    const languageButtons = document.querySelectorAll('.language-btn');
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            gtag('event', 'language_change', {
                'event_category': 'engagement',
                'event_label': 'language_' + lang,
                'value': 1
            });
        });
    });
    
    // Tracking de scroll en secciones
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionName = entry.target.className.split('-')[0];
                gtag('event', 'section_view', {
                    'event_category': 'engagement',
                    'event_label': 'section_' + sectionName,
                    'value': 1
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => sectionObserver.observe(section));
}

// Exportar funciones para uso global
window.KolibriLanguageServices = {
    changeLanguage: function(lang) {
        const button = document.querySelector(`[data-lang="${lang}"]`);
        if (button) button.click();
    },
    showNotification,
    handleContactForm,
    handleBooking,
    getServiceInfo,
    detectBrowserLanguage,
    initializeAnalytics
}; 