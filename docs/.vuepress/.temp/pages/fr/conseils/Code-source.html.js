import comp from "C:/Users/StilwelS/Documents/Working/docs-site-test/vuepress-starter/docs/.vuepress/.temp/pages/fr/conseils/Code-source.html.vue"
const data = JSON.parse("{\"path\":\"/fr/conseils/Code-source.html\",\"title\":\"Code source\",\"lang\":\"Français\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"fr/conseils/Code-source.md\"}")
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
