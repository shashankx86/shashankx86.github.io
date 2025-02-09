<script setup lang="ts">
import './assets/base.css'
import './assets/app.css'
import { computed, type ComputedRef } from 'vue'
import { useRoute, type RouteLocationNormalizedLoaded } from 'vue-router'

const route: RouteLocationNormalizedLoaded = useRoute()
const currentPath: ComputedRef<string> = computed(() => route.path)

// New computed property to get path segments
const pathSegments: ComputedRef<string[]> = computed(() => {
  return route.path.split('/').filter(segment => segment !== '')
})

// Generate path for each segment
const getPathUpToSegment = (index: number): string => {
  return '/' + pathSegments.value.slice(0, index + 1).join('/')
}
</script>

<template>
  <div class="app-container">
    <nav class="navbar">
      <div class="nav-path">
        <router-link to="/" class="navbar-brand">~/</router-link>
        <template v-if="currentPath !== '/'">
          <template v-for="(segment, index) in pathSegments" :key="index">
            <span class="nav-separator">::</span>
            <router-link :to="getPathUpToSegment(index)" class="path-segment">
              /{{ segment }}
            </router-link>
          </template>
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

.path-segment {
  transition: opacity 0.2s;
}

.path-segment:hover {
  opacity: 0.8;
}
</style>