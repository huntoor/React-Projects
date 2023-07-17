import PropTypes from 'prop-types';
import React from 'react';

import { Project } from "./Project";
import ProjectCard from './ProjectCard';
import ProjectFrom from './ProjectFrom';


function ProjectList({ projects }) {
  const items = projects.map((project) => {
    return (
      <div key={project.id} className='cols-sm'>
        <ProjectCard project={ project } />
        <ProjectFrom />
      </div>
    );
  });

  return <div className="row">{items}</div>;
}
ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired
};

export default ProjectList;