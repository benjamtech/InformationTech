import React from "react";
import { FormProps } from "./formInfo";

export default (props: FormProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setSelectedItem({
      ...props.selectedItem,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="dataForm">
      <label htmlFor="authorFirstName">Fornavn</label>
      <input
        name="firstName"
        required
        id="authorFirstName"
        disabled={props.selectedMode === "normal" ? true : false}
        placeholder="Fornavn"
        onChange={handleChange}
        value={props.selectedItem.firstName}
      />

      <label htmlFor="authorLastName">Etternavn</label>
      <input
        name="lastName"
        required
        id="authorLastName"
        disabled={props.selectedMode === "normal" ? true : false}
        placeholder="Etternavn"
        onChange={handleChange}
        value={props.selectedItem.lastName}
      />
    </div>
  );
};
