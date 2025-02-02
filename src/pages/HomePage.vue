<template>
  <div id="app">
    <main>
      <section id="about">
        <h1 class="title">Hi, I'm Jerôme, Fullstack Developer.</h1>
        <p class="subtitle">
          I build elegant, scalable software that bridges creativity with technology. 
          Off the screen, I run, work out, read, and dive into personal projects—drawing 
          inspiration from history and the relentless pursuit of self-improvement.
        </p>
        <div class="profile-container">
          <img src="../assets/profile.jpg" alt="Portrait of Jerôme" class="profile-image" />
        </div>
      </section>
      
      <section id="projects">
        <h2 class="title">My Latest Projects</h2>
        
        <div class="projects-grid">
          <div 
            v-for="(project, index) in projects" 
            :key="project.id" 
            class="project-card"
            @click="openModal(project)"
          >
            <h3>{{ project.name }}</h3>
            <span class="tech">{{ project.language || "Unknown Tech" }}</span>
            <p class="updated-text">Last updated: {{ formatDate(project.updated_at) }}</p>
          </div>
        </div>
    
        <div v-if="selectedProject" class="modal-overlay" @click="closeModal">
          <div class="modal-content" @click.stop>
            <h3>{{ selectedProject.name }}</h3>
            <p>{{ selectedProject.description || "No description available" }}</p>
            <a :href="selectedProject.html_url" target="_blank" class="project-link">View on GitHub</a>
            <button class="close-btn" @click="closeModal">✖ Close</button>
          </div>
        </div>
      </section>
      <!-- 🔥 New Socials Section -->
      <section id="socials">
        <h2 class="title">Find me on</h2>
        <div class="social-icons">
          <a href="https://github.com/Mapacherama" target="_blank" class="social-link">
            <v-icon>mdi-github</v-icon>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/jerome-tesselaar/" target="_blank" class="social-link">
            <v-icon>mdi-linkedin</v-icon>
            LinkedIn
          </a>
          <a href="https://www.instagram.com/mapacherama/" target="_blank" class="social-link">
            <v-icon>mdi-instagram</v-icon>
            Instagram
          </a>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const projects = ref([]);
const selectedProject = ref(null);

const fetchProjects = async () => {
  try {
    const response = await fetch('https://api.github.com/users/Mapacherama/repos?sort=updated');
    const data = await response.json();
    
    projects.value = data
      .filter(repo => !repo.fork)
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, 5);
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
  }
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const openModal = (project) => {
  selectedProject.value = project;
};

const closeModal = () => {
  selectedProject.value = null;
};

onMounted(fetchProjects);
</script>

<style scoped>
/* General Page Styling */
#about, #projects, #socials {
  text-align: center;
  padding: 30px 15px;
  color: #f5f5f5;
  background-color: #121212;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

/* Typography Improvements */
.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #ffffff; /* Higher contrast */
}

.subtitle {
  font-size: 1.2rem;
  line-height: 1.4;
  max-width: 800px;
  margin: 0 auto;
  color: #dddddd; /* Lighter gray for better readability */
}

/* Profile Section */
.profile-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.profile-image {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-content: center;
}

.project-card {
  padding: 20px;
  background: linear-gradient(135deg, #3a3a3a, #555);
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background 0.3s ease-in-out;
  cursor: pointer;
  text-align: center;
  position: relative;
  overflow: hidden;
  color: #fff;
}

.project-card:hover {
  transform: scale(1.05);
  background: linear-gradient(135deg, #444, #666);
}

/* Modal Styling */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #1e1e1e;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  width: 400px;
  color: #ffffff;
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  align-items: center;
}

.project-link {
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  color: #42a5f5;
}

.close-btn {
  margin-top: 15px;
  padding: 10px 15px;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 1rem;
}

.close-btn:hover {
  background: #c0392b;
}
/* Socials Section */
.social-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.2rem;
  color: #ffffff;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 15px;
  border-radius: 8px;
  transition: background 0.3s ease;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Updated text styling for last updated date */
.updated-text {
  font-size: 0.9rem;
  color: #bbbbbb;
  margin-top: 5px;
}
</style>
