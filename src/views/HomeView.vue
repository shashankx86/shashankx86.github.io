<script setup lang="ts">
import '../assets/home.css'
</script>

<template>
  <div class="home">
    <div class="content-container">
      <div class="home-header">
        <h1>~/0x00</h1>
        <p>Hi, it's your friendly Linux nerd (arch, btw). My name is Shashank, and I go by many alias — shashankx86, 0x5P, and nerd7</p><p>I love Linux, and Rust is my love. We shall unite comrades' 卐</p>
      </div>
      <div class="nav-links">
        <router-link to="/projects" class="special-link">~/projects</router-link> - see my supaar projects<br>
        <router-link to="/blog" class="special-link">~/blog</router-link> - to read my civilised rant & some juicy tech info<br>
        <a href="https://github.com/shashankx86" target="_blank" rel="noopener" class="special-link">~/github</a> - my github profile :)<br>
        <a href="https://anilist.co/user/nerd7" target="_blank" rel="noopener" class="special-link">~/anilist</a> - PRAISE THE FOOL
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-links {
  margin-top: 1rem;
  line-height: 1.5;
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
</style>
