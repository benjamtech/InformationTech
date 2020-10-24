import React, { useState } from "react";
import "./ProjectSelector.css";
import ProjectStore, { ProjectShape } from "./../ProjectStore";
import ProjectWrapper from "./ProjectWrapper";

export default () => {
  // Project can be one of the projects in ProjectStore of null (returns this page)
  // The only functions that can access project and setProject is this and ProjectWrapper (separation of conserns)
  const [project, setProject] = useState<ProjectShape | null>(null);

  if (project === null) {
    return (
      <div className="ProjectSelector">
        {/* Information about the application and some list code to go to a project */}
        <h1>Project page for Benjamin K IT1 VG2</h1>
        <p>All the projects for IT1 by Benjamin K (benjam.tech)</p>

        <ul>
          {ProjectStore.map((project) => (
            <li key={project.id}>
              <div className="text">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </div>

              <div className="btnDiv">
                <button
                  onClick={() => {
                    setProject(project);
                  }}
                >
                  Go To
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    /* The Component is not null so we return the opened project */
    return (
      <ProjectWrapper project={project} setProject={setProject}>
        {project.entryPoint}
      </ProjectWrapper>
    );
  }
};
