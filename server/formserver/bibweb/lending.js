const connection = require("../db");

module.exports = function (app) {
  app.get("/bibweb/lending", (req, res) => {
    connection.query("SELECT * FROM bibweb.lending;", (err, result) => {
      if (err) {
        res.status(500).send({ message: err });
      } else {
        res.send(result);
      }
    });
  });

  app.post("/bibweb/lending", (req, res) => {
    connection.query(
      "INSERT INTO bibweb.lending SET ?",
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

  app.put("/bibweb/lending", (req, res) => {
    connection.query(
      "UPDATE bibweb.lending SET ? WHERE id=?",
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

  app.delete("/bibweb/lending/:id", (req, res) => {
    connection.query(
      "DELETE FROM bibweb.lending WHERE id=?;",
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
