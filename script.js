const translations = {
    fr: {
        nav_home: "Accueil",
        nav_program: "Programme",
        nav_contact: "Contact",
        home_title: "Bienvenue à Armand Vitesse !",
        home_text1: "Situé au 18 square Louis Armand à Rennes, le local Armand Vitesse est un lieu autogéré de bricolage, d’auto-réparation, de création et d'auto-formation. On est dans un garage mis à disposition gratuitement, on fonctionne sur le prix libre et le lieu est géré par les gens qui le font vivre (on est pas une association).",
        home_text2: "On est dans une démarche d’entraide pour que les gens qui n'ont pas trop de moyens puissent réparer leurs affaires (vélo, électronique, téléphone, PC, couture...). On a aussi envie d’être dans un partage de connaissances, d’apprendre des trucs (menuiserie, etc), dans un espace convivial et bienveillant (café gratuit, goûter, etc). On a envie de renforcer la solidarité entre nous parce que ça donne à tout le monde grave de la force.",
        home_text3: "🫶 La volonté des personnes qui lancent le projet est de faire en sorte que cet espace soit ouvert et que tout le monde s’y sente la/le bienvenu.e. On essaie de faire attention à nos postures et attitudes pour ne pas reproduire ici ce qui nous fout la rage partout ailleurs (racisme, sexisme, validisme, et toutes les oppressions).",
        home_text4: "💬 Si tu as envie de t’investir dans le projet, de proposer un atelier (que ce soit du dessin, un atelier de français ou tout ce que tu veux), de venir participer aux évènements ou de juste boire un café, tu es la/le bienvenu.e !",
        home_text5: "A très vite à Armand Vitesse 💖",
        program_title: "Le programme de ce mois",
        program1_title: "Français",
        program2_title: "Géorgien",
        program3_title: "Albanais",
        contact_title: "Contactez-nous",
        form_name: "Nom :",
        form_email: "Email :",
        form_message: "Message :",
        form_submit: "Envoyer",
        footer_text: "© 2025 Mon Site. Tous droits réservés.",
        success_message: "Merci ! Votre message a été envoyé avec succès."
    },
    en: {
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

// Si la langue du navigateur est supportée, alors changer la langue.
// Sinon changer pour la dernière langue sauvegardée
// Sinon français par défaut
let currentLang = 'fr';
if (localStorage.getItem('language')) {
    currentLang = localStorage.getItem('language');
}
else if (Object.keys(translations).some((v) => {
    return v.startsWith(navigator.language);
})) {
    currentLang = navigator.language;
}

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