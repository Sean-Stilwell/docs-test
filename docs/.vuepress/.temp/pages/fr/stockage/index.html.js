import comp from "C:/Users/StilwelS/Documents/Working/docs-site-test/vuepress-starter/docs/.vuepress/.temp/pages/fr/stockage/index.html.vue"
const data = JSON.parse("{\"path\":\"/fr/stockage/\",\"title\":\"Stockage sur la Plateforme fédérale de données scientifiques\",\"lang\":\"Français\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"fr/stockage/README.md\"}")
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
