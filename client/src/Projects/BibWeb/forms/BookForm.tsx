import React from "react";
import { FormProps } from "./formInfo";

export default (props: FormProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setSelectedItem({
      ...props.selectedItem,
      [e.target.name]: e.target.value,
    });
  };

  const lagre = () => {
    if (props.selectedMode === "create") {
      // save new item
    } else if (props.selectedMode === "edit") {
      // save changes
    }
  };

  return (
    <div className="dataForm">
      <input
        required
        disabled={props.selectedMode === "normal" ? true : false}
        placeholder="Navn"
        type="text"
        name="name"
        onChange={handleChange}
        value={props.selectedItem.name}
      />
      <input
        required
        disabled={props.selectedMode === "normal" ? true : false}
        placeholder="ISBN"
        type="text"
        name="isbn"
        onChange={handleChange}
        value={props.selectedItem.isbn}
      />
      <input
        required
        disabled={props.selectedMode === "normal" ? true : false}
        placeholder="Antall bøker"
        type="number"
        name="numberOf"
        onChange={handleChange}
        value={props.selectedItem.numberOf}
      />

      <button
        onClick={lagre}
        style={{ display: props.selectedMode === "normal" ? "none" : "block" }}
      >
        {props.selectedMode === "edit" ? "Lagre endringer" : "Lag ny"}
      </button>
    </div>
  );
};
