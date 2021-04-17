import React, { useEffect, useState } from "react";
import Conn from "../Conn";
import { AuthorShape } from "../DataShapes";
import { FormProps } from "./formInfo";

export default (props: FormProps) => {
  const [authors, setAuthors] = useState<AuthorShape[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    props.setSelectedItem({
      ...props.selectedItem,
      [e.target.name]: e.target.value,
    });
  };

  const populateData = async () => {
    const data: any = await Conn.get("author");
    setAuthors(data);
  };

  useEffect(() => {
    populateData();
  }, []);

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

      <select
        required
        disabled={props.selectedMode === "normal" ? true : false}
        name="authorId"
        value={props.selectedItem.authorId}
        onChange={handleChange}
      >
        {authors.map((item: AuthorShape) => (
          <option value={item.id}>{item.firstName}</option>
        ))}
      </select>
    </div>
  );
};
