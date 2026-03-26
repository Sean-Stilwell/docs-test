import comp from "C:/Users/StilwelS/Documents/Working/docs-site-test/vuepress-starter/docs/.vuepress/.temp/pages/en/databricks/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/databricks/\",\"title\":\"Databricks on the Federal Science DataHub\",\"lang\":\"English\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"en/databricks/README.md\"}")
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
