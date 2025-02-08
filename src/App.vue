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
</style>