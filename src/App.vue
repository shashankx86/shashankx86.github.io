<script setup lang="ts">
import './assets/base.css'
import './assets/app.css'
import { computed, ref, type ComputedRef } from 'vue'
import { onMounted, onUnmounted } from 'vue'
import { useRoute, type RouteLocationNormalizedLoaded } from 'vue-router'
import { SpeedInsights } from '@vercel/speed-insights/vue';

const route: RouteLocationNormalizedLoaded = useRoute()
const currentPath: ComputedRef<string> = computed(() => route.path)
const isMenuOpen = ref(false)

const pathSegments: ComputedRef<string[]> = computed(() => {
  return route.path.split('/').filter(segment => segment !== '')
})

const getPathUpToSegment = (index: number): string => {
  return '/' + pathSegments.value.slice(0, index + 1).join('/')
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Close menu when clicking outside
const closeMenu = (event: MouseEvent) => {
  const menu = document.querySelector('.menu')
  const dots = document.querySelector('.dots')
  if (menu && !menu.contains(event.target as Node) && !dots?.contains(event.target as Node)) {
    isMenuOpen.value = false
  }
}

// Add event listener when component is mounted
onMounted(() => {
  document.addEventListener('click', closeMenu)
})

// Remove event listener when component is unmounted
onUnmounted(() => {
  document.removeEventListener('click', closeMenu)
})

const currentTime = ref('')
const currentDate = ref('')

const updateDateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString('en-US', { 
    hour12: false,
    hour: '2-digit',
    minute: '2-digit'
  })
  currentDate.value = now.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

onMounted(() => {
  updateDateTime()
  const timer = setInterval(updateDateTime, 1000)
  onUnmounted(() => clearInterval(timer))
})

const formatTime = (time: string) => {
  const [hours, minutes] = time.split(':')
  const hour = parseInt(hours)
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const hour12 = hour % 12 || 12
  return `${hour12}:${minutes} ${ampm}`
}

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>

<template>
  <div class="app-container">
    <nav class="navbar">
      <div class="nav-path">
        <div class="dots-container">
          <span 
            class="dots" 
            @click="toggleMenu"
            :class="{ 'vertical': isMenuOpen }"
          >{{ isMenuOpen ? '⋮' : '⋯' }}</span>
          <div v-if="isMenuOpen" class="menu">
            <div class="menu-grid">
              <div class="menu-box github">
                <div class="copy-button" @click="copyToClipboard('https://github.com/shashankx86/shashankx86.github.io.git')">
                  <svg class="copy-icon" viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M16 1H4C2.9 1 2 1.9 2 3v14h2V3h12V1zm3 4H8C6.9 5 6 5.9 6 7v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                  </svg>
                </div>
                <a href="https://github.com/shashankx86/shashankx86.github.io.git" target="_blank" rel="noopener">
                  <div class="icon-container">
                    <svg class="icon" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                    <span class="label">Source Code</span>
                  </div>
                </a>
              </div>
              <div class="menu-box email">
                <div class="copy-button" @click="copyToClipboard('shashankspis20@gmail.com')">
                  <svg class="copy-icon" viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M16 1H4C2.9 1 2 1.9 2 3v14h2V3h12V1zm3 4H8C6.9 5 6 5.9 6 7v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                  </svg>
                </div>
                <a href="mailto:shashankspis20@gmail.com">
                  <div class="icon-container">
                    <svg class="icon" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <span class="label">Mail</span>
                  </div>
                </a>
              </div>
              <div class="menu-box datetime">
                <div class="time">{{ formatTime(currentTime) }}</div>
                <div class="date">{{ currentDate }}</div>
              </div>
            </div>
          </div>
        </div>
        <span class="separator">&lt;&gt;</span>
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
  <SpeedInsights />
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
  gap: 0.3rem;
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

.dots-container {
  position: relative;
  display: inline-block;
}

.dots {
  color: #ffffff;
  font-size: 1.2rem;
  user-select: none;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.dots.vertical {
  transform: rotate(90deg);
}

.menu {
  position: absolute;
  top: calc(100% - 5.5px);
  background: #111111;
  border: 1px solid #333333;
  border-radius: 4px;
  padding: 0.3rem;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  width: 240px;
}

.menu-grid {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 0.5rem;
  height: 205px;
}

.menu-box {
  position: relative;
  background: #1a1a1a;
  border-radius: 4px;
  border: 1px solid #444444; /* Add this line for grey borders */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.menu-box:hover {
  background: #222222;
}

.github, .email {
  height: 97px;
}

.datetime {
  grid-column: 2;
  grid-row: 1 / span 2;
  height: calc(100% - 2px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 24px;
  height: 24px;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.menu-box:hover .icon {
  opacity: 1;
}

.time {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.date {
  font-size: 1rem;
  opacity: 0.8;
}

.menu-box a {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0.5rem 1rem;
  color: #ffffff;
  text-decoration: none;
  transition: background-color 0.2s;
}

.menu-item:hover {
  background-color: #222222;
}

.external-link-icon {
  opacity: 0.7;
}

.menu-item:hover .external-link-icon {
  opacity: 1;
}

.dots {
  color: #ffffff;
  font-size: 1.2rem;
  user-select: none;
}

.separator {
  color: #ffffff;
  opacity: 0.5;
  margin: 0 0.3rem;
  user-select: none;
}

.copy-button {
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s;
  z-index: 2;
}

.copy-button:hover {
  opacity: 1;
}

.copy-icon {
  color: #ffffff;
}

.icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.label {
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>