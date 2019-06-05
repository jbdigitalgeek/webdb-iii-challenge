const knex = require('knex');
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development);


module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db('students');
}

function findById(id) {
  return db('students')
    .where({ id })
    .first();
}

function add(student) {
  return null;
}

function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}
