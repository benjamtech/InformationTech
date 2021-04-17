const connection = require("../db");

module.exports = function (app) {
  app.get("/bibweb/book", (req, res) => {
    connection.query("SELECT * FROM bibweb.book;", (err, result) => {
      if (err) {
        res.status(500).send({ message: err });
      } else {
        res.send(result);
      }
    });
  });

  app.post("/bibweb/book", (req, res) => {
    connection.query(
      "INSERT INTO bibweb.book SET ?",
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

 app.put("/bibweb/book", (req, res) => {
    connection.query(
      "UPDATE bibweb.book SET ? WHERE id=?",
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

  app.delete("/bibweb/book/:id", (req, res) => {
    connection.query(
      "DELETE FROM bibweb.book WHERE id=?;",
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
