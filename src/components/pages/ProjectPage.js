import React from 'react';
import PropTypes from 'prop-types';

const ProjectPage = ({ description, imageUrl, title, repoLink }) => {
    console.log(imageUrl)
    console.log(repoLink)
  return (
    <div className="card-container">

      <div data-custom-attribute="true">
     
   
      </div>
      <div className="card-body">
        
        <h1>{title}</h1>
        <h3>{description}</h3>
          <img src={imageUrl} alt={title} /> 
          <a href={`${repoLink}`}>Visit repo link</a> 
      </div>
    </div>
  );
};

ProjectPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  repoLink: PropTypes.string,
};

export default ProjectPage;