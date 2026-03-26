export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-CA\",\"title\":\"Federal Science DataHub\",\"description\":\"User documentation for the Federal Science DataHub\",\"head\":[[\"link\",{\"rel\":\"shortcut icon\",\"href\":\"https://notification.canada.ca/static/images/favicon.ico\"}]],\"locales\":{\"/en/\":{\"lang\":\"English\",\"selectLanguageName\":\"English\",\"title\":\"Federal Science DataHub\",\"logo\":\"https://assets.notification.canada.ca/static/gov-canada-en.svg\",\"description\":\"User documentation for the Federal Science DataHub\"},\"/fr/\":{\"lang\":\"Français\",\"selectLanguageName\":\"Français\",\"title\":\"Plateforme fédérale de données scientifiques\",\"logo\":\"https://assets.notification.canada.ca/static/gov-canada-fr.svg\",\"description\":\"Documentation utilisateur pour la Plateforme fédérale de données scientifiques\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
