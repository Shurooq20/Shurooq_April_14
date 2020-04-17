exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cluckrs').del()
    .then(function () {
      // Inserts seed entries
      return knex('cluckrs').insert([
        {id: 1, full_name: 'Jon Snow'},
        {id: 2, full_name: 'Little Fingers'},
        {id: 3, full_name: 'Red Weding'}
      ]);
    });
};