<script setup lang="ts">
import { computed } from 'vue';

interface SubItem {
  text: string;
  link?: string;
}

interface Project {
  title: string;
  description: string;
  subItems: SubItem[];
}

const props = defineProps<{
  projects: Project[];
}>();
</script>

<template>
  <ul class="projects-list">
    <li v-for="(project, index) in projects" :key="index" class="project-item">
      <h3>{{ project.title }}</h3>
      <p class="project-description">{{ project.description }}</p>
      <ul class="sub-items">
        <li v-for="(item, itemIndex) in project.subItems" 
            :key="itemIndex" 
            class="sub-item">
          <a v-if="item.link" :href="item.link" target="_blank" rel="noopener">
            {{ item.text }}
          </a>
          <span v-else>{{ item.text }}</span>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped>
.projects-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.project-item {
  margin-bottom: 2rem;
  position: relative;
  padding-left: 1.5rem;
}

.project-item::before {
  content: "◆";
  position: absolute;
  left: 0;
  color: var(--color-text);
}

.project-description {
  margin: 0.5rem 0;
  color: var(--color-text);
  opacity: 0.8;
}

.sub-items {
  list-style: none;
  padding-left: 1.5rem;
  margin: 0.5rem 0;
}

.sub-item {
  position: relative;
  padding-left: 1.5rem;
  margin: 0.25rem 0;
}

.sub-item::before {
  content: "◇";
  position: absolute;
  left: 0;
  color: var(--color-text);
  opacity: 0.9;
}

.sub-item a {
  color: var(--color-text);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-bottom-color 0.2s;
}

.sub-item a:hover {
  border-bottom-color: var(--color-text);
}
</style>