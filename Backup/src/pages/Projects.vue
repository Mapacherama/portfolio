<template>
  <section id="projects">
    <h2 class="title">My Project Journey</h2>
    
    <!-- Project Grid -->
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

    <!-- Project Modal -->
    <div v-if="selectedProject" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h3>{{ selectedProject.name }}</h3>
        <p>{{ selectedProject.description || "No description available" }}</p>
        <a :href="selectedProject.html_url" target="_blank" class="project-link">View on GitHub</a>      
        <button class="close-btn" @click="closeModal">Close</button>  
      </div>     
    </div>
  </section>
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
      .filter(repo => !repo.fork) // Exclude forks
      .slice(0, 5); // Limit to latest 5 projects
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
/* General styles */
#projects {
  text-align: center;
  padding: 40px;
  background-color: #121212;
  color: #fff;
}

.title {
  font-size: 2rem;
  margin-bottom: 20px;
}

/* Project Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-content: center;
}

.project-card {
  padding: 20px;
  background: linear-gradient(135deg, #1e1e1e, #292929);
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background 0.3s ease-in-out;
  cursor: pointer;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.project-card:hover {
  transform: scale(1.1) rotate(-2deg);
  box-shadow: 0 10px 25px rgba(0, 255, 255, 0.5);
  background: linear-gradient(135deg, #292929, #1e1e1e);
}

.project-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.2), transparent 60%);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.project-card:hover::before {
  opacity: 1;
}

.tech {
  display: inline-block;
  margin-top: 10px;
  padding: 6px 12px;
  background: #333;
  color: #fff;
  border-radius: 6px;
}

/* Modal Styles */
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
}

.modal-content {
  background: #1e1e1e;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  width: 400px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  position: relative;
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
