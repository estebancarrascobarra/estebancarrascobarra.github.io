"use strict";

const root = document.documentElement;
const languageToggle = document.getElementById("language-toggle");
const languageCurrent = document.getElementById("language-current");
const languageAlternate = document.getElementById("language-alternate");
const contactDialog = document.getElementById("contact-dialog");
const closeContact = document.getElementById("close-contact");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const submitContact = document.getElementById("submit-contact");
const profileImage = document.getElementById("profile-image");
const descriptionMeta = document.querySelector('meta[name="description"]');

let language = readStoredLanguage();
let turnstileWidgetId = null;

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
    // El sitio sigue funcionando si el navegador bloquea localStorage.
  }
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function setBilingual(selector, es, en) {
  const container = document.querySelector(selector);
  if (!container) return;
  const esNode = container.querySelector('[data-lang="es"]');
  const enNode = container.querySelector('[data-lang="en"]');
  if (esNode) esNode.textContent = es;
  if (enNode) enNode.textContent = en;
}

function refineAcademicContent() {
  // Keep the published profile deliberately broad while the thesis line remains open.
  root.dataset.titleEs = "Esteban Ignacio Carrasco Barra | Gravitación y cosmología teórica";
  root.dataset.titleEn = "Esteban Ignacio Carrasco Barra | Theoretical gravitation and cosmology";
  root.dataset.descriptionEs = "Sitio académico de Esteban Ignacio Carrasco Barra, estudiante de Magíster en Física con intereses en gravitación, relatividad general, cosmología teórica, agujeros negros y física matemática, con preferencia por enfoques analíticos y matemáticos.";
  root.dataset.descriptionEn = "Academic website of Esteban Ignacio Carrasco Barra, an M.Sc. Physics student interested in gravitation, general relativity, theoretical cosmology, black holes and mathematical physics, with a preference for analytical and mathematical approaches.";

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.content = "Gravitación, relatividad general, cosmología teórica, agujeros negros y física matemática desde una perspectiva analítica y matemática.";
  }

  const heroLeads = document.querySelectorAll(".hero__lead");
  heroLeads.forEach((lead) => {
    if (lead.dataset.lang === "es") {
      lead.textContent = "Ingeniero Civil Matemático y estudiante del Magíster en Ciencias, mención Física, en la Universidad de Chile. Mis intereses actuales se sitúan ampliamente en gravitación y cosmología teórica, con especial afinidad por problemas donde la estructura matemática, los métodos analíticos y los aspectos conceptuales son centrales.";
    } else if (lead.dataset.lang === "en") {
      lead.textContent = "Mathematical Engineer and M.Sc. student in Physics at Universidad de Chile. My current interests broadly lie in gravitation and theoretical cosmology, with a particular affinity for problems in which mathematical structure, analytical methods and conceptual aspects are central.";
    }
  });

  setBilingual(
    "#profile-title",
    "De la matemática aplicada a la gravitación y la cosmología",
    "From applied mathematics to gravitation and cosmology"
  );

  const profileParagraphs = document.querySelectorAll(".panel--statement > p");
  profileParagraphs.forEach((paragraph) => {
    if (paragraph.dataset.lang === "es" && paragraph.textContent.includes("Mi formación combina")) {
      paragraph.textContent = "Mi formación combina matemáticas aplicadas, física y modelación científico-computacional. En el postgrado busco profundizar en gravitación, relatividad general y cosmología teórica, privilegiando formulaciones geométricas, métodos analíticos y problemas conceptuales antes que una orientación puramente numérica.";
    } else if (paragraph.dataset.lang === "en" && paragraph.textContent.includes("My background combines")) {
      paragraph.textContent = "My background combines applied mathematics, physics and scientific-computational modelling. During graduate study I aim to deepen my work in gravitation, general relativity and theoretical cosmology, favouring geometric formulations, analytical methods and conceptual problems over a purely numerical orientation.";
    }
  });

  setBilingual(
    ".profile-direction",
    "Intereses abiertos dentro de gravitación y cosmología, con particular atención a relatividad general, agujeros negros, universo temprano y teoría de campos. La línea específica de tesis aún no está fijada.",
    "Open interests within gravitation and cosmology, with particular attention to general relativity, black holes, the early universe and field theory. The specific thesis direction is not yet fixed."
  );

  setBilingual(
    "#research-title",
    "Gravitación y cosmología con énfasis matemático y teórico",
    "Gravitation and cosmology with a mathematical and theoretical emphasis"
  );

  const notes = document.querySelectorAll(".section-heading__note");
  notes.forEach((note) => {
    if (note.dataset.lang === "es") {
      note.textContent = "Intereses amplios que orientan mi formación actual; no representan todavía una línea de tesis cerrada.";
    } else if (note.dataset.lang === "en") {
      note.textContent = "Broad interests guiding my current training; they do not yet represent a fixed thesis direction.";
    }
  });

  const cards = document.querySelectorAll(".research-card");
  const cardContent = [
    {
      esTitle: "Gravitación y relatividad general",
      enTitle: "Gravitation and general relativity",
      esText: "Estructura geométrica de la gravedad, soluciones relativistas, teorías gravitacionales y problemas donde la formulación matemática permite esclarecer la física.",
      enText: "Geometric structure of gravity, relativistic solutions, gravitational theories and problems in which mathematical formulation helps clarify the underlying physics."
    },
    {
      esTitle: "Agujeros negros y perturbaciones",
      enTitle: "Black holes and perturbations",
      esText: "Geometría y física de agujeros negros, estabilidad perturbativa, modos y espectros, termodinámica y aspectos analíticos de espacios-tiempo gravitacionales.",
      enText: "Geometry and physics of black holes, perturbative stability, modes and spectra, thermodynamics and analytical aspects of gravitational spacetimes."
    },
    {
      esTitle: "Cosmología teórica y universo temprano",
      enTitle: "Theoretical cosmology and the early universe",
      esText: "Dinámica del universo temprano, inflación y perturbaciones primordiales como líneas de interés, junto con fundamentos y estructura matemática de modelos cosmológicos.",
      enText: "Early-universe dynamics, inflation and primordial perturbations as areas of interest, together with the foundations and mathematical structure of cosmological models."
    },
    {
      esTitle: "Física matemática y teoría de campos",
      enTitle: "Mathematical physics and field theory",
      esText: "Métodos geométricos y analíticos, teoría cuántica de campos y herramientas formales relevantes para gravitación, cosmología y física de altas energías.",
      enText: "Geometric and analytical methods, quantum field theory and formal tools relevant to gravitation, cosmology and high-energy physics."
    }
  ];

  cards.forEach((card, index) => {
    const content = cardContent[index];
    if (!content) return;
    setBilingual(`.research-card:nth-child(${index + 1}) h3`, content.esTitle, content.enTitle);
    setBilingual(`.research-card:nth-child(${index + 1})`, content.esText, content.enText);
  });

  const mastersEntry = document.querySelector(".timeline-item:first-child .timeline-item__content");
  if (mastersEntry) {
    const spans = mastersEntry.querySelectorAll(":scope > span[data-lang]");
    spans.forEach((span) => {
      if (span.dataset.lang === "es") span.textContent = "Becario ANID · Intereses en gravitación, relatividad general, cosmología y física matemática";
      if (span.dataset.lang === "en") span.textContent = "ANID scholar · Interests in gravitation, general relativity, cosmology and mathematical physics";
    });
  }
}

function loadVisualRefinements() {
  if (document.querySelector('link[href="assets/overrides.css"]')) return;
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = "assets/overrides.css";
  document.head.appendChild(stylesheet);
}

function applyLanguage() {
  root.lang = language;
  root.dataset.language = language;

  languageCurrent.textContent = language.toUpperCase();
  languageAlternate.textContent = language === "es" ? "EN" : "ES";
  languageToggle.setAttribute("aria-pressed", String(language === "en"));
  languageToggle.setAttribute("aria-label", languageToggle.dataset[`label${capitalize(language)}`]);
  closeContact.setAttribute("aria-label", closeContact.dataset[`label${capitalize(language)}`]);

  document.title = root.dataset[`title${capitalize(language)}`];
  if (descriptionMeta) descriptionMeta.content = root.dataset[`description${capitalize(language)}`];
}

function message(name) {
  return contactForm.dataset[`${name}${capitalize(language)}`] || "";
}

function setFormStatus(text, type = "") {
  formStatus.textContent = text;
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

function isPlaceholder(value) {
  return !value || value.includes("REEMPLAZA_CON_TU_");
}

function initializeTurnstile() {
  const siteKey = contactForm.dataset.turnstileSitekey;
  if (isPlaceholder(siteKey)) return;

  const script = document.createElement("script");
  script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
  script.async = true;
  script.defer = true;
  script.addEventListener("load", () => {
    if (!window.turnstile || turnstileWidgetId !== null) return;
    turnstileWidgetId = window.turnstile.render("#turnstile-container", {
      sitekey: siteKey,
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
    event.clientX < bounds.left || event.clientX > bounds.right ||
    event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (clickedOutside) closeContactDialog();
});

contactDialog.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
});

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setFormStatus("");

  if (!contactForm.reportValidity()) {
    setFormStatus(message("invalid"), "error");
    return;
  }

  if (isPlaceholder(contactForm.action)) {
    setFormStatus(message("notconfigured"), "error");
    return;
  }

  submitContact.disabled = true;
  const originalLabels = [...submitContact.querySelectorAll("[data-lang]")].map((node) => node.textContent);
  submitContact.querySelectorAll("[data-lang]").forEach((node) => { node.textContent = message("sending"); });

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { Accept: "application/json" }
    });

    if (!response.ok) throw new Error(`Form submission failed: ${response.status}`);

    contactForm.reset();
    setFormStatus(message("success"), "success");
    if (window.turnstile && turnstileWidgetId !== null) window.turnstile.reset(turnstileWidgetId);
  } catch (error) {
    console.error(error);
    setFormStatus(message("error"), "error");
  } finally {
    submitContact.disabled = false;
    submitContact.querySelectorAll("[data-lang]").forEach((node, index) => { node.textContent = originalLabels[index]; });
  }
});

profileImage.addEventListener("error", () => profileImage.classList.add("is-missing"));
document.getElementById("current-year").textContent = String(new Date().getFullYear());

loadVisualRefinements();
refineAcademicContent();
applyLanguage();
initializeTurnstile();
