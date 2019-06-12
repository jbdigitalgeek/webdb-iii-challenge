const knex = require("knex");
const knexConfig = require("../knexfile");
const Students = require("../students/students-model");
const cohortsRouter = require("express").Router();
const Cohorts = require("./cohorts-model");

cohortsRouter.get("/", (req, res) => {
  Cohorts.find()
    .then(cohorts => {
      res.status(200).json(cohorts);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

cohortsRouter.get("/:id", (req, res) => {
  Cohorts.findById(req.params.id)
    .then(cohort => {
      if (cohort) {
        res.status(200).json(cohort);
      } else {
        res.status(404).json({ message: "Cohort not found" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
cohortsRouter.get("/:id/students", (req, res) => {
  Students.find()
    .select()
    .where({ cohort_id: req.params.id })
    .then(cstudent => {
      res.status(200).json(cstudent);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

cohortsRouter.post("/", (req, res) => {
  Cohorts.find()
    .insert(req.body, "id")
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

cohortsRouter.put("/:id", (req, res) => {
  const changes = req.body;
  Cohorts.find()
    .where({ id: req.params.id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: `${count} records updated` });
      } else {
        res.status(404).json({ message: "Cohort not found" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

cohortsRouter.delete("/:id", (req, res) => {
  Cohorts.find()
    .where({ id: req.params.id })
    .del()
    .then(count => {
      if (count > 0) {
        const unit = count > 1 ? "records" : "record";
        res.status(200).json({ message: `${count} ${unit} deleted` });
      } else {
        res.status(404).json({ message: "Cohort not found" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = cohortsRouter;
