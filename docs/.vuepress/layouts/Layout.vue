<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import '@gcds-core/components-vue/gcds.css';
import '../styles/style.css'
// import '@gcds-core/css-shortcuts/dist/gcds-css-shortcuts.min.css';
import { GcdsSignature } from '@gcds-core/components-vue';
import Language from '../components/Language.vue';
</script>

<template>
  <ParentLayout>
    <template #navbar-before>
      <Language />
    </template>
    <template #page-bottom>
      <div class="gc-footer">
        <GcdsSignature type="wordmark"></GcdsSignature>
      </div>
    </template>
  </ParentLayout>
</template>