<script setup lang="ts">
import './assets/base.css'
import './assets/app.css'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentPath = computed(() => route.path)
</script>

<template>
  <div class="app-container">
    <nav class="navbar">
      <div class="nav-path">
        <router-link to="/" class="navbar-brand">~/</router-link>
        <template v-if="currentPath !== '/'">
          <span class="nav-separator">∘</span>
          <router-link :to="currentPath">{{ currentPath }}</router-link>
        </template>
      </div>
    </nav>
    <main>
      <div class="content-container">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  height: 100vh;
  overflow: hidden;
}

.nav-path {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-separator {
  color: #ffffff;
  opacity: 0.5;
  user-select: none;
}

a {
  color: #ffffff;
  text-decoration: none;
}

.projects-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 18px;
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
  margin: 0;
}

.project-description {
  display: block;
  margin: 0; 
  color: var(--color-text);
  opacity: 0.8;
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