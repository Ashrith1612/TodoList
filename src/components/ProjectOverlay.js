import React, { useState } from 'react';

export const ProjectOverlay = ({
  projects,
  setProject,
  showOverlay,
  setShowOverlay,
}) =>
  projects &&
  showOverlay && (
    <div className="project-overlay">
      <ul className="project-overlay__list">
        {projects.map(project => (
          <li
            key={project.projectId}
            onClick={() => {
              setProject(project.projectId);
              setShowOverlay(false);
            }}
          >
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
