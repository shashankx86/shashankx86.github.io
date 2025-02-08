<script setup lang="ts">
</script>

<template>
  <div class="not-found-view">
    <div class="not-found-content">
      <div class="error-code gradient-text">404!</div>
      <div class="error-text">Page not found.</div>
    </div>
  </div>
</template>

<style scoped>
.not-found-view {
  width: 100%;
  height: calc(100vh - var(--navbar-height));
  display: flex;
  justify-content: center;
  align-items: center;
}

.not-found-content {
  text-align: center;
}

.error-code {
  font-size: 6rem;
  font-weight: bold;
}

.gradient-text {
  background: linear-gradient(
    300deg,
    #000000,
    #4a9eff,
    #ff4a4a,
    #4a9eff,
    #000000
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradient 5s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.error-text {
  font-size: 1.2rem;
  color: #808080;
  margin-top: -1rem;
}

@media (max-width: 480px) {
  .error-code {
    font-size: 4rem;
  }
  
  .error-text {
    font-size: 1rem;
    margin-top: -0.5rem;
  }
}
</style>