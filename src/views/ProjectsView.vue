<script setup lang="ts">
import '../assets/home.css'
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
const isLoading = ref(true)
const error = ref<string | null>(null)

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
        <a href="#" @click.prevent="goHome">Back to ~/</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.back-link {
  margin-top: 1rem;
}

.back-link a {
  color: rgb(96 165 250);
  text-decoration: none;
  transition: border-bottom-color 0.2s;
  border-bottom: 1px solid transparent;
}

.back-link a:hover {
  border-bottom-color: rgb(96 165 250);
}
</style>