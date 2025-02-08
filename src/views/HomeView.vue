<template>
  <div class="home-view">
    <div class="home-header">
      <h1>~/0x00</h1>
      <p>Hi, it's your friendly Linux nerd (arch, btw) Shashank, and I go by many alias — shashankx86, 0x5P, and nerd7</p>
      <p>Rust is my love, We shall unite comrades' 卐</p>
      <p>Pajama masterr!</p>
    </div>
    
    <div class="github-stats">
      <img 
        src="https://github-readme-stats.vercel.app/api?username=shashankx86&theme=dark&show_icons=true&hide_border=true&count_private=true" 
        alt="GitHub Stats"
        class="stats-image"
        loading="lazy"
      />
      <img 
        src="https://github-readme-streak-stats.herokuapp.com/?user=shashankx86&theme=dark&hide_border=true" 
        alt="GitHub Streak Stats"
        class="stats-image"
        loading="lazy"
      />
      <img 
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=shashankx86&theme=dark&show_icons=true&hide_border=true&layout=compact" 
        alt="Top Languages"
        class="stats-image"
        loading="lazy"
      />
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
  flex-direction: column;
  align-items: flex-start; 
  gap: 0.5rem;
  overflow-x: hidden;
}

.stats-image {
  max-width: 350px; 
  width: 100%;
  height: auto;
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
  .stats-image {
    max-width: 400px;
  }
}

@media (max-width: 480px) {
  .home-view {
    padding: 0.75rem;
  }

  .stats-image {
    max-width: 100%; 
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