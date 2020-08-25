const express = require("express");
const db = require("../models");
const { isAuthenticated } = require("../config/auth");

const router = express.Router();

router.get("/api/notes", isAuthenticated, (req, res) => {
  db.User.findAll(req.body)
  console.log(db.User.findAll(req.body))
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: "No user found" });
      }
    })
    .catch((err) => res.status(400).send(err));
});

router.post("/api/notes", isAuthenticated, (req, res) => {
  db.User.update({ _id: req.user.id }, { $push: { notes: req.body } }).then(
    (data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: "No user found" });
      }
    }
  )
   .catch((err) => res.status(400).send(err));
});


module.exports = router;
