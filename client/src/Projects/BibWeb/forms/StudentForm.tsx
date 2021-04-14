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
        required
        disabled={props.selectedMode === "normal" ? true : false}
        placeholder="Fornavn"
        type="text"
        name="firstName"
        onChange={handleChange}
        value={props.selectedItem.firstName}
      />
      <input
        required
        placeholder="Etternavn"
        disabled={props.selectedMode === "normal" ? true : false}
        type="text"
        name="lastName"
        onChange={handleChange}
        value={props.selectedItem.lastName}
      />
      <input
        required
        placeholder="Telefon"
        disabled={props.selectedMode === "normal" ? true : false}
        type="tel"
        name="phone"
        onChange={handleChange}
        value={props.selectedItem.phone}
      />
      <input
        required
        disabled={props.selectedMode === "normal" ? true : false}
        placeholder="Epost"
        type="email"
        name="mail"
        onChange={handleChange}
        value={props.selectedItem.mail}
      />
    </div>
  );
};
