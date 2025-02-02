<!-- App.vue -->
<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
import AppFooter from './components/AppFooter.vue';
</script>
