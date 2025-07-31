# 🌍 Estructura de Archivos de Idioma - Kolibri Lessons

## 📁 Estructura Actual

```
public/
├── index.html              # Página principal con estructura HTML
├── js/
│   ├── config.js          # Configuración general del sitio
│   ├── translations.js    # Todas las traducciones organizadas
│   └── main.js           # Funcionalidad principal y eventos
└── LANGUAGES.md          # Esta documentación
```

## 🗂️ Archivos de Idioma

### 1. `public/js/translations.js`
**Contiene todas las traducciones organizadas por idioma y sección:**

```javascript
const translations = {
    es: {
        // Header
        title: "Kolibri Lessons",
        subtitle: "Clases personalizadas de Español e Inglés en Alemania",
        
        // Profile Section
        profile_name: "Stephanny Julieth Pulido Nuñez",
        profile_title: "Profesora Bilingüe Freelancer",
        
        // Services (Bilingües)
        services: {
            spanish: {
                title: "Clases de Español",
                description: "...",
                features: [...],
                cta: "Solicitar Clase de Español"
            },
            english: {
                title: "Clases de Inglés",
                description: "...",
                features: [...],
                cta: "Solicitar Clase de Inglés"
            },
            homework: {
                title: "Ayuda de Tareas",
                description: "Recibe apoyo especializado para completar tus tareas de español e inglés con excelencia.",
                features: [...],
                cta: "Solicitar Ayuda"
            },
            review: {
                title: "Revisión de Textos",
                description: "Revisión profesional de textos académicos, ensayos y documentos en español e inglés.",
                features: [...],
                cta: "Solicitar Revisión"
            }
        },
        
        // About Section
        about_title: "¿Por qué elegir Kolibri Lessons?",
        about_items: [...],
        
        // Contact Section
        contact_title: "¿Interesado en mis servicios?",
        contact_info: {...}
    },
    
    en: { /* Contenido en inglés */ },
    de: { /* Contenido en alemán */ }
};
```

### 2. `public/js/config.js`
**Configuración general del sitio:**

```javascript
const CONFIG = {
    company: {
        name: "Kolibri Lessons",
        owner: "Stephanny Julieth Pulido Nuñez",
        email: "stephanny.pulido.n@gmail.com",
        phone: "+49 1522 6997 488",
        description: "Servicios bilingües de enseñanza de español e inglés"
    },
    
    languages: {
        es: { name: "Español", flag: "🇪🇸", default: true },
        en: { name: "English", flag: "🇺🇸", default: false },
        de: { name: "Deutsch", flag: "🇩🇪", default: false }
    },
    
    // Servicios bilingües
    services: {
        spanish: { 
            id: "spanish", 
            icon: "🇪🇸", 
            available: true,
            name: { es: "Clases de Español", en: "Spanish Classes", de: "Spanischkurse" }
        },
        english: { 
            id: "english", 
            icon: "🇺🇸", 
            available: true,
            name: { es: "Clases de Inglés", en: "English Classes", de: "Englischkurse" }
        },
        homework: { id: "homework", icon: "✏️", available: true },
        review: { id: "review", icon: "📝", available: true }
    },
    
    // Idiomas de enseñanza
    teaching_languages: {
        spanish: {
            name: "Español",
            flag: "🇪🇸",
            levels: ["Principiante", "Intermedio", "Avanzado"],
            certificates: ["DELE", "SIELE"]
        },
        english: {
            name: "English",
            flag: "🇺🇸",
            levels: ["Beginner", "Intermediate", "Advanced"],
            certificates: ["TOEFL", "IELTS", "Cambridge"]
        }
    }
};
```

### 3. `public/js/main.js`
**Funcionalidad principal y manejo de eventos:**

- Cambio de idioma dinámico
- Smooth scrolling
- Animaciones
- Validación de formularios
- Notificaciones
- Detección de idioma del navegador

## ➕ Cómo Agregar Nuevos Idiomas

### Paso 1: Agregar el idioma en `config.js`
```javascript
languages: {
    es: { name: "Español", flag: "🇪🇸", default: true },
    en: { name: "English", flag: "🇺🇸", default: false },
    de: { name: "Deutsch", flag: "🇩🇪", default: false },
    // NUEVO IDIOMA
    fr: { name: "Français", flag: "🇫🇷", default: false }
}
```

### Paso 2: Agregar traducciones en `translations.js`
```javascript
fr: {
    // Header
    title: "Kolibri Lessons",
    subtitle: "Cours d'espagnol et d'anglais personnalisés en Allemagne",
    
    // Profile Section
    profile_name: "Stephanny Julieth Pulido Nuñez",
    profile_title: "Professeure Bilingue Freelance",
    profile_description: "...",
    
    // Services (Bilingües)
    services: {
        spanish: {
            title: "Cours d'Espagnol",
            description: "...",
            features: [...],
            cta: "Demander un Cours d'Espagnol"
        },
        english: {
            title: "Cours d'Anglais",
            description: "...",
            features: [...],
            cta: "Demander un Cours d'Anglais"
        },
        homework: {
            title: "Aide aux Devoirs",
            description: "Recevez un soutien spécialisé pour compléter vos devoirs d'espagnol et d'anglais avec excellence.",
            features: [...],
            cta: "Demander de l'Aide"
        },
        review: {
            title: "Révision de Textes",
            description: "Révision professionnelle de textes académiques, essais et documents en espagnol et anglais.",
            features: [...],
            cta: "Demander une Révision"
        }
    },
    
    // About Section
    about_title: "Pourquoi choisir Kolibri Lessons?",
    about_items: [...],
    
    // Contact Section
    contact_title: "Intéressé par mes services?",
    contact_info: {...}
}
```

### Paso 3: Agregar botón en HTML
```html
<div class="language-selector">
    <button class="language-btn active" data-lang="es">ES</button>
    <button class="language-btn" data-lang="en">EN</button>
    <button class="language-btn" data-lang="de">DE</button>
    <!-- NUEVO BOTÓN -->
    <button class="language-btn" data-lang="fr">FR</button>
</div>
```

## ➕ Cómo Agregar Nuevas Secciones

### Paso 1: Agregar contenido en `translations.js`
```javascript
es: {
    // ... contenido existente ...
    
    // NUEVA SECCIÓN
    testimonials: {
        title: "Lo que dicen mis estudiantes",
        items: [
            {
                name: "María García",
                text: "Excelente profesora bilingüe, muy paciente y clara.",
                rating: 5,
                language: "español"
            },
            {
                name: "John Smith",
                text: "Great bilingual teacher, very patient and clear.",
                rating: 5,
                language: "english"
            }
        ]
    },
    
    pricing: {
        title: "Precios",
        plans: [
            {
                name: "Clases Individuales",
                spanish_price: "25€/hora",
                english_price: "25€/hora",
                features: [...]
            }
        ]
    }
}
```

### Paso 2: Agregar función de actualización en `translations.js`
```javascript
function changeLanguage(lang) {
    // ... código existente ...
    
    // Actualizar nueva sección
    updateTestimonialsSection(t);
    updatePricingSection(t);
}

function updateTestimonialsSection(t) {
    const section = document.querySelector('.testimonials-section');
    if (section) {
        section.querySelector('h2').textContent = t.testimonials.title;
        // Actualizar testimonios...
    }
}
```

### Paso 3: Agregar HTML para la nueva sección
```html
<div class="testimonials-section">
    <h2>Lo que dicen mis estudiantes</h2>
    <div class="testimonials-grid">
        <!-- Contenido dinámico -->
    </div>
</div>
```

## 🔧 Funciones Disponibles

### Cambio de Idioma
```javascript
// Cambiar idioma programáticamente
changeLanguage('en');

// Obtener idioma actual
const currentLang = localStorage.getItem('preferred-language') || 'es';
```

### Notificaciones
```javascript
// Mostrar notificación
showNotification('Mensaje de éxito', 'success');
showNotification('Mensaje de error', 'error');
showNotification('Mensaje informativo', 'info');
```

### Validación de Formularios
```javascript
// Validar formulario
const form = document.querySelector('#contact-form');
if (validateForm(form)) {
    // Enviar formulario
}
```

## 📋 Idiomas Soportados Actualmente

| Idioma | Código | Estado | Bandera |
|--------|--------|--------|---------|
| Español | `es` | ✅ Activo | 🇪🇸 |
| Inglés | `en` | ✅ Activo | 🇺🇸 |
| Alemán | `de` | ✅ Activo | 🇩🇪 |

## 🚀 Próximos Idiomas Sugeridos

| Idioma | Código | Prioridad | Mercado Objetivo |
|--------|--------|-----------|-------------------|
| Francés | `fr` | Media | Francia, Suiza |
| Italiano | `it` | Baja | Italia |
| Portugués | `pt` | Baja | Portugal, Brasil |

## 📚 Servicios Bilingües

### 🇪🇸 Español
- **Niveles**: Principiante, Intermedio, Avanzado
- **Certificaciones**: DELE, SIELE
- **Enfoque**: Conversacional y académico

### 🇺🇸 Inglés (ESL/EFL)
- **Niveles**: Beginner, Intermediate, Advanced
- **Certificaciones**: TOEFL, IELTS, Cambridge
- **Enfoque**: English as a Second Language

### ✏️ Ayuda de Tareas
- **Idiomas**: Español e Inglés
- **Servicios**: Explicación, corrección, preparación

### 📝 Revisión de Textos
- **Idiomas**: Español e Inglés
- **Tipos**: Académicos, profesionales, ensayos

## 📝 Notas de Mantenimiento

1. **Consistencia**: Mantener la misma estructura en todos los idiomas
2. **Traducción**: Usar traductores profesionales para nuevos idiomas
3. **Testing**: Probar todos los idiomas antes de publicar cambios
4. **Backup**: Hacer respaldo antes de agregar nuevos idiomas
5. **SEO**: Actualizar meta tags para cada idioma
6. **Servicios**: Asegurar que todos los servicios estén disponibles en ambos idiomas

## 🔄 Flujo de Trabajo para Cambios

1. **Editar** `translations.js` para agregar/modificar contenido
2. **Actualizar** `config.js` si se agregan nuevos servicios
3. **Probar** cambios en todos los idiomas
4. **Validar** que no hay errores de JavaScript
5. **Actualizar** documentación si es necesario
6. **Desplegar** cambios

## 🌍 Mercado Bilingüe

### Alemania
- **Estudiantes de español**: Inmigrantes, universitarios
- **Estudiantes de inglés**: Profesionales, negocios
- **Preparación de exámenes**: TOEFL, IELTS, DELE, SIELE

### Internacional
- **Clientes online**: Clases virtuales
- **Empresas**: Cursos corporativos
- **Instituciones**: Colaboraciones educativas

---

**Última actualización**: Diciembre 2024  
**Mantenido por**: Equipo de Desarrollo Kolibri Lessons  
**Servicios**: Bilingües (Español/Inglés) 