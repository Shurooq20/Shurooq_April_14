exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cluckrs').del()
    .then(function () {
      // Inserts seed entries
      return knex('cluckrs').insert([
        {id: 1, full_name: 'Jon Snow', email: 'one@one.com'},
        {id: 2, full_name: 'Little Fingers', email: 'two@two.com'},
        {id: 3, full_name: 'Red Weding', email: 'three@three.com'}
      ]);
    });
};