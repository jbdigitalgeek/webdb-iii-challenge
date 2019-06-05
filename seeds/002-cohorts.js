
exports.seed = function(knex, Promise) {
 
  return knex('cohorts').del()
    .then(function () {
     
      return knex('cohorts').insert([
        {id: 1, name: 'web'},
        {id: 2, name: 'ios'},
        {id: 3, name: 'ds'}
      ]);
    });
};
