<script setup lang="ts">
import './assets/base.css'
import './assets/app.css'
import { computed, type ComputedRef } from 'vue'
import { useRoute, type RouteLocationNormalizedLoaded } from 'vue-router'

const route: RouteLocationNormalizedLoaded = useRoute()
const currentPath: ComputedRef<string> = computed(() => route.path)
</script>

<template>
  <div class="app-container">
    <nav class="navbar">
      <div class="nav-path">
        <router-link to="/" class="navbar-brand">~/</router-link>
        <template v-if="currentPath !== '/'">
          <span class="nav-separator">::</span>
          <router-link :to="currentPath">{{ currentPath }}</router-link>
        </template>
      </div>
    </nav>
    <main>
      <div class="page-wrapper">
        <div class="content-area">
          <router-view></router-view>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.nav-path {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
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