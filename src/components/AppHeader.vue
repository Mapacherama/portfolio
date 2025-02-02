<template>
    <v-app-bar color="primary" app>
      <v-container class="d-flex align-center justify-space-between">
        <v-btn to="/" text class="text-h6 text-uppercase font-weight-bold">
          My Portfolio

        </v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn to="/projects" text>Projects</v-btn>
        <v-btn to="/contact" text>Contact</v-btn>
  
        <!-- Social Icons -->
        <v-btn icon href="https://github.com/Mapacherama" target="_blank" rel="noopener noreferrer">
          <v-icon>mdi-github</v-icon>
        </v-btn>
  
        <v-btn icon href="https://www.instagram.com/mapacherama/" target="_blank" rel="noopener noreferrer">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
  
        <v-btn icon href="https://www.linkedin.com/in/jerome-tesselaar/" target="_blank" rel="noopener noreferrer">
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>
  </template>

<style scoped>
header {
  position: relative;
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 20px;
  text-align: center;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin: 0 15px;
}

nav ul li a {
  color: #ecf0f1;
  text-decoration: none;
}

.subtle-link {
text-decoration: none;
color: inherit;
font-weight: bold;
transition: opacity 0.3s;
}

.subtle-link:hover {
opacity: 0.7;
}

/* Social links styling */
.social-links {
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  gap: 10px;
}

.social-links a {
  color: #ecf0f1;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #f39c12;
}
</style>