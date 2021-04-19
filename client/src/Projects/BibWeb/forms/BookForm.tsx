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
      <label htmlFor="bookName">Navn</label>
      <input
        id="bookName"
        required
        disabled={props.selectedMode === "normal" ? true : false}
        placeholder="F.eks. Harry Potter"
        type="text"
        name="name"
        onChange={handleChange}
        value={props.selectedItem.name}
      />

      <label htmlFor="bookISBN">ISBN</label>
      <input
        id="bookISBN"
        required
        disabled={props.selectedMode === "normal" ? true : false}
        placeholder="F.eks. 12345"
        type="text"
        name="isbn"
        onChange={handleChange}
        value={props.selectedItem.isbn}
      />

      <label htmlFor="bookNumberOf">Antall bøker</label>
      <input
        id="bookNumberOf"
        required
        disabled={props.selectedMode === "normal" ? true : false}
        placeholder="F.eks. 4"
        type="number"
        name="numberOf"
        onChange={handleChange}
        value={props.selectedItem.numberOf}
      />

      <label htmlFor="bookSelectAuthor">Forfatter</label>
      <select
        id="bookSelectAuthor"
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
