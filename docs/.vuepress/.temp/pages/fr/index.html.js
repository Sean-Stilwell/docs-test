import comp from "C:/Users/StilwelS/Documents/Working/docs-site-test/vuepress-starter/docs/.vuepress/.temp/pages/fr/index.html.vue"
const data = JSON.parse("{\"path\":\"/fr/\",\"title\":\"Survol\",\"lang\":\"Français\",\"frontmatter\":{\"next\":\"./gerer-espaces-et-utilisateurs/Preregistration.md\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"fr/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
