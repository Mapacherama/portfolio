<template>
  <!-- Bind the "dark" class based on the isDark state -->
  <div id="app" :class="{ dark: isDark }">
    <!-- Pass the current state and listen for the toggle event -->
    <Header :isDark="isDark" @toggleDarkMode="toggleDarkMode" />
    <main>
      <section id="about">
        <h2>I am Jerôme.</h2>
        <p>
          Fullstack developer, and passionate about technology.
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div class="project">
          <h3>Project Title</h3>
          <p>
            A brief description of the project, highlighting the blend of creative innovation and precise engineering.
          </p>
        </div>
        <!-- Additional projects can be modularized further as your portfolio grows -->
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:you@example.com">you@example.com</a>
        </p>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

// Reactive state for dark mode
const isDark = ref(false);

function toggleDarkMode() {
  isDark.value = !isDark.value;
}

// Watch for changes in dark mode and apply to body element
watchEffect(() => {
  if (isDark.value) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});
</script>

<style>
/* Global styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
  transition: background-color 0.3s, color 0.3s; /* Smooth transition */
}

/* Light mode (default) styling */
body {
  background-color: #fdfdfd;
  color: #333;
}

main {
  padding: 20px;
  margin: 10px auto;
  max-width: 800px;
}

section {
  margin-bottom: 40px;
}

.project {
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 4px;
}

/* Dark mode styling applied to body */
body.dark {
  background-color: #121212;
  color: #fdfdfd;
}

/* Ensure all sections maintain readability */
.dark section {
  background-color: transparent;
}

.dark .project {
  background-color: #1e1e1e;
  border: 1px solid #444;
  color: #ffffff;
}

.dark .project h3 {
  color: #f8f8f8;
}

.dark .project p {
  color: #d1d1d1;
}

.dark a {
  color: #bb86fc;
}

.dark header {
  background-color: #1e1e1e;
}
</style>
