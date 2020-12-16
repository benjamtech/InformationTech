import React from "react";
import { IoMdClose } from "react-icons/io";
import { ClassShape } from "./ClassStore";
import "./Modal.css";

interface PropShape {
  setShowProject(value: ClassShape | null): any;
  showProject: ClassShape | null;
}

export default (props: PropShape) => {
  if (props.showProject === null) {
    return null;
  } else {
    return (
      <div className="SubjectModal">
        <div className="modalBody">
          <button onClick={() => {
              props.setShowProject(null);
          }}>
            <IoMdClose />
          </button>

          <h3>{props.showProject?.name}</h3>
          <p>
            <u>Eksamen</u>{": "}
            {props.showProject?.exam}
          </p>
          <p>
            <u>Timer</u>{": "}
            {props.showProject?.hours}
          </p>
          <p>
            <u>Lærer</u>{": "}
            {props.showProject?.teacher}
          </p>
          <p>
            <u>Info</u>{": "}
            {props.showProject?.other}
          </p>
        </div>
      </div>
    );
  }
};
