import React, { useEffect, useState } from "react";
import { IoMdCreate, IoMdTrash } from "react-icons/io";
import "./BibWeb.css";
import AuthorForm from "./forms/AuthorForm";
import BookForm from "./forms/BookForm";
import lendingForm from "./forms/lendingForm";
import StudentForm from "./forms/StudentForm";

const typesList = ["authors", "books", "students", "lendings"];

const typesNor: any = {
  authors: "Forfattere",
  books: "Bøker",
  students: "Elever",
  lendings: "Utlån",
};

const modesList = ["normal", "create", "edit"];

export default () => {
  const [listData, setListData] = useState<any>([]);
  const [selectedType, setSelectedType] = useState<string>(typesList[0]);
  const [selectedMode, setSelectedMode] = useState<string>(modesList[0]);
  const [selectedItem, setSelectedItem] = useState<any>({});

  const editors: any = {
    authors: AuthorForm,
    books: BookForm,
    students: StudentForm,
    lendings: lendingForm,
  };

  useEffect(() => {
    // Set list data
  }, []);

  const ItemViewer: any = editors[selectedType];

  const deleteItem = (item: any) => {};

  return (
    <div className="BibWeb">
      <div className="editSelector">
        <p>BibWeb</p>
        <ul>
          {typesList.map((item) => (
            <li>
              <button
                className={selectedType === item ? "selectedType" : ""}
                onClick={() => setSelectedType(item)}
              >
                {typesNor[item]}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="listDiv">
        <button
          onClick={() => {
            if (selectedMode === "normal") {
              setSelectedMode("create");
            } else {
              setSelectedMode("normal");
              setSelectedItem({});
            }
          }}
        >
          {selectedMode === "normal" ? "Create new" : "Cancel"}
        </button>

        <ul className={selectedMode === "normal" ? "" : "disabled"}>
          {listData.map((item: any) => {
            let name = "Navn error";
            if (selectedType === "books") {
              name = item.navn;
            } else if (selectedType === "students") {
              name =
                item.fornavn.charAt(0).toUpperCase() + ". " + item.etternavn;
            } else if (selectedType === "lending") {
              name = "Utlån nr " + item.id;
            }
            return (
              <li onClick={() => setSelectedItem(item)}>
                <p>{name}</p>
                <div className="liBtnDiv">
                  <button onClick={() => setSelectedMode("edit")}>
                    {IoMdCreate}
                  </button>
                  <button
                    onClick={() => {
                      deleteItem(item);
                    }}
                  >
                    {IoMdTrash}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="viewItem">
        <ItemViewer
          selectedMode={selectedMode}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </div>
    </div>
  );
};
