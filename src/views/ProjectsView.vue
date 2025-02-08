<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { parseMarkdown } from '../utils/markdown'
import { parseProjectsFormat } from '../utils/markdownParser'
import { useRouter } from 'vue-router'
import ProjectsList from '../components/ProjectsList.vue'

// Add interface definition
interface ProjectItem {
  title: string;
  description: string;
  subItems: Array<{
    text: string;
    link?: string;
  }>;
}

const router = useRouter()
// Add explicit typing to the ref
const content = ref<ProjectItem[]>([])
const isLoading = ref<boolean>(true)
const error = ref<string | null>(null)

// Add error handling wrapper
const handleError = (err: unknown) => {
  const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred'
  error.value = errorMessage
  content.value = []
}

onMounted(async () => {
  try {
    const rawContent = await parseMarkdown('/projects/projects.md')
    content.value = parseProjectsFormat(rawContent)
  } catch (err) {
    handleError(err)
  } finally {
    isLoading.value = false
  }
})

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="projects-view">
    <div v-if="isLoading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <ProjectsList v-else :projects="content" />
    <div class="back-link">
      <a href="#" @click.prevent="goHome">Back to ~/</a>
    </div>
  </div>
</template>

<style scoped>
.projects-view {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  padding: 1rem;
  box-sizing: border-box;
}

.loading, 
.error {
  text-align: center;
  padding: 1rem;
}

.back-link {
  margin-top: 2rem;
}

.back-link a {
  color: rgb(96 165 250);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-bottom-color 0.2s;
}

.back-link a:hover {
  border-bottom-color: rgb(96 165 250);
}

@media (max-width: 480px) {
  .projects-view {
    padding: 0.75rem;
  }
}
</style>