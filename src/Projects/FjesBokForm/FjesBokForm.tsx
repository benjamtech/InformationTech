import React, { useState } from "react";
import "./General.css";
import "./FjesBokBenji.css";
import "./FjesBokDimitri.css";

export default () => {
  const [fancy, setFancy] = useState<boolean>(false);

  /*
        Her er det brukt labels for å følge WAI-ARIA.
        Ellers er det ikke noe border på radio-buttons fordi dette er vanskelig å få til
        i CSS på noen god måte. Man kan hacke det sammen, men det er ikke noen vits. 
        Ellers er designet replikert så godt som mulig. 
        Det er bare standard HTML og CSS som er brukt i prosjektet + litt JS for den
        mode knappen.
  */

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert(
      `This is not a real form dude. Try facebook.com if you need to be "social"`
    );
  };

  const handleModeChange = () => {
    setFancy(!fancy); // Changes to bool to the opposite
  };

  return (
    <div className={fancy ? "FjesBokBenji" : "FjesBokDimitri"}>
      {/* This is to switch mode. All it does is to switch the root class */}

      {/* position absolute to get it in the corner. Changes the mode */}
      <div className="modeContainer">
        <p>Mode: {fancy ? "Benji" : "Dimitri"}</p>
        <button onClick={handleModeChange}>Change Mode</button>
      </div>

      {/* Just a form */}
      <form onSubmit={handleSubmit}>
        <h2>Bli medlem av</h2>
        <h1>FJESBOK</h1>

        <label htmlFor="htmlFornavn">Fornavn</label>
        <input type="text" className="text" id="htmlFornavn" />

        <label htmlFor="etternavn">Etternavn</label>
        <input type="text" className="text" id="etternavn" />

        <label>Kjønn</label>

        <div className="row">
          <input type="radio" id="mann" name="genderGroup" />

          <label htmlFor="mann" className="genderLabel">
            mann
          </label>
        </div>

        <div className="row">
          <input type="radio" id="kvinne" name="genderGroup" />

          <label htmlFor="kvinne" className="genderLabel">
            kvinne
          </label>
        </div>

        <label htmlFor="epost">E-post</label>
        <input type="email" className="text" id="epost" />

        <label htmlFor="passord">Passord</label>
        <input type="password" className="text" id="passord" />

        <input type="submit" value="Opprett" className="submitBtn" />
      </form>
    </div>
  );
};
