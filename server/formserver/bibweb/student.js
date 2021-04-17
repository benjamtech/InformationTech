const connection = require("../db");

module.exports = function (app) {
  app.get("/bibweb/student", (req, res) => {
    connection.query("SELECT * FROM bibweb.student;", (err, result) => {
      if (err) {
        res.status(500).send({ message: err });
      } else {
        res.send(result);
      }
    });
  });

  app.post("/bibweb/student", (req, res) => {
    connection.query(
      "INSERT INTO bibweb.student SET ?",
      { ...req.body },
      (err, result) => {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          res.status(200).send({ message: "Done" });
        }
      }
    );
  });

  app.put("/bibweb/student", (req, res) => {
    connection.query(
      "UPDATE bibweb.student SET ? WHERE id=?",
      { ...req.body, ...req.body.id },
      (err, result) => {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          res.status(200).send({ message: "Done" });
        }
      }
    );
  });

  app.delete("/bibweb/student/:id", (req, res) => {
    connection.query(
      "DELETE FROM bibweb.student WHERE id=?;",
      req.params.id,
      (err, result) => {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          res.send(result);
        }
      }
    );
  });
};
