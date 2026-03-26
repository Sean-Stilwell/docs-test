import comp from "C:/Users/StilwelS/Documents/Working/docs-site-test/vuepress-starter/docs/.vuepress/.temp/pages/en/apps/WebApps.html.vue"
const data = JSON.parse("{\"path\":\"/en/apps/WebApps.html\",\"title\":\"Hosting Web Apps on DataHub\",\"lang\":\"English\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Prerequisites\",\"slug\":\"prerequisites\",\"link\":\"#prerequisites\",\"children\":[]},{\"level\":2,\"title\":\"Deploying Your Application\",\"slug\":\"deploying-your-application\",\"link\":\"#deploying-your-application\",\"children\":[]},{\"level\":2,\"title\":\"Demo Applications\",\"slug\":\"demo-applications\",\"link\":\"#demo-applications\",\"children\":[]},{\"level\":2,\"title\":\"Getting Support\",\"slug\":\"getting-support\",\"link\":\"#getting-support\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"en/apps/WebApps.md\"}")
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
