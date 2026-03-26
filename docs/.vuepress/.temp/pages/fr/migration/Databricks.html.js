import comp from "C:/Users/StilwelS/Documents/Working/docs-site-test/vuepress-starter/docs/.vuepress/.temp/pages/fr/migration/Databricks.html.vue"
const data = JSON.parse("{\"path\":\"/fr/migration/Databricks.html\",\"title\":\"Migration ou retrait du Databricks\",\"lang\":\"Français\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"A. Migration de POC à PROD\",\"slug\":\"a-migration-de-poc-a-prod\",\"link\":\"#a-migration-de-poc-a-prod\",\"children\":[]},{\"level\":2,\"title\":\"B. Retrait de Databricks du POC\",\"slug\":\"b-retrait-de-databricks-du-poc\",\"link\":\"#b-retrait-de-databricks-du-poc\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"fr/migration/Databricks.md\"}")
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
