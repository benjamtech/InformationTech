import React, { useState } from "react";

export default () => {
  return (
    <div className="TimesForm">
      <table>
        <tr style={{ textAlign: "center" }}>
          <td>
            <p>
              <b>Tidspunkt</b>
            </p>
          </td>

          <td>
            <p>
              <b>Programmet</b>
            </p>
          </td>
        </tr>

        <tr>
          <td>
            <p>8.30-8.45</p>
          </td>

          <td>
            <p>
              <b>Oppstart med velkomstord</b> og kaffe (ta med egen kaffe selv
              &#128578;)
            </p>
          </td>
        </tr>

        <tr style={{ backgroundColor: "#DDD" }}>
          <td>
            <p>8.45-8.55</p>
          </td>

          <td>
            <p>pause</p>
          </td>
        </tr>

        <tr>
          <td>
            <p>8.55-10.00</p>
          </td>

          <td>
            <p>
              Felles økt: <b>Ny eksamen i metematikk</b> (Ola Hansen,
              Universitetslektor ved Nasjonalt senter for hjernetrim)
            </p>
          </td>
        </tr>

        <tr style={{ backgroundColor: "#DDD" }}>
          <td>
            <p>10.00-10.10</p>
          </td>

          <td>
            <p>pause</p>
          </td>
        </tr>

        <tr>
          <td>
            <p>10.10-11.15</p>
          </td>

          <td>
            <p>
              <b>
                Hva innebærer det å ha en muntlig-praktisk eksamen i
                matematikkfaget
              </b>{" "}
              (ved Kari Hansen, Hans Kransen og Ola Olaussen)
            </p>
          </td>
        </tr>

        <tr style={{ backgroundColor: "#FFCABA", textAlign: "center" }}>
          <td colSpan={2}>lunsj</td>
        </tr>

        <tr>
          <td>
            <p>12.00-13.00</p>
          </td>
          <td>
            <p>
              <b>Vurdering i fysikk</b> (Astrid Hansen, Universitetslektor,
              NTNU)
            </p>
          </td>
        </tr>

        <tr style={{ backgroundColor: "#DDD" }}>
          <td>
            <p>13.00-13.10</p>
          </td>
          <td>
            <p>pause</p>
          </td>
        </tr>

        <tr>
          <td>
            <p>13.10-15.30</p>
          </td>
          <td>
            <p>
              <b>Nytt blikk på elastisk støtt</b> (Daniel Hansen, Oslo vgs)
            </p>
          </td>
        </tr>

        <tr style={{ textAlign: "center" }}>
          <td colSpan={2}>
            <p>
              <b>Takk for din aktive deltagelse!!!</b>
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
};
