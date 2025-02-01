<template>
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <!-- Dark mode toggle button -->
      <button class="dark-mode-toggle" @click="toggleDarkMode">
        <span v-if="isDark">🌞</span>
        <span v-else>🌙</span>
      </button>
    </header>
  </template>
  
  <script setup>
  const props = defineProps({
    isDark: {
      type: Boolean,
      default: false,
    },
  });
  
  const emit = defineEmits(['toggleDarkMode']);
  
  function toggleDarkMode() {
    emit('toggleDarkMode');
  }
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
  
  /* Style for the dark mode toggle button */
  .dark-mode-toggle {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
  </style>
  