const knex = require('knex');
const db = knex(knexConfig);
module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db('cohorts');
}

function findById(id) {
  return db('cohorts')
    .where({ id })
    .first();
}

function add(cohort) {
  return null;
}

function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}
