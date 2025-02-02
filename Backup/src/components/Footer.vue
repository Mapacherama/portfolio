<template>
    <footer :class="{ dark: isDark }">
      <p>&copy; 2025 My Portfolio. Crafted with discipline and passion.</p>
    </footer>
  </template>
  
  <script setup>
  import { inject } from 'vue';

  // Get dark mode state from the parent
  const isDark = inject('isDark', false);
  </script>
  
  <style scoped>
  footer {
    background-color: #ecf0f1;
    text-align: center;
    padding: 10px;
    font-size: 0.9em;
    transition: background-color 0.3s, color 0.3s;
  }

  .dark footer {
    background-color: #1e1e1e;
    color: #fdfdfd;
  }
  </style>
