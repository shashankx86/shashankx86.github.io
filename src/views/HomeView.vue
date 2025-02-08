<script setup lang="ts">
// No need to import home.css anymore
</script>

<template>
  <div class="home-view">
    <div class="home-header">
      <h1>~/0x00</h1>
      <p>Hi, it's your friendly Linux nerd (arch, btw). My name is Shashank, and I go by many alias — shashankx86, 0x5P, and nerd7</p>
      <p>I love Linux, and Rust is my love. We shall unite comrades' 卐</p>
    </div>
    <div class="nav-links">
      <router-link to="/projects" class="special-link">~/projects</router-link> - see my supaar projects<br>
      <router-link to="/blog" class="special-link">~/blog</router-link> - to read my civilised rant & some juicy tech info<br>
      <a href="https://github.com/shashankx86" target="_blank" rel="noopener" class="special-link">~/github</a> - my github profile :)<br>
      <a href="https://anilist.co/user/nerd7" target="_blank" rel="noopener" class="special-link">~/anilist</a> - PRAISE THE FOOL
    </div>
  </div>
</template>

<style scoped>
.home-view {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  padding: 1rem;
  box-sizing: border-box;
}

.home-header {
  margin-bottom: 2rem;
}

.home-header h1 {
  margin-bottom: 1rem;
}

.home-header p {
  margin-bottom: 0.5rem;
}

.nav-links {
  line-height: 1.8;
  word-wrap: break-word;
}

.special-link {
  color: rgb(96 165 250);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-bottom-color 0.2s;
}

.special-link:hover {
  border-bottom-color: rgb(96 165 250);
}

@media (max-width: 480px) {
  .home-view {
    padding: 0.75rem;
  }

  .nav-links {
    font-size: 0.9rem;
    line-height: 1.6;
  }
  
  .home-header h1 {
    font-size: 1.5rem;
  }
  
  .home-header p {
    font-size: 0.9rem;
  }
}
</style>
