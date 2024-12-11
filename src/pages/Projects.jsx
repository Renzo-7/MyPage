// src/pages/Projects.js
import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const proyectos = [
    {
      id: 1,
      title: "Proyecto 1",
      description: "Descripción del Proyecto 1",
      image: "/path/to/image1.jpg",
    },
    {
      id: 2,
      title: "Proyecto 2",
      description: "Descripción del Proyecto 2",
      image: "/path/to/image2.jpg",
    },
    // Agrega más proyectos aquí
  ];

  return (
    <div>
      <h2>Mis Proyectos</h2>
      <div className="project-grid">
        {proyectos.map((proyecto) => (
          <ProjectCard key={proyecto.id} {...proyecto} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
