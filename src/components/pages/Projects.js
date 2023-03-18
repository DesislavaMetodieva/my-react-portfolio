import React from "react";
import { projects } from "./data";
import ProjectPage from "./ProjectPage";

const Projects = () => {

  return (
      <div>
        <h2 className="mainHeading">Please see my past work</h2>
      {projects.map((project) => (
        <ProjectPage
          key={project.id}
          title={project.title}
          description={project.description}
          imageUrl={project.image}
          repoLink={project.repoLink}
          appLink={project.link}
        />
      ))}
      </div>
  );
};

export default Projects;

