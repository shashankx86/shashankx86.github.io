<script setup lang="ts">
import '../assets/home.css'
import { ref, onMounted } from 'vue'
import { parseMarkdown } from '../utils/markdown'
import { parseProjectsFormat } from '../utils/markdownParser'
import { useRouter } from 'vue-router'
import ProjectsList from '../components/ProjectsList.vue'

const router = useRouter()
const content = ref([])
const isLoading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const rawContent = await parseMarkdown('/projects/projects.md')
    content.value = parseProjectsFormat(rawContent)
  } catch (err: any) {
    error.value = err.message
    content.value = []
  } finally {
    isLoading.value = false
  }
})

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="home">
    <div class="content-container">
      <div v-if="isLoading" class="loading">Loading...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <ProjectsList v-else :projects="content" />
      <div class="back-link">
        <a href="#" @click.prevent="goHome">~/</a>
      </div>
    </div>
  </div>
</template>