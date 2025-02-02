<template>
    <header :class="{ dark: isDark }">
        <h1><a href="/" class="subtle-link">My Portfolio</a></h1>
      <nav>
        <ul>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <!-- Social Icons -->
      <div class="social-links">
        <a href="https://github.com/Mapacherama" target="_blank" rel="noopener noreferrer">
          <!-- GitHub Icon -->
          <svg height="24" width="24" viewBox="0 0 16 16" aria-hidden="true">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 
              0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 
              1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 
              0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82a7.62 7.62 0 012-.27 7.62 7.62 
              0 012 .27c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.28.82 2.15 
              0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 
              .21.15.46.55.38A8 8 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </a>
        <a href="https://www.instagram.com/mapacherama/" target="_blank" rel="noopener noreferrer">
          <!-- Instagram Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 
              5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 
              4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 
              7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a1.25 
              1.25 0 110 2.5 1.25 1.25 0 010-2.5z"
            ></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/jerome-tesselaar/" target="_blank" rel="noopener noreferrer">
          <!-- LinkedIn Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 
              1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.16h.06c.53-1 1.82-2.06 
              3.75-2.06 4.01 0 4.75 2.64 4.75 6.07V24h-4v-7.11c0-1.7-.03-3.88-2.38-3.88-2.38 
              0-2.74 1.86-2.74 3.77V24h-4V8z"
            ></path>
          </svg>
        </a>
      </div>
    </header>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  header {
    position: relative;
    background-color: #2c3e50;
    color: #ecf0f1;
    padding: 20px;
    text-align: center;
  }
  
  nav ul {
    list-style: none;
    padding: 0;
  }
  
  nav ul li {
    display: inline;
    margin: 0 15px;
  }
  
  nav ul li a {
    color: #ecf0f1;
    text-decoration: none;
  }

  .subtle-link {
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  transition: opacity 0.3s;
}

.subtle-link:hover {
  opacity: 0.7;
}
  
  /* Social links styling */
  .social-links {
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
    gap: 10px;
  }
  
  .social-links a {
    color: #ecf0f1;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .social-links a:hover {
    color: #f39c12;
  }
  </style>
  