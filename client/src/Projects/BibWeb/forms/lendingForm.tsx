import React, { useEffect, useState } from "react";
import Conn from "../Conn";
import { BookShape, StudentShape } from "../DataShapes";
import { FormProps } from "./formInfo";

export default (props: FormProps) => {
  const [books, setBooks] = useState<BookShape[]>([]);
  const [students, setStudents] = useState<StudentShape[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    props.setSelectedItem({
      ...props.selectedItem,
      [e.target.name]: e.target.value,
    });
  };

  const populateData = async () => {
    const studentData: any = await Conn.get("student");
    const bookData: any = await Conn.get("book");
    setBooks(bookData);
    setStudents(studentData);
  };

  useEffect(() => {
    populateData();
  }, []);

  return (
    <div className="dataForm">
      <label htmlFor="lendingDateLentOut">Dato utlånt</label>
      <input
        id="lendingDateLentOut"
        type="date"
        disabled={props.selectedMode === "normal" ? true : false}
        required
        name="dateLentOut"
        onChange={handleChange}
        value={props.selectedItem.lastName}
      />

      <label htmlFor="lendingDateRequiredIn">Dato innkrevd</label>
      <input
        id="lendingDateRequiredIn"
        type="date"
        required
        disabled={props.selectedMode === "normal" ? true : false}
        name="dateRequiredIn"
        onChange={handleChange}
        value={props.selectedItem.phone}
      />

      <label htmlFor="lendingStudentId">Elev</label>
      <select
        id="lendingStudentId"
        required
        disabled={props.selectedMode === "normal" ? true : false}
        name="studentId"
        value={props.selectedItem.authorId}
        onChange={handleChange}
      >
        {students.map((item: StudentShape) => (
          <option value={item.id}>{item.firstName}</option>
        ))}
      </select>

      <label htmlFor="lendingBookId">Bok</label>
      <select
        id="lendingBookId"
        required
        disabled={props.selectedMode === "normal" ? true : false}
        name="bookId"
        value={props.selectedItem.authorId}
        onChange={handleChange}
      >
        {books.map((item: BookShape) => (
          <option value={item.id}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};
