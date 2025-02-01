<template>
    <section id="projects">
      <h2>Projects</h2>
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
    max-width: 800px;
    margin: 0 auto;
  }
  
  #projects h2 {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .project {
    margin-bottom: 40px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fafafa;
  }
  
  .project h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
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
    background: #e0e0e0;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.9rem;
    color: #333;
  }
  </style>
  