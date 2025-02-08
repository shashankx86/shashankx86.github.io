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
          <template v-if="item.link">
            <a :href="item.link" target="_blank" rel="noopener">
              {{ item.text }}
              <svg class="external-link-icon" viewBox="0 0 24 24" width="12" height="12">
                <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
              </svg>
            </a>
          </template>
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
  content: "◈";
  color: rgb(96 165 250);
  position: absolute;
  left: 0;
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
  color: rgb(78, 129, 191);
  opacity: 0.9;
}

.sub-item a {
  color: var(--color-text);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-bottom-color 0.2s, opacity 0.2s;
  font-size: 18px;
  font-weight: normal;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.sub-item a:hover {
  border-bottom-color: var(--color-text);
}

.external-link-icon {
  opacity: 0.7;
  transition: opacity 0.2s;
}

.sub-item a:hover .external-link-icon {
  opacity: 1;
}

@media (max-width: 480px) {
  .project-title,
  .project-description,
  .sub-items,
  .sub-item,
  .sub-item a {
    font-size: 16px;
  }

  .external-link-icon {
    width: 10px;
    height: 10px;
  }
}
</style>