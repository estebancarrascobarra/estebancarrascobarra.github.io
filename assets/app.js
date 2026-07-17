/*
  CONFIGURACIÓN DE CONTACTO
  1) Crea un formulario en Formspree.
  2) Reemplaza FORM_ENDPOINT por la URL que Formspree te entregue.
  3) Opcional y recomendado: configura Cloudflare Turnstile dentro de Formspree
     y pega aquí solamente la SITE KEY pública. La SECRET KEY queda en Formspree.
*/
const FORM_ENDPOINT = "https://formspree.io/f/meeyajlo";
const TURNSTILE_SITE_KEY = "REEMPLAZA_CON_TU_SITE_KEY";

const translations = {
  es: {
    "nav.profile": "Perfil",
    "nav.research": "Investigación",
    "nav.background": "Trayectoria",
    "actions.contact": "Contacto",
    "actions.write": "Escríbeme",
    "actions.cv": "Ver currículum",
    "actions.openForm": "Abrir formulario seguro",
    "hero.eyebrow": "Física Teórica · Matemáticas Aplicadas",
    "hero.lead": "Ingeniero Civil Matemático y estudiante de Magíster en Física en la Universidad de Chile. Trabajo en la intersección entre cosmología teórica, modelación matemática y computación científica.",
    "hero.currentLabel": "Actualmente",
    "hero.currentValue": "Magíster en Física · UChile",
    "hero.supportLabel": "Financiamiento",
    "hero.supportValue": "Beca Magíster Nacional ANID",
    "hero.status": "Temuco · Santiago · Disponible para colaboración académica",
    "profile.eyebrow": "Perfil",
    "profile.title": "Una trayectoria entre matemática, física y modelación",
    "profile.paragraph1": "Mi trabajo se sitúa en la interfaz entre la formulación matemática rigurosa y la interpretación física. Actualmente desarrollo mi formación de postgrado en física teórica, con énfasis en teoría inflacionaria y perturbaciones primordiales.",
    "profile.paragraph2": "Mi experiencia abarca modelación de incendios forestales mediante ecuaciones diferenciales parciales, simulación numérica y computación de alto rendimiento, además de dirección de proyectos de I+D e inteligencia artificial aplicada a educación.",
    "profile.fact1": "Nota final de pregrado",
    "profile.fact2": "Primer lugar de la promoción",
    "profile.fact3": "Experiencia internacional en investigación",
    "research.eyebrow": "Áreas de interés",
    "research.title": "Preguntas fundamentales, herramientas precisas",
    "research.note": "Intereses actuales y experiencia que orientan mi trabajo de investigación.",
    "research.item1Title": "Cosmología e inflación",
    "research.item1Text": "Dinámica del universo temprano, perturbaciones cosmológicas y generación de estructura primordial.",
    "research.item2Title": "Relatividad General",
    "research.item2Text": "Geometría del espacio-tiempo, gravitación y termodinámica de agujeros negros.",
    "research.item3Title": "Teoría cuántica de campos",
    "research.item3Text": "Estructuras formales y métodos cuánticos aplicados a sistemas de altas energías.",
    "research.item4Title": "Modelación matemática y EDP",
    "research.item4Text": "Modelos de reacción-difusión-convección, métodos numéricos y dinámica fuego-atmósfera en problemas de incendios forestales.",
    "background.eyebrow": "Trayectoria",
    "background.item0Title": "Investigador responsable de proyecto de I+D",
    "background.item0Place": "Innovación UFRO · Temuco, Chile",
    "background.item0Detail": "Dirección científica y gestión de Docta, tutor de IA con metodología socrática, financiado por ANID InES I+D",
    "background.title": "Formación y experiencia",
    "background.item1Title": "Magíster en Ciencias, mención Física",
    "background.item1Place": "Universidad de Chile · Facultad de Ciencias Físicas y Matemáticas",
    "background.item1Detail": "Becario ANID · Orientación en cosmología teórica e inflación",
    "background.item2Title": "Investigador visitante",
    "background.item2Place": "Centre de Ciència i Tecnologia Forestal de Catalunya · España",
    "background.item2Detail": "Marie Curie Staff Exchange · Modelación en Física Atmosférica",
    "background.item3Title": "Ingeniero Civil Matemático",
    "background.item3Place": "Universidad de La Frontera",
    "background.item3Detail": "Primer lugar de la promoción · Tesis financiada por FONDEF",
    "cta.eyebrow": "Contacto académico",
    "cta.title": "Conversemos sobre investigación, colaboración o proyectos.",
    "footer.tagline": "Física Teórica · Matemáticas Aplicadas",
    "contact.eyebrow": "Mensaje privado",
    "contact.title": "Contacto",
    "contact.intro": "Mensaje directo",
    "contact.name": "Nombre",
    "contact.email": "Correo para responder",
    "contact.subject": "Asunto",
    "contact.message": "Mensaje",
    "contact.send": "Enviar mensaje",
    "contact.sending": "Enviando…",
    "contact.success": "Mensaje enviado correctamente.",
    "contact.error": "No fue posible enviar el mensaje. Inténtalo nuevamente.",
    "contact.invalid": "Revisa los campos obligatorios.",
    "contact.notConfigured": "El formulario aún no está configurado. Reemplaza el ID de Formspree en assets/app.js."
  },
  en: {
    "nav.profile": "Profile",
    "nav.research": "Research",
    "nav.background": "Background",
    "actions.contact": "Contact",
    "actions.write": "Write to me",
    "actions.cv": "View résumé",
    "actions.openForm": "Open secure form",
    "hero.eyebrow": "Theoretical physics · Mathematical modelling",
    "hero.lead": "Mathematical Engineer and M.Sc. student in Physics at Universidad de Chile. I work at the intersection of theoretical cosmology, mathematical modelling and scientific computing.",
    "hero.currentLabel": "Currently",
    "hero.currentValue": "M.Sc. in Physics · UChile",
    "hero.supportLabel": "Funding",
    "hero.supportValue": "ANID National Scholarship",
    "hero.status": "Temuco · Santiago · Open to academic collaboration",
    "profile.eyebrow": "Profile",
    "profile.title": "A path across mathematics, physics and modelling",
    "profile.paragraph1": "My work lies at the interface between rigorous mathematical formulation and physical interpretation. I am currently pursuing graduate training in theoretical physics, focusing on inflationary theory and primordial perturbations.",
    "profile.paragraph2": "My experience includes wildfire modelling through partial differential equations, numerical simulation and high-performance computing, as well as R&D project leadership and artificial intelligence applied to education.",
    "profile.fact1": "Final undergraduate grade",
    "profile.fact2": "Top-ranked graduate",
    "profile.fact3": "International research experience",
    "research.eyebrow": "Research interests",
    "research.title": "Fundamental questions, precise tools",
    "research.note": "Current interests and prior experience shaping my research work.",
    "research.item1Title": "Cosmology and inflation",
    "research.item1Text": "Early-universe dynamics, cosmological perturbations and the generation of primordial structure.",
    "research.item2Title": "General relativity",
    "research.item2Text": "Spacetime geometry, gravitation and black-hole thermodynamics.",
    "research.item3Title": "Quantum field theory",
    "research.item3Text": "Formal structures and quantum methods applied to high-energy systems.",
    "research.item4Title": "Mathematical modelling and PDEs",
    "research.item4Text": "Reaction-diffusion-convection models, numerical methods and fire-atmosphere dynamics in wildfire problems.",
    "background.eyebrow": "Background",
    "background.item0Title": "Lead researcher for an R&D project",
    "background.item0Place": "UFRO Innovation · Temuco, Chile",
    "background.item0Detail": "Scientific leadership and management of Docta, an AI tutor based on the Socratic method, funded by ANID InES I+D",
    "background.title": "Education and experience",
    "background.item1Title": "M.Sc. in Science, major in Physics",
    "background.item1Place": "Universidad de Chile · Faculty of Physical and Mathematical Sciences",
    "background.item1Detail": "ANID scholar · Theoretical cosmology and inflation",
    "background.item2Title": "Visiting researcher",
    "background.item2Place": "Forest Science and Technology Centre of Catalonia · Spain",
    "background.item2Detail": "Marie Curie Staff Exchange · Atmospherical Physics",
    "background.item3Title": "Mathematical Engineer",
    "background.item3Place": "Universidad de La Frontera",
    "background.item3Detail": "Top graduate · FONDEF-funded thesis",
    "cta.eyebrow": "Academic contact",
    "cta.title": "Let us discuss research, collaboration or projects.",
    "footer.tagline": "Theoretical physics · Mathematical modelling",
    "contact.eyebrow": "Private message",
    "contact.title": "Contact",
    "contact.intro": "Direct message",
    "contact.name": "Name",
    "contact.email": "Reply email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.sending": "Sending…",
    "contact.success": "Message sent successfully.",
    "contact.error": "The message could not be sent. Please try again.",
    "contact.invalid": "Check the required fields.",
    "contact.notConfigured": "The form has not been configured yet. Replace the Formspree ID in assets/app.js."
  }
};

function readStoredLanguage() {
  try {
    return localStorage.getItem("site-language") === "en" ? "en" : "es";
  } catch {
    return "es";
  }
}

function storeLanguage(value) {
  try {
    localStorage.setItem("site-language", value);
  } catch {
    // El sitio sigue funcionando cuando el navegador bloquea almacenamiento local.
  }
}

let language = readStoredLanguage();
let turnstileWidgetId = null;

const languageToggle = document.getElementById("language-toggle");
const languageCurrent = document.getElementById("language-current");
const languageAlternate = document.getElementById("language-alternate");
const contactDialog = document.getElementById("contact-dialog");
const closeContact = document.getElementById("close-contact");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const submitContact = document.getElementById("submit-contact");
const profileImage = document.getElementById("profile-image");

function t(key) {
  return translations[language][key] || key;
}

function applyLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = t(key);
  });

  languageCurrent.textContent = language.toUpperCase();
  languageAlternate.textContent = language === "es" ? "EN" : "ES";
  languageToggle.setAttribute("aria-pressed", String(language === "en"));
  languageToggle.setAttribute("aria-label", language === "es" ? "Switch to English" : "Cambiar a español");

  const closeLabel = language === "es" ? "Cerrar formulario" : "Close form";
  closeContact.setAttribute("aria-label", closeLabel);
}

function setFormStatus(message, type = "") {
  formStatus.textContent = message;
  formStatus.className = "form-status";
  if (type) formStatus.classList.add(`is-${type}`);
}

function openContactDialog() {
  setFormStatus("");
  contactDialog.showModal();
  document.body.classList.add("modal-open");
  contactForm.elements.name?.focus();
}

function closeContactDialog() {
  contactDialog.close();
  document.body.classList.remove("modal-open");
}

function isConfigured(value, placeholder) {
  return Boolean(value) && !value.includes(placeholder);
}

function initializeTurnstile() {
  if (!isConfigured(TURNSTILE_SITE_KEY, "REEMPLAZA")) return;

  const script = document.createElement("script");
  script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
  script.async = true;
  script.defer = true;
  script.addEventListener("load", () => {
    if (!window.turnstile || turnstileWidgetId !== null) return;
    turnstileWidgetId = window.turnstile.render("#turnstile-container", {
      sitekey: TURNSTILE_SITE_KEY,
      theme: "dark",
      appearance: "interaction-only"
    });
  });
  document.head.appendChild(script);
}

languageToggle.addEventListener("click", () => {
  language = language === "es" ? "en" : "es";
  storeLanguage(language);
  applyLanguage();
});

document.querySelectorAll("[data-open-contact]").forEach((button) => {
  button.addEventListener("click", openContactDialog);
});

closeContact.addEventListener("click", closeContactDialog);

contactDialog.addEventListener("click", (event) => {
  const bounds = contactDialog.getBoundingClientRect();
  const clickedOutside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;

  if (clickedOutside) closeContactDialog();
});

contactDialog.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
});

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setFormStatus("");

  if (!contactForm.reportValidity()) {
    setFormStatus(t("contact.invalid"), "error");
    return;
  }

  if (!isConfigured(FORM_ENDPOINT, "REEMPLAZA")) {
    setFormStatus(t("contact.notConfigured"), "error");
    return;
  }

  submitContact.disabled = true;
  submitContact.querySelector("span").textContent = t("contact.sending");

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { Accept: "application/json" }
    });

    if (!response.ok) throw new Error(`Form submission failed: ${response.status}`);

    contactForm.reset();
    setFormStatus(t("contact.success"), "success");
    if (window.turnstile && turnstileWidgetId !== null) {
      window.turnstile.reset(turnstileWidgetId);
    }
  } catch (error) {
    console.error(error);
    setFormStatus(t("contact.error"), "error");
  } finally {
    submitContact.disabled = false;
    submitContact.querySelector("span").textContent = t("contact.send");
  }
});

profileImage.addEventListener("error", () => {
  profileImage.classList.add("is-missing");
});

document.getElementById("current-year").textContent = String(new Date().getFullYear());
applyLanguage();
initializeTurnstile();
