// Si la langue du navigateur est supportée, alors changer la langue.
// Sinon changer pour la dernière langue sauvegardée
// Sinon français par défaut
let DEFAULT_LANG = "fr";
let currentLang = DEFAULT_LANG;
if (localStorage.getItem("language")) {
  currentLang = localStorage.getItem("language");
} else if (
  Object.keys(translations).some((v) => {
    return v.startsWith(navigator.language);
  })
) {
  currentLang = navigator.language;
}

function changeLanguage(lang, save = true) {
  // Sauvegarder la langue choisie
  if (save) {
    localStorage.setItem("language", lang);
  }

  // Mettre à jour les boutons de langue
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.textContent.toLowerCase() === lang) {
      btn.classList.add("active");
    }
  });

  // Traduire tous les éléments
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    // Si la traduction n'existe pas dans la langue alors quand même afficher
    // une traduction par défaut
    const current_translation =
      translations[lang][key] || translations[DEFAULT_LANG][key];
    if (current_translation) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = current_translation;
      } else {
        element.textContent = current_translation;
      }
    }
  });

  // Changer la langue du document
  document.documentElement.lang = lang;
}
// Récupére les traductions stockées localement et affiche le résultat
let translations = {};
fetch("/data/traductions.json")
  .then((response) => response.json())
  .then((data) => {
    translations = data;
    changeLanguage(currentLang, false);
  });

// Affiche le header
fetch("/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.body.insertAdjacentHTML("afterbegin", data);
  });
