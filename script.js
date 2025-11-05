const translations = {
    fr: {
        site_title: "Mon Site",
        nav_home: "Accueil",
        nav_program: "Programme",
        nav_contact: "Contact",
        home_title: "Bienvenue sur notre site",
        home_text: "Nous sommes ravis de vous accueillir sur notre plateforme. Notre mission est de vous offrir des services de qualité exceptionnelle et une expérience utilisateur incomparable. Avec des années d'expertise dans notre domaine, nous nous engageons à répondre à vos besoins avec professionnalisme et dévouement. Découvrez nos programmes innovants et n'hésitez pas à nous contacter pour toute question ou demande d'information.",
        program_title: "Nos Programmes",
        program1_title: "Programme Débutant",
        program1_desc: "Idéal pour ceux qui commencent leur parcours. Ce programme comprend des modules d'initiation, un accompagnement personnalisé et des ressources adaptées à votre niveau.",
        program2_title: "Programme Intermédiaire",
        program2_desc: "Pour approfondir vos connaissances et développer vos compétences. Accédez à des cours avancés, des ateliers pratiques et un suivi régulier de votre progression.",
        program3_title: "Programme Expert",
        program3_desc: "Le niveau ultime pour les professionnels confirmés. Bénéficiez d'un mentorat exclusif, de masterclasses et d'opportunités de networking premium.",
        contact_title: "Contactez-nous",
        form_name: "Nom :",
        form_email: "Email :",
        form_message: "Message :",
        form_submit: "Envoyer",
        footer_text: "© 2025 Mon Site. Tous droits réservés.",
        success_message: "Merci ! Votre message a été envoyé avec succès."
    },
    en: {
        site_title: "My Website",
        nav_home: "Home",
        nav_program: "Program",
        nav_contact: "Contact",
        home_title: "Welcome to our website",
        home_text: "We are delighted to welcome you to our platform. Our mission is to provide you with exceptional quality services and an unparalleled user experience. With years of expertise in our field, we are committed to meeting your needs with professionalism and dedication. Discover our innovative programs and feel free to contact us for any questions or information requests.",
        program_title: "Our Programs",
        program1_title: "Beginner Program",
        program1_desc: "Perfect for those starting their journey. This program includes introductory modules, personalized support and resources adapted to your level.",
        program2_title: "Intermediate Program",
        program2_desc: "To deepen your knowledge and develop your skills. Access advanced courses, practical workshops and regular monitoring of your progress.",
        program3_title: "Expert Program",
        program3_desc: "The ultimate level for experienced professionals. Benefit from exclusive mentoring, masterclasses and premium networking opportunities.",
        contact_title: "Contact Us",
        form_name: "Name:",
        form_email: "Email:",
        form_message: "Message:",
        form_submit: "Send",
        footer_text: "© 2025 My Website. All rights reserved.",
        success_message: "Thank you! Your message has been sent successfully."
    },
    es: {
        site_title: "Mi Sitio",
        nav_home: "Inicio",
        nav_program: "Programa",
        nav_contact: "Contacto",
        home_title: "Bienvenido a nuestro sitio",
        home_text: "Estamos encantados de darle la bienvenida a nuestra plataforma. Nuestra misión es ofrecerle servicios de calidad excepcional y una experiencia de usuario incomparable. Con años de experiencia en nuestro campo, nos comprometemos a satisfacer sus necesidades con profesionalismo y dedicación. Descubra nuestros programas innovadores y no dude en contactarnos para cualquier pregunta o solicitud de información.",
        program_title: "Nuestros Programas",
        program1_title: "Programa Principiante",
        program1_desc: "Ideal para quienes comienzan su viaje. Este programa incluye módulos introductorios, apoyo personalizado y recursos adaptados a su nivel.",
        program2_title: "Programa Intermedio",
        program2_desc: "Para profundizar sus conocimientos y desarrollar sus habilidades. Acceda a cursos avanzados, talleres prácticos y seguimiento regular de su progreso.",
        program3_title: "Programa Experto",
        program3_desc: "El nivel definitivo para profesionales experimentados. Benefíciese de mentoría exclusiva, masterclasses y oportunidades premium de networking.",
        contact_title: "Contáctenos",
        form_name: "Nombre:",
        form_email: "Correo electrónico:",
        form_message: "Mensaje:",
        form_submit: "Enviar",
        footer_text: "© 2025 Mi Sitio. Todos los derechos reservados.",
        success_message: "¡Gracias! Su mensaje ha sido enviado exitosamente."
    }
};

// Charger la langue sauvegardée ou utiliser le français par défaut
let currentLang = localStorage.getItem('language') || 'fr';

// Initialiser la langue au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    changeLanguage(currentLang, false);
});

function changeLanguage(lang, save = true) {
    currentLang = lang;
    
    // Sauvegarder la langue choisie
    if (save) {
        localStorage.setItem('language', lang);
    }
    
    // Mettre à jour les boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });

    // Traduire tous les éléments
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Changer la langue du document
    document.documentElement.lang = lang;
}

function handleSubmit(event) {
    event.preventDefault();
    alert(translations[currentLang].success_message);
    event.target.reset();
}