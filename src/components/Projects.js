import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Portfolio Website</h3>
        <p>A personal website to showcase my projects, skills, and contact information.</p>
      </div>
      <div className="project">
        <h3>Todo App</h3>
        <p>A simple to-do list app with CRUD operations and local storage.</p>
      </div>
    </section>
  );
}

export default Projects;
