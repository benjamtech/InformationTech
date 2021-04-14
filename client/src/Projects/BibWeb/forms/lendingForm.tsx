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
        type="date"
        placeholder="Dato utlånt"

        disabled={props.selectedMode === "normal" ? true : false}
        required
        name="dateLentOut"
        onChange={handleChange}
        value={props.selectedItem.lastName}
      />
      <input
        type="date"
        placeholder="Dato innkrevd"
        required
        
        disabled={props.selectedMode === "normal" ? true : false}
        name="dateRequiredIn"
        onChange={handleChange}
        value={props.selectedItem.phone}
      />
    </div>
  );
};
