const connection = require("../db");

const allowedTableNames = ["student", "author", "lending", "book"];

const isNotAllowedTableName = (value) => !allowedTableNames.includes(value);

module.exports = function (app) {
  app.get("/bibweb/:table", (req, res) => {
    if (isNotAllowedTableName(req.params.table)) {
      res.status(400).send({ message: "Bad table name" });
      return;
    }

    connection.query(
      `SELECT * FROM bibweb.${req.params.table};`,
      (err, result) => {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          res.send(result);
        }
      }
    );
  });

  app.post("/bibweb/:table", (req, res) => {
    if (isNotAllowedTableName(req.params.table)) {
      res.status(400).send({ message: "Bad table name" });
      return;
    }

    connection.query(
      `INSERT INTO bibweb.${req.params.table} SET ?`,
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

  app.put("/bibweb/:table", (req, res) => {
    if (isNotAllowedTableName(req.params.table)) {
      res.status(400).send({ message: "Bad table name" });
      return;
    }

    connection.query(
      `UPDATE bibweb.${req.params.table} SET ? WHERE id=?`,
      [{ ...req.body }, req.body.id],
      (err, result) => {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          res.status(200).send({ message: "Done" });
        }
      }
    );
  });

  app.delete("/bibweb/:table/:id", (req, res) => {
    if (isNotAllowedTableName(req.params.table)) {
      res.status(400).send({ message: "Bad table name" });
      return;
    }

    connection.query(
      `DELETE FROM bibweb.${req.params.table} WHERE id=?;`,
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
