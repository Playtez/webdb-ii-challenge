const express = require("express");

const db = require("../data/dbConfig");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then(response => {
      if (response) {
        res.json(response);
      } else {
        res.status(404).json({
          message: "no data found"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "server issue"
      });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  db("cars")
    .where({ id })
    .then(car => {
      if (car) {
        res.json(car);
      } else {
        res.status(404).json({
          message: "no data found"
        });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve fruit" });
    });
});

router.post("/", (req, res) => {
  const carsData = req.body;
  db("cars")
    .insert(carsData)
    .then(car => {
      res.status(201).json({
        new_id_created: car
      });
    })
    .catch(err => {
      console.log("POST error", err);
      res.status(500).json({ message: "Failed to store data" });
    });
});

module.exports = router;
