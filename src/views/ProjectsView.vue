<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ProjectsList from '../components/ProjectsList.vue'
import projectsData from '../assets/projects.json'

const router = useRouter()
const content = ref(projectsData.projects)

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="projects-view">
    <ProjectsList :projects="content" />
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