import React from "react";
import { projects } from "./data";
import ProjectPage from "./ProjectPage";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Project.css';


const Projects = () => {

  return (
   
    <Box sx={{ width: '100%', textAlign: 'center' }}>

       <Typography variant="h3" mt={10} md={10} gutterBottom>
       Please see my past work
    </Typography> 
    <div className='grid-container'>
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
    </Box>
  );
};

export default Projects;

