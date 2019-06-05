
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohortsname').insert([
        {id: 1, name: 'web'},
        {id: 2, name: 'ios'},
        {id: 3, name: 'ds'}
      ]);
    });
};
