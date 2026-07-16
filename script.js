const translations = {
  "pt-BR": {
    title: "Links Pessoais",
    portfolio: "Portfólio",
    resume: "Download do Currículo em PDF",
    contact: "Contato",
    footerPrefix: "Projeto feito a partir do Discover",
    profileAlt:
      "Foto de Leonardo Ramos sorrindo, usando um terno preto com camisa e gravata azul, com árvores de fundo.",
    languageLabel: "Alternar idioma para inglês",
    resumeHref: "./files/curriculo-leonardo-preczevski-ramos.pdf",
  },
  en: {
    title: "Personal Links",
    portfolio: "Portfolio",
    resume: "Download Resume PDF",
    contact: "Contact",
    footerPrefix: "Project built from Discover",
    profileAlt:
      "Photo of Leonardo Ramos smiling, wearing a black suit with a blue shirt and tie, with trees in the background.",
    languageLabel: "Switch language to Brazilian Portuguese",
    resumeHref: "./files/Curriculo EN.pdf",
  },
}

let currentLanguage = "pt-BR"

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
}

function applyLanguage(language) {
  const content = translations[language]
  const html = document.documentElement
  const languageButton = document.getElementById("language-switch")
  const resumeLink = document.getElementById("resume-link")

  if (!content || !languageButton || !resumeLink) {
    return
  }

  html.lang = language
  html.dataset.language = language
  document.title = content.title

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n
    element.textContent = content[key]
  })

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt
    element.alt = content[key]
  })

  resumeLink.href = content.resumeHref
  languageButton.setAttribute("aria-label", content.languageLabel)
  currentLanguage = language
}

function toggleLanguage() {
  const nextLanguage = currentLanguage === "pt-BR" ? "en" : "pt-BR"
  applyLanguage(nextLanguage)
}

document.addEventListener("DOMContentLoaded", () => {
  const themeSwitch = document.getElementById("switch")
  const languageSwitch = document.getElementById("language-switch")

  if (themeSwitch) {
    themeSwitch.addEventListener("click", toggleMode)
  }

  if (languageSwitch) {
    languageSwitch.addEventListener("click", toggleLanguage)
  }

  applyLanguage(currentLanguage)
})
