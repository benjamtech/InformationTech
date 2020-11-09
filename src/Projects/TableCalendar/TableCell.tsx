import React from "react";
import { ClassShape } from "./ClassStore";
import "./TableCell.css";

interface PropShape {
  classType: ClassShape;
  rowSpan?: number;
  colSpan?: number;
  setShowProject(value: ClassShape | null): any;
}

export default (props: PropShape) => {
  // Custom component to avoid duplication of table cell
  return (
    <td
      className="TableCell"
      rowSpan={props.rowSpan}
      colSpan={props.colSpan}
      style={{
        backgroundColor: props.classType.bgColor,
        color: props.classType.txtColor,
      }}
      onClick={() => {
        props.setShowProject(props.classType);
      }}
    >
      {props.classType.name}
    </td>
  );
};
