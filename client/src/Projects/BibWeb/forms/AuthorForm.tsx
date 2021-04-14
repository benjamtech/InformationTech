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
      <input
        name="firstName"

        disabled={props.selectedMode === "normal" ? true : false}
        placeholder="Fornavn"
        onChange={handleChange}
        value={props.selectedItem.firstName}
      />
      <input
        name="lastName"

        disabled={props.selectedMode === "normal" ? true : false}
        placeholder="Etternavn"
        onChange={handleChange}
        value={props.selectedItem.lastName}
      />
    </div>
  );
};
