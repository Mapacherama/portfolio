<!-- App.vue -->
<template>
  <v-app>
    <v-main>
      <HomePage />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
import AppFooter from './components/AppFooter.vue';
import HomePage from './pages/HomePage.vue';
</script>
