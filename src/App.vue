<template>
  <v-app :class="{ dark: isDark }">
    <Header :isDark="isDark" @toggleDarkMode="toggleDarkMode" />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

// Reactive dark mode state
const isDark = ref(false);

// On mount, load the dark mode setting from localStorage
onMounted(() => {
  const storedMode = localStorage.getItem('darkMode');
  if (storedMode !== null) {
    isDark.value = JSON.parse(storedMode);
  }
});

// Function to toggle dark mode state
function toggleDarkMode() {
  isDark.value = !isDark.value;
}

// Persist dark mode changes and update global styling
watchEffect(() => {
  localStorage.setItem('darkMode', JSON.stringify(isDark.value));
  if (isDark.value) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});
</script>
