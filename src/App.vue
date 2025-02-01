<template>
  <div id="app" :class="{ dark: isDark }">
    <Header :isDark="isDark" @toggleDarkMode="toggleDarkMode" />
    <main>
      <section id="about">
        <h1 class="title">Hi, I'm Jerôme, Fullstack Developer.</h1>
        <p class="subtitle">
          build elegant, scalable software that bridges creativity with technology. Off the screen, I run, work out, read, and dive into personal projects—drawing inspiration from history and the relentless pursuit of self-improvement.
        </p>
        <!-- Steve Jobs-style integration of the portrait -->
        <div class="profile-container">
          <img src="./assets/profile.jpg" alt="Portrait of Jerôme" class="profile-image" />
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div class="project">
          <h3>Path to Mastery <span class="private-label">(Private)</span></h3>
          <p>
            The digital reflection of my journey—building a life guided by principles of discipline, authenticity, and
            deliberate practice.
          </p>
          <span class="tech">Vue.js</span>
        </div>

        <div class="project">
          <h3>Financial Health Scorecard Dashboard</h3>
          <p>
            People often don’t know where they stand financially and rely on basic tools like spreadsheets or banking
            apps for a fragmented view.
          </p>
          <span class="tech">Python, and React</span>
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
          Email: <a href="mailto:mapacherama@gmail.com">mapacherama@gmail.com</a>
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
/* About Section Styles */
#about {
  text-align: center;
  padding: 40px 20px;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.25rem;
  margin-bottom: 40px;
  color: #666;
}

/* Profile Image Container */
.profile-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

/* Profile Image Styling */
.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

/* Optional: A subtle hover effect to add life without distraction */
.profile-image:hover {
  transform: scale(1.05);
}

body {
  font-family: 'San Francisco', 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.8;
  transition: background-color 0.3s, color 0.3s;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: #fdfdfd;
  color: #333;
}

main {
  padding: 60px;
  margin: 0 auto;
  max-width: 800px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

h1,
h2,
h3 {
  font-weight: 600;
}

.title {
  font-size: 2.8em;
  font-weight: 700;
  margin-bottom: 15px;
  letter-spacing: -0.5px;
}

.subtitle {
  font-size: 1.4em;
  font-weight: 400;
  color: #555;
}

.project {
  border: none;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  transition: transform 0.2s ease-in-out;
}

.project:hover {
  transform: translateY(-5px);
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
