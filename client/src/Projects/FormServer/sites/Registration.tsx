import React, { useState } from "react";

export default () => {
  // Yes, I have to define every field to make the input controlled. React is a pain when it comes to forms
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault(); // Don't want to reload the site (the default behaviour)

    // Some super simple validation of the data
    if (firstname == "" || lastname == "" || mail == "") {
      alert("No fields can be empty");
      return; 
    }

    // Formatting the data for the server
    const data = JSON.stringify({
      firstname: firstname,
      lastname: lastname,
      mail: mail,
    });

    // The parameters for the request to the server
    const options: RequestInit = {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: data,
    }

    // Sending the result to the server
    fetch("/api/node/form", options)
      .then((response) => response.json())
      .then((data) => console.log(data));

    // Setting boolean to show the data-return message
    setHasSubmitted(true);
  };

  const resetForm = () => {
    setFirstname("");
    setLastname("");
    setMail("");
  };

  if (hasSubmitted) {
    return (
      <div className="DataReturn">
        <h1>
          Takk, {firstname} {lastname}! Du er påmeldt!
        </h1>
      </div>
    );
  } else {
    return (
      <div className="RegistrationForm">
        <h1>Påmelding til faglig-pedagogisk dag</h1>
        <h2>Please don't send sensitive data. All data is available to anyone. And the api is not secured with https</h2>

        <form onSubmit={submitForm}>
          <div className="row">
            <label htmlFor="fsFirstName">Fornavn:</label>
            <input
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              type="text"
              id="fsFirstName"
            />
          </div>

          <div className="row">
            <label htmlFor="fsLastName">Etternavn:</label>
            <input
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              type="text"
              id="fsLastName"
            />
          </div>

          <div className="row">
            <label htmlFor="fsMail">E-post:</label>
            <input
              value={mail}
              onChange={(e) => {
                setMail(e.target.value);
              }}
              type="email"
              id="fsMail"
            />
          </div>

          <div className="btnDiv">
            <input type="button" onClick={resetForm} value="Tilbakestill" />
            <input type="submit" value="Send inn" />
          </div>
        </form>
      </div>
    );
  }
};
