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
      <span class="project-title">{{ project.title }}</span>
      <span v-if="project.description" class="project-description">{{ project.description }}</span>
      <ul v-if="project.subItems.length" class="sub-items">
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
  font-size: 18px;
  font-weight: normal;
}

.project-item {
  margin-bottom: 0.75rem; 
  position: relative;
  padding-left: 1.5rem;
}

.project-item::before {
  content: "◆";
  position: absolute;
  left: 0;
  color: var(--color-text);
}

.project-title {
  display: block;
  font-size: 18px;
  font-weight: normal;
  line-height: 1.2;
  margin: 0;
}

.project-description {
  display: block;
  margin: 0; 
  color: var(--color-text);
  opacity: 0.8;
  line-height: 1.2; 
  font-size: 18px;
}

.sub-items {
  list-style: none;
  padding-left: 1.5rem;
  margin: 0.15rem 0 0 0; 
  font-size: 18px;
}

.sub-item {
  position: relative;
  padding-left: 1.5rem;
  margin: 0.1rem 0; 
  line-height: 1.2; 
  font-size: 18px;
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
  font-size: 18px;
  font-weight: normal;
}

.sub-item a:hover {
  border-bottom-color: var(--color-text);
}
</style>