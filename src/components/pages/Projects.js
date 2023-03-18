import React from "react";
import { projects } from "./data";
import ProjectPage from "./ProjectPage";
import Grid from '@mui/material/Grid';

const Projects = () => {

  return (
      <div>
        <h2 className="mainHeading">Please see my past work</h2>
        <Grid container spacing={6}>
          <Grid item>
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
      </Grid>
      </Grid>
      </div>
  );
};

export default Projects;

