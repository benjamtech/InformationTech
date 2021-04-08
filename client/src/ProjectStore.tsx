import React from "react";
import BenjamTechCV from "./Projects/BenjamTechCV/BenjamTechCV";
import TableCalendar from "./Projects/TableCalendar/TableCalendar";
import FjesBokForm from "./Projects/FjesBokForm/FjesBokForm";
import FormServer from "./Projects/FormServer/FormServer";
import VikarWeb from "./Projects/VikarWeb/VikarWeb";

export interface ProjectShape {
    name: string;
    description: string;
    entryPoint: React.ReactElement;
    githubURL: string;
    id: number;
}


// A nice array to store the information about the projects.
// A cool trick is to put a React element into the entryPoint key. 

const ProjectList: ProjectShape[] = [
    {
        name: "BenjamTech CV",
        description: "A small project with encryption for my Curriculum vitae",
        entryPoint: <BenjamTechCV />,
        githubURL: "https://github.com/benjamtech/BenjamTechCV/tree/master/src",
        id: 1,
    },

    {
        name: "Table Calendar",
        description: "A small project for showing my schedule in school and information about the classes",
        entryPoint: <TableCalendar />,
        githubURL: "https://github.com/benjamtech/InformationTech/tree/main/client/src/Projects/TableCalendar",
        id: 2,
    },
    {
        name: `"Fjesbok" form`,
        description: "A small project to show off some badass CSS skills", 
        entryPoint: <FjesBokForm />,
        githubURL: "https://github.com/benjamtech/InformationTech/tree/main/client/src/Projects/FjesBokForm",
        id: 3,
    },
    { 
        name: "Form with server submit",
        description: "Static sites, and a form that stores submissions",
        entryPoint: <FormServer />,
        githubURL: "https://github.com/benjamtech/InformationTech/tree/main/client/src/Projects/FormServer",
        id: 4,
    },
    {
        name: "VikarWeb",
        description: "A web portal to control a simple DB",
        entryPoint: <VikarWeb />,
        githubURL: "https://github.com/benjamtech/InformationTech/tree/main/client/src/Projects/VikarWeb",
        id: 5,
    },
];

export default ProjectList;
