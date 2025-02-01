<template>
    <section id="projects">
      <h2>Projects</h2>
      <p class="projects-intro">Here are the latest three projects I have been working on.</p>
      <div class="projects-container">
        <div
          v-for="project in projects"
          :key="project.id"
          class="project"
        >
          <h3>
            {{ project.title }}
            <span v-if="project.private" class="private-label">(Private)</span>
          </h3>
          <p>{{ project.description }}</p>
          <span class="tech">{{ project.tech }}</span>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const projects = [
    {
      id: 1,
      title: "Path to Mastery",
      description:
        "The digital reflection of my journey—building a life guided by principles of discipline, authenticity, and deliberate practice.",
      tech: "Vue.js",
      private: true,
    },
    {
      id: 2,
      title: "Financial Health Scorecard Dashboard",
      description:
        "People often don’t know where they stand financially and rely on basic tools like spreadsheets or banking apps for a fragmented view.",
      tech: "Python, and React",
      private: false,
    },
    {
      id: 3,
      title: "Google Calendar API Python Project",
      description:
        "A project integrating Google Calendar API to automate scheduling and reminders.",
      tech: "Python",
      private: false,
    },
  ];
  </script>
  
  <style scoped>
  #projects {
    padding: 20px;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }
  
  #projects h2 {
    margin-bottom: 10px;
  }
  
  .projects-intro {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 30px;
  }
  
  .projects-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .project {
    margin-bottom: 40px;
    padding: 20px;
    border-radius: 12px;
    background-color: #ffffff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    perspective: 1000px;
  }
  
  .project:hover {
    transform: translateY(-10px) scale(1.05) rotateX(5deg);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
  
  .project h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #333;
  }
  
  .private-label {
    font-size: 1rem;
    color: #e74c3c;
    margin-left: 10px;
  }
  
  .project p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 10px;
  }
  
  .tech {
    display: inline-block;
    background: #f0f0f0;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 0.9rem;
    color: #333;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }
  
  /* Dark Mode Styles */
  .dark .projects-intro {
    color: #cccccc;
  }
  
  .dark .project {
    background-color: #1e1e1e;
  }
  
  .dark .project h3 {
    color: #ffffff;
  }
  
  .dark .project p {
    color: #cccccc;
  }
  
  .dark .tech {
    background: #333;
    color: #ffffff;
  }
  </style>
