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
      <label htmlFor="studentFirstName">Fornavn</label>
      <input
        id="studentFirstName"
        required
        disabled={props.selectedMode === "normal" ? true : false}
        placeholder="Fornavn"
        type="text"
        name="firstName"
        onChange={handleChange}
        value={props.selectedItem.firstName}
      />

      <label htmlFor="studentLastName">Etternavn</label>
      <input
        id="studentLastName"
        required
        placeholder="Etternavn"
        disabled={props.selectedMode === "normal" ? true : false}
        type="text"
        name="lastName"
        onChange={handleChange}
        value={props.selectedItem.lastName}
      />

      <label htmlFor="studentPhone">Telefon</label>
      <input
        id="studentPhone"
        required
        placeholder="F.eks. 12345678"
        disabled={props.selectedMode === "normal" ? true : false}
        type="tel"
        name="phone"
        onChange={handleChange}
        value={props.selectedItem.phone}
      />

      <label htmlFor="studentMail">Epost</label>
      <input
        id="studentMail"
        required
        disabled={props.selectedMode === "normal" ? true : false}
        placeholder="F.eks. ola@nordmann.no"
        type="email"
        name="mail"
        onChange={handleChange}
        value={props.selectedItem.mail}
      />
    </div>
  );
};
