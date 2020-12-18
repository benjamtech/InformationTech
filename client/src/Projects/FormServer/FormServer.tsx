import React, { useState } from "react";
import "./FormServer.css";
import AllData from "./sites/AllData";
import Home from "./sites/Home";
import Registration from "./sites/Registration";
import Speakers from "./sites/Speakers";
import Times from "./sites/Times";

interface MenuShape {
  name: string;
  component: React.ReactElement;
  id: number;
}

const menu: MenuShape[] = [
  {
    name: "Hjem",
    component: <Home />,
    id: 1,
  },
  {
    name: "Program",
    component: <Times />,
    id: 2,
  },
  {
    name: "Foredragsholdere",
    component: <Speakers />,
    id: 3,
  },
  {
    name: "Påmelding",
    component: <Registration />,
    id: 4,
  },
  {
    name: "Alle påmeldte",
    component: <AllData />,
    id: 5,
  }
];

export default () => {
  const [currentMenuItem, setCurrentMenuItem] = useState<MenuShape>(menu[0]);

  return (
    <div className="FormServer">
      <div>
        {menu.map((menuItem) => (
          <button
            key={menuItem.id}
            onClick={() => {
              setCurrentMenuItem(menuItem);
            }}
          >
            {menuItem.name}
          </button>
        ))}
      </div>

      {currentMenuItem.component}
    </div>
  );
};
