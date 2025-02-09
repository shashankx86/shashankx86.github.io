<template>
  <div class="home-view">
    <div class="home-header">
      <h1>~/<span class="rotating-separator">✳</span></h1>
      <p>Hi, it's your friendly Linux nerd (arch, btw) Shashank, and I go by many alias — shashankx86, 0x5P, and nerd7</p>
      <p>Rust is my love, We shall unite comrades' 卐</p>
      <p>Pajama masterr!</p>
    </div>
    
    <div class="github-stats">
      <div class="stats-image-container">
        <img 
          src="https://raw.githubusercontent.com/shashankx86/github-stats/master/generated/overview.svg" 
          alt="Github Stats"
          class="stats-image"
          width="350"
          height="205"
          loading="lazy"
        />
      </div>
      <div class="stats-image-container">
        <img 
          src="https://raw.githubusercontent.com/shashankx86/github-stats/master/generated/languages.svg" 
          alt="Languages Stats"
          class="stats-image"
          width="350"
          height="205"
          loading="lazy"
        />
      </div>
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
  padding: 1rem;
  box-sizing: border-box;
}

.home-header {
  margin-bottom: 0.5rem;
}

.home-header h1 {
  margin-bottom: 1rem;
}

.home-header p {
  margin-bottom: 0.3rem;
}

.github-stats {
  display: flex;
  flex-direction: row; /* Changed to row for side-by-side on desktop */
  flex-wrap: wrap; /* Allows wrapping on smaller screens */
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  overflow-x: hidden;
  margin: 1rem 0;
}

.stats-image-container {
  width: 350px; /* Changed back to 350px */
  max-width: 100%;
  aspect-ratio: 350/205; /* Updated aspect ratio */
}

.stats-image {
  width: 100%;
  height: 100%;
  display: block;
}

.nav-links {
  line-height: 1.6;  
  word-wrap: break-word;
  margin-top: 0.5rem;  
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

@media (max-width: 768px) {
  .github-stats {
    flex-direction: column; /* Stack images on mobile */
    align-items: flex-start;
  }

  .stats-image-container {
    width: 100%;
    max-width: 350px; /* Updated max-width */
  }

  .stats-image {
    max-width: 100%;
  }
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

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.rotating-separator {
  display: inline-block;
  animation: rotate 3s linear infinite;
  transform-origin: center;
  font-size: 40px;
  position: relative;
  top: 6px; 
  margin-left: 2px; 
}
</style>