/// <reference types="vite/client" />

declare module '*.json' {
  const value: any
  export default value
}

// Add router meta type
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title: string
  }
}
