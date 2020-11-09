import React from "react";
import ProjectList, { ProjectShape } from "../ProjectStore";
import "./ProjectWrapper.css";
import { IoMdArrowBack } from "react-icons/io";

interface PropShape {
  project: ProjectShape;
  setProject(project: ProjectShape | null): any;
  children: React.ReactElement;
}

// A wrapper for every project (applied on ProjectSelector) to make the header/navbar on the top of the page
export default (props: PropShape) => {
  return (
    <div className="ProjectWrapper">
      <header>
        {/* This sets the project back to zero (shows the ProjectSelector) */}
        <div>
          <button
            onClick={() => {
              props.setProject(null);
            }}
          >
            <IoMdArrowBack />
          </button>

          <p>{props.project.name}</p>
        </div>

        <a href={props.project.githubURL} target="_blank">
          GitHub
        </a>
      </header>

      {/* A smart little container for the projects */}
      <div className="projectContainer">{props.children}</div>
    </div>
  );
};
