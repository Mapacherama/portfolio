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
import { ref, watchEffect, onMounted } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

// Create a reactive dark mode state.
const isDark = ref(false);

onMounted(() => {
  const storedMode = localStorage.getItem('darkMode');
  if (storedMode !== null) {
    isDark.value = JSON.parse(storedMode);
  }
});

function toggleDarkMode() {
  isDark.value = !isDark.value;
}

watchEffect(() => {
  localStorage.setItem('darkMode', JSON.stringify(isDark.value));
  if (isDark.value) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});
</script>
