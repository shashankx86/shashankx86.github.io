<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentPath = computed(() => route.path)
</script>

<template>
  <nav class="navbar">
    <div class="nav-path">
      <router-link to="/" class="navbar-brand">~/</router-link>
      <template v-if="currentPath !== '/'">
        <span class="nav-separator">::</span>
        <router-link :to="currentPath">{{ currentPath }}</router-link>
      </template>
    </div>
  </nav>
</template>
