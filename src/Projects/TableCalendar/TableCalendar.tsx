import React, { useState } from "react";
import ClassStore, { ClassShape } from "./ClassStore";
import Modal from "./Modal";
import "./TableCalendar.css";
import TableCell from "./TableCell";

export default () => {
const [showProject, setShowProject] = useState<ClassShape | null>(null);

  return (
    <div className="TableCalendar">
      <Modal setShowProject={setShowProject} showProject={showProject} />
      
      <table>
        <caption>Timeplan for Benjamin K (skoleår 20/21)</caption>

        <tr>
          <th>Ukedager</th>
          <th>Mandag</th>
          <th>Tirsdag</th>
          <th>Onsdag</th>
          <th>Torsdag</th>
          <th>Fredag</th>
        </tr>

        <tr>
          <th>8-9:30</th>
          <TableCell setShowProject={setShowProject} classType={ClassStore.chemistry} />
          <TableCell setShowProject={setShowProject} classType={ClassStore.gym} />
          <td></td>
          <TableCell setShowProject={setShowProject} classType={ClassStore.physics} />
          <TableCell setShowProject={setShowProject} rowSpan={3} classType={ClassStore.subjectDay} />
        </tr>

        <tr>
          <th>9:40-10:40</th>
          <TableCell setShowProject={setShowProject} classType={ClassStore.math} />
          <TableCell setShowProject={setShowProject} classType={ClassStore.physics} />
          <TableCell setShowProject={setShowProject} classType={ClassStore.it} />
          <TableCell setShowProject={setShowProject} classType={ClassStore.math} />
        </tr>

        <tr>
          <th>10:50-11:50</th>
          <TableCell setShowProject={setShowProject} classType={ClassStore.german} />
          <TableCell setShowProject={setShowProject} classType={ClassStore.math} />
          <TableCell setShowProject={setShowProject} classType={ClassStore.german} />
          <TableCell setShowProject={setShowProject} classType={ClassStore.norwegian} />
        </tr>

        <tr>
          <th>11:50-12:20</th>
          <td colSpan={5}>Lunsj</td>
        </tr>

        <tr>
          <th>12:20-13:20</th>
          <TableCell setShowProject={setShowProject} classType={ClassStore.history} />
          <TableCell setShowProject={setShowProject} rowSpan={3} classType={ClassStore.subjectDay} />
          <TableCell setShowProject={setShowProject} classType={ClassStore.german} />
          <TableCell setShowProject={setShowProject} rowSpan={2} classType={ClassStore.subjectDay} />
          <TableCell setShowProject={setShowProject} rowSpan={3} classType={ClassStore.subjectDay} />
        </tr>
        <tr>
          <th>13:30-14:30</th>
          <TableCell setShowProject={setShowProject} classType={ClassStore.physics} />
          <TableCell setShowProject={setShowProject} classType={ClassStore.math} />
        </tr>

        <tr>
          <th>14:40-15:40</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
};
