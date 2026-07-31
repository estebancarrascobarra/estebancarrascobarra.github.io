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

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
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

applyLanguage();
initializeTurnstile();
