const express = require("express");
const db = require("../models");
const { isAuthenticated } = require("../config/auth");

const router = express.Router();

router.get("/api/notes", isAuthenticated, (req, res) => {
  db.User.findById(req.user.id)
    .then((data) => {
      if (data) {
        res.json(data.notes);
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

router.put("/api/notes", isAuthenticated, (req, res) => {
   db.User.findById(req.user.id)
   .then((data) => {
     if (data) {
       const oldNotes = data.notes;
       console.log(req.body.body._id)
       const newNotes = oldNotes.map(oldNote => oldNote._id == req.body.body._id ? req.body.body : oldNote)
       db.User.update({ _id: req.user.id }, { $set: { notes: newNotes } }).then(
        (data) => {
          if (data) {
            res.json(data);
          } else {
            res.status(404).send({ success: false, message: "No user found" });
          }
        }
      )
       .catch((err) => res.status(400).send(err));
      } else {
       res.status(404).send({ success: false, message: "No user found" });
     }
   })
   .catch((err) => res.status(400).send(err));
});

router.delete("/api/notes/:id", isAuthenticated, (req, res) => {
  db.User.findById(req.user.id)
  .then((data) => {
    const oldNotes = data.notes;
    const newNotes = oldNotes.filter(oldNote => oldNote._id != req.params.id);
    db.User.update({ _id: req.user.id }, { $set: { notes: newNotes } }).then(
      (data) => {
        if (data) {
          res.json(data);
        } else {
          res.status(404).send({ success: false, message: "No user found" });
        }
      }
    )
     .catch((err) => res.status(400).send(err));
  }).catch((err) => res.status(400).send(err));
})

module.exports = router;
