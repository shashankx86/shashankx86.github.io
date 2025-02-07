<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { marked } from 'marked'
import '../assets/home.css'

const parsedContent = ref('')

onMounted(async () => {
  try {
    const response = await fetch('/home.md')
    const markdown = await response.text()
    // Use await here since marked returns a Promise
    parsedContent.value = await marked(markdown)
  } catch (error) {
    console.error('Failed to parse Markdown content:', error)
  }
})
</script>

<template>
  <div class="home">
    <div class="markdown-content" v-html="parsedContent"></div>
  </div>
</template>
