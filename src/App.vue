<!-- App.vue -->
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
import { ref, watchEffect } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const isDark = ref(false);

function toggleDarkMode() {
  isDark.value = !isDark.value;
}

watchEffect(() => {
  if (isDark.value) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});
</script>
