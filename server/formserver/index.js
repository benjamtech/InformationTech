const express = require("express");
const redis = require("redis");

const app = express();
const port = 80;
const redisClient = redis.createClient({ host: "redisserver" }); // some sweet sweet database support

app.use(express.json()); // Add JSON capability for post requests in body

// A test endpoint
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// To save a form submission
app.post("/form", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const mail = req.body.mail;

  redisClient.rpush("formList", `${firstname}, ${lastname}, ${mail}`, (err, keys) => {
      if (err) {
          res.status(500).send({ message: "Insert failed" });
      }
  });

  res.status(201).send({ message: "Oki doki, it's in the db now" });
});

// To get a form submission
app.get("/form", (req, res) => {
  try {
    redisClient.lrange("formList", 0, -1, (err, reply) => {
      if (reply === null) {
        res.send({ message: "No form submissions yet" });
      } else {
        res.send({ formList: reply });
      }
    });
  } catch (err) {
    res.send({ message: "An error occured " });
  }
});


// Starting the server
app.listen(port, () => {
    console.log("Nodejs running");
});
