import React, { useEffect, useState } from "react";

export default () => {
  const [people, setPeople] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/node/form")
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.formList);
      });
  }, []);

  return (
    <div className="AllData">
      <ul>
        {people.map((person: any) => (
          <li style={{ fontSize: "20px" }} key={person}>{person}</li>
        ))}
      </ul>
    </div>
  );
};
