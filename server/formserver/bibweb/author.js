const connection = require("../db");

module.exports = function (app) {
  app.get("/bibweb/author", (req, res) => {
    connection.query("SELECT * FROM bibweb.author;", (err, result) => {
      if (err) {
        res.status(500).send({ message: err });
      } else {
        res.send(result);
      }
    });
  });

  app.post("/bibweb/author", (req, res) => {
    connection.query(
      "INSERT INTO bibweb.author SET ?",
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

  app.put("/bibweb/author", (req, res) => {
    connection.query(
      "UPDATE bibweb.author SET ? WHERE id=?",
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

  app.delete("/bibweb/author/:id", (req, res) => {
    connection.query(
      "DELETE FROM bibweb.author WHERE id=?;",
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