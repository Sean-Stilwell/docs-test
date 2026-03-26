import comp from "C:/Users/StilwelS/Documents/Working/docs-site-test/vuepress-starter/docs/.vuepress/.temp/pages/en/migration/Storage.html.vue"
const data = JSON.parse("{\"path\":\"/en/migration/Storage.html\",\"title\":\"Migrating Storage\",\"lang\":\"English\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"A. Migrating from PoC to prod\",\"slug\":\"a-migrating-from-poc-to-prod\",\"link\":\"#a-migrating-from-poc-to-prod\",\"children\":[{\"level\":3,\"title\":\"Option 1: Use AzCopy to Migrate Storage Directly to Prod\",\"slug\":\"option-1-use-azcopy-to-migrate-storage-directly-to-prod\",\"link\":\"#option-1-use-azcopy-to-migrate-storage-directly-to-prod\",\"children\":[]},{\"level\":3,\"title\":\"Option 2: Use AzCopy to Download Data Locally\",\"slug\":\"option-2-use-azcopy-to-download-data-locally\",\"link\":\"#option-2-use-azcopy-to-download-data-locally\",\"children\":[]},{\"level\":3,\"title\":\"Option 3: Manually Export Data\",\"slug\":\"option-3-manually-export-data\",\"link\":\"#option-3-manually-export-data\",\"children\":[]}]},{\"level\":2,\"title\":\"B. Offboarding Storage\",\"slug\":\"b-offboarding-storage\",\"link\":\"#b-offboarding-storage\",\"children\":[]},{\"level\":2,\"title\":\"C. Support\",\"slug\":\"c-support\",\"link\":\"#c-support\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"en/migration/Storage.md\"}")
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
