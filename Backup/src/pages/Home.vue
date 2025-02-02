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
        <h2 class="title">My Project Journey</h2>
        
        <div class="projects-grid">
          <div 
            v-for="(project, index) in projects" 
            :key="project.id" 
            class="project-card"
            @click="openModal(project)"
          >
            <h3>{{ project.name }}</h3>
            <span class="tech">{{ project.language || "Unknown Tech" }}</span>
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
      .slice(0, 5);
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
  }
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
#about, #projects {
  text-align: center;
  padding: 40px;
  color: #121212;
  background-color: transparent;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

.title {
  font-size: 2rem;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 1.25rem;
  color: #333;
}

.profile-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-content: center;
}

.project-card {
  padding: 20px;
  background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background 0.3s ease-in-out;
  cursor: pointer;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.project-card:hover {
  transform: scale(1.1) rotate(-2deg);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  width: 400px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  color: #121212;
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
</style>
