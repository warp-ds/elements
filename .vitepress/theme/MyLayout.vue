<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-top>
      <theme-switcher></theme-switcher>
    </template>
  </Layout>
</template>