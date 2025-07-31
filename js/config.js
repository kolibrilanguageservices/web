// Kolibri Sprachschule - Configuration
// Archivo de configuración para servicios bilingües (Español/Inglés)

const CONFIG = {
    // Información de la empresa
    company: {
        name: "Kolibri Sprachschule",
        owner: "Stephanny Julieth Pulido Nuñez",
        email: "stephanny.pulido.n@gmail.com",
        phone: "+49 1522 6997 488",
        location: "Alemania",
        description: "Servicios bilingües de enseñanza de español e inglés",
        hours: {
            es: "Lun-Vie: 9AM-8PM",
            en: "Mon-Fri: 9AM-8PM",
            de: "Mo-Fr: 9-20 Uhr"
        }
    },
    
    // Idiomas soportados (Alemán como predeterminado)
    languages: {
        de: {
            name: "Deutsch",
            flag: "🇩🇪",
            default: true
        },
        es: {
            name: "Español",
            flag: "🇪🇸",
            default: false
        },
        en: {
            name: "English",
            flag: "🇺🇸",
            default: false
        }
    },
    
    // Servicios disponibles (bilingües) - Sin revisión de textos
    services: {
        spanish: {
            id: "spanish",
            icon: "🇪🇸",
            name: {
                es: "Clases de Español",
                en: "Spanish Classes",
                de: "Spanischkurse"
            },
            available: true,
            description: {
                es: "Aprende español de manera personalizada",
                en: "Learn Spanish in a personalized way",
                de: "Lernen Sie Spanisch auf personalisierte Weise"
            }
        },
        english: {
            id: "english",
            icon: "🇺🇸",
            name: {
                es: "Clases de Inglés",
                en: "English Classes",
                de: "Englischkurse"
            },
            available: true,
            description: {
                es: "Aprende inglés como segunda lengua",
                en: "Learn English as a second language",
                de: "Lernen Sie Englisch als Zweitsprache"
            }
        },
        homework: {
            id: "homework",
            icon: "✏️",
            name: {
                es: "Ayuda de Tareas",
                en: "Homework Help",
                de: "Hausaufgabenhilfe"
            },
            available: true,
            description: {
                es: "Apoyo especializado en español e inglés",
                en: "Specialized support in Spanish and English",
                de: "Spezialisierte Unterstützung in Spanisch und Englisch"
            }
        }
    },
    
    // Configuración de animaciones
    animations: {
        enabled: true,
        duration: 600,
        easing: "ease"
    },
    
    // Configuración de formularios
    forms: {
        contact: {
            enabled: true,
            fields: ["name", "email", "subject", "message", "language_preference"]
        },
        booking: {
            enabled: false, // Para implementación futura
            fields: ["name", "email", "service", "language", "date", "time"]
        }
    },
    
    // Configuración de notificaciones
    notifications: {
        duration: 3000,
        position: "top-right"
    },
    
    // Configuración de analytics (futuro)
    analytics: {
        enabled: false,
        trackingId: ""
    },
    
    // Configuración de redes sociales
    social: {
        whatsapp: "+49 1522 6997 488",
        email: "stephanny.pulido.n@gmail.com"
    },
    
    // Configuración de SEO
    seo: {
        title: {
            es: "Kolibri Sprachschule - Clases de Español e Inglés en Alemania",
            en: "Kolibri Sprachschule - Spanish and English Classes in Germany",
            de: "Kolibri Sprachschule - Spanisch- und Englischkurse in Deutschland"
        },
        description: {
            es: "Clases personalizadas de español e inglés con Stephanny Pulido. Servicios bilingües de enseñanza, ayuda de tareas y revisión de textos en Alemania.",
            en: "Personalized Spanish and English classes with Stephanny Pulido. Bilingual teaching services, homework help and text review in Germany.",
            de: "Personalisierte Spanisch- und Englischkurse mit Stephanny Pulido. Bilinguale Unterrichtsdienstleistungen, Hausaufgabenhilfe und Textüberprüfung in Deutschland."
        },
        keywords: {
            es: "clases español, clases inglés, alemania, profesora bilingüe, ayuda tareas, revisión textos",
            en: "spanish classes, english classes, germany, bilingual teacher, homework help, text review",
            de: "spanischkurse, englischkurse, deutschland, bilinguale lehrerin, hausaufgabenhilfe, textüberprüfung"
        }
    },
    
    // Configuración de idiomas de enseñanza
    teaching_languages: {
        spanish: {
            name: "Español",
            flag: "🇪🇸",
            levels: ["Principiante", "Intermedio", "Avanzado"],
            certificates: ["DELE", "SIELE"],
            description: "Clases de español para todos los niveles"
        },
        english: {
            name: "English",
            flag: "🇺🇸",
            levels: ["Beginner", "Intermediate", "Advanced"],
            certificates: ["TOEFL", "IELTS", "Cambridge"],
            description: "English as a Second Language (ESL) classes"
        }
    },
    
    // Configuración de precios (futuro)
    pricing: {
        spanish_class: {
            individual: "25€/hora",
            group: "15€/hora",
            package: "100€/5 horas"
        },
        english_class: {
            individual: "25€/hora",
            group: "15€/hora",
            package: "100€/5 horas"
        },
        homework_help: "20€/sesión"
    }
};

// Función para obtener configuración por idioma
function getConfig(lang = 'de') {
    return {
        ...CONFIG,
        currentLanguage: lang,
        translations: translations[lang] || translations.de
    };
}

// Función para validar configuración
function validateConfig() {
    const requiredFields = ['company', 'languages', 'services', 'teaching_languages'];
    const missingFields = requiredFields.filter(field => !CONFIG[field]);
    
    if (missingFields.length > 0) {
        console.error('Configuración incompleta. Campos faltantes:', missingFields);
        return false;
    }
    
    return true;
}

// Función para actualizar configuración dinámicamente
function updateConfig(newConfig) {
    Object.assign(CONFIG, newConfig);
    console.log('Configuración actualizada:', CONFIG);
}

// Función para obtener servicios por idioma
function getServicesByLanguage(lang = 'de') {
    const services = {};
    Object.keys(CONFIG.services).forEach(serviceKey => {
        const service = CONFIG.services[serviceKey];
        services[serviceKey] = {
            ...service,
            name: service.name[lang] || service.name.de,
            description: service.description[lang] || service.description.de
        };
    });
    return services;
}

// Exportar configuración
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, getConfig, validateConfig, updateConfig, getServicesByLanguage };
} 