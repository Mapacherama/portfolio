<template>
  <div id="app" :class="{ dark: isDark }">
    <Header :isDark="isDark" @toggleDarkMode="toggleDarkMode" />
    <main>
      <section id="about">
        <h1 class="title">I am Jerôme.</h1>
        <p class="subtitle">Fullstack developer, and passionate about technology.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div class="project">
          <h3>Path to Mastery <span class="private-label">(Private)</span></h3>
          <p>
            The digital reflection of my journey—building a life guided by principles of discipline, authenticity, and deliberate practice.
          </p>
          <span class="tech">JavaScript</span>
        </div>
        
        <div class="project">
          <h3>Financial Health Scorecard Dashboard</h3>
          <p>
            People often don’t know where they stand financially and rely on basic tools like spreadsheets or banking apps for a fragmented view.
          </p>
          <span class="tech">Python</span>
        </div>
        
        <div class="project">
          <h3>Google Calendar API Python Project</h3>
          <p>
            A project integrating Google Calendar API to automate scheduling and reminders.
          </p>
          <span class="tech">Python</span>
        </div>
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

<style>
body {
font-family: 'Inter', sans-serif;
margin: 0;
padding: 0;
line-height: 1.6;
transition: background-color 0.3s, color 0.3s;
}

body {
background-color: #fdfdfd;
color: #333;
}

main {
padding: 40px;
margin: 0 auto;
max-width: 900px;
text-align: center;
}

.title {
font-size: 2.5em;
font-weight: 700;
margin-bottom: 10px;
}

.subtitle {
font-size: 1.2em;
font-weight: 400;
color: #555;
}

.project {
border: 1px solid #ccc;
padding: 20px;
margin-bottom: 20px;
border-radius: 6px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
background-color: #ffffff;
text-align: left;
}

.tech {
display: block;
font-size: 0.9em;
color: #888;
margin-top: 5px;
}

.private-label {
font-size: 0.8em;
color: #c00;
font-weight: bold;
}

body.dark {
background-color: #121212;
color: #fdfdfd;
}

.dark .title {
color: #ffffff;
}

.dark .subtitle {
color: #bbbbbb;
}

.dark .project {
background-color: #1e1e1e;
border: 1px solid #444;
color: #ffffff;
}

.dark .tech {
color: #bbb;
}

.dark a {
color: #bb86fc;
}

.dark header {
background-color: #1e1e1e;
}
</style>
