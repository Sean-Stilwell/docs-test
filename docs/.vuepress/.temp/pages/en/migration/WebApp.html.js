import comp from "C:/Users/StilwelS/Documents/Working/docs-site-test/vuepress-starter/docs/.vuepress/.temp/pages/en/migration/WebApp.html.vue"
const data = JSON.parse("{\"path\":\"/en/migration/WebApp.html\",\"title\":\"Migrating Web Apps\",\"lang\":\"English\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"A. Migrating from PoC to Prod\",\"slug\":\"a-migrating-from-poc-to-prod\",\"link\":\"#a-migrating-from-poc-to-prod\",\"children\":[]},{\"level\":2,\"title\":\"B. Offboarding from PoC\",\"slug\":\"b-offboarding-from-poc\",\"link\":\"#b-offboarding-from-poc\",\"children\":[]},{\"level\":2,\"title\":\"C. Support\",\"slug\":\"c-support\",\"link\":\"#c-support\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"en/migration/WebApp.md\"}")
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
