function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
}

const translations = {
  "pt-BR": {
    title: "Links Pessoais",
    portfolio: "Portfólio",
    resume: "Download do Currículo em PDF",
    contact: "Contato",
    footerPrefix: "Projeto feito a partir do Discover",
    profileAlt:
      "Foto de Leonardo Ramos sorrindo, usando um terno preto com camisa e gravata azul, com árvores de fundo.",
    languageButton: "EN",
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
    languageButton: "PT-BR",
    resumeHref: "./files/Curriculo EN.pdf",
  },
}

let currentLanguage = "pt-BR"

function applyLanguage(language) {
  const content = translations[language]
  const html = document.documentElement
  const languageButton = document.getElementById("language-switch")
  const resumeLink = document.getElementById("resume-link")

  if (!content || !languageButton || !resumeLink) {
    return
  }

  html.lang = language
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
  languageButton.textContent = content.languageButton
  currentLanguage = language
}

function toggleLanguage() {
  const nextLanguage = currentLanguage === "pt-BR" ? "en" : "pt-BR"
  applyLanguage(nextLanguage)
}

applyLanguage(currentLanguage)
