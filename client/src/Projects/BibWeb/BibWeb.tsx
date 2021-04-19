import React, { useEffect, useState } from "react";
import { IoMdCreate, IoMdTrash } from "react-icons/io";
import "./BibWeb.css";
import Conn from "./Conn";
import AuthorForm from "./forms/AuthorForm";
import BookForm from "./forms/BookForm";
import lendingForm from "./forms/lendingForm";
import StudentForm from "./forms/StudentForm";

const typesList = ["author", "book", "student", "lending"];

const typesNor: any = {
  author: "Forfattere",
  book: "Bøker",
  student: "Elever",
  lending: "Utlån",
};

const modesList = ["normal", "create", "edit"];

const editors: any = {
  author: AuthorForm,
  book: BookForm,
  student: StudentForm,
  lending: lendingForm,
};

const standardData: any = {
  author: {
    firstName: "",
    lastName: "",
  },
  book: {
    name: "",
    isbn: "",
    numberOf: NaN,
    authorId: NaN,
  },
  lending: {
    dateLentOut: new Date(),
    dateRequiredIn: new Date(),
    bookId: NaN,
    studentId: NaN,
  },
  student: {
    firstName: "",
    lastName: "",
    phone: "",
    mail: "",
  },
};

const capitalizeFirstLetter = (string: String) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default () => {
  const [listData, setListData] = useState<any>([]);
  const [selectedType, setSelectedType] = useState<string>(typesList[0]);
  const [selectedMode, setSelectedMode] = useState<string>(modesList[0]);
  const [selectedItem, setSelectedItem] = useState<any>(
    standardData[typesList[0]]
  );

  const downloadData = async () => {
    // Something like this
    const data: any = await Conn.get(selectedType);
    const dataArr: any[] = data;
    console.log(data);
    setListData(data);
    if (Array.isArray(dataArr) && dataArr[0]) {
      setSelectedItem(dataArr[0]);
    }
  };

  const save = async () => {
    if (selectedMode === "create") {
      await Conn.post(selectedType, selectedItem);
    } else if (selectedMode === "edit") {
      await Conn.put(selectedType, selectedItem);
    }
    setSelectedMode("normal");
    downloadData();
  };

  useEffect(() => {
    downloadData();
  }, []);

  useEffect(() => {
    downloadData();
  }, [selectedType]);

  const ItemViewer: any = editors[selectedType];

  const deleteItem = async (item: any) => {
    await Conn.delete(selectedType + "/" + item.id);
    setSelectedItem(standardData[selectedType]);
    downloadData();
  };

  return (
    <div className="BibWeb">
      <div className="editSelector">
        <ul>
          {typesList.map((item) => (
            <li key={item}>
              <button
                disabled={selectedMode === "normal" ? false : true}
                className={selectedType === item ? "selectedType" : ""}
                onClick={() => {
                  if (selectedType !== item) {
                    setListData([]);
                    setSelectedType(item);
                  }
                }}
              >
                {typesNor[item]}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="listDiv">
        <button
          className="createBtn"
          disabled={selectedMode === "normal" ? false : true}
          onClick={() => {
            setSelectedItem(standardData[selectedType]);
            setSelectedMode("create");
          }}
        >
          Lag ny
        </button>

        <ul className={selectedMode === "normal" ? "" : "disabled"}>
          {listData.map((item: any) => {
            let name = "Navn error";
            if (selectedType === "book") {
              name = item.name;
            } else if (
              selectedType === "student" ||
              selectedType === "author"
            ) {
              if (name.split(" ").length > 1) {
                name =
                  item.firstName.charAt(0).toUpperCase() +
                  ". " +
                  capitalizeFirstLetter(item.lastName);
              }
            } else if (selectedType === "lending") {
              name = "Utlån nr " + item.id;
            }

            return (
              <li
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={selectedItem.id === item.id ? "selectedType" : ""}
              >
                <p>{name}</p>
                <div className="liBtnDiv">
                  <button onClick={() => setSelectedMode("edit")}>
                    {<IoMdCreate />}
                  </button>
                  <button
                    onClick={() => {
                      deleteItem(item);
                    }}
                  >
                    {<IoMdTrash />}
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

        <div className="btnDiv">
          <div className="btnInnerDiv">
            <button
              onClick={() => {
                setSelectedMode("normal");
                setSelectedItem(standardData[selectedType]);
              }}
              style={{
                display: selectedMode === "normal" ? "none" : "block",
              }}
            >
              Avbryt
            </button>

            <button
              onClick={save}
              style={{
                display: selectedMode === "normal" ? "none" : "block",
              }}
            >
              {selectedMode === "edit" ? "Lagre endringer" : "Lagre"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
