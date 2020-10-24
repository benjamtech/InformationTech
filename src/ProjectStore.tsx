import React from "react";
import BenjamTechCV from "./Projects/BenjamTechCV/BenjamTechCV";
import TableCalendar from "./Projects/TableCalendar/TableCalendar";

export interface ProjectShape {
    name: string;
    description: string;
    entryPoint: React.ReactElement,
    id: number;
}


// A nice array to store the information about the projects.
// A cool trick is to put a React element into the entryPoint key. 

const ProjectList: ProjectShape[] = [
    {
        name: "BenjamTech CV",
        description: "A small project with encryption for my Curriculum vitae",
        entryPoint: <BenjamTechCV />,
        id: 1,
    },

    {
        name: "Table Calendar",
        description: "A small project for showing my schedule in school and information about the classes",
        entryPoint: <TableCalendar />,
        id: 2,
    }
];

export default ProjectList;
