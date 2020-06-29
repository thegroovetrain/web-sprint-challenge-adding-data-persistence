
exports.seed = async function(knex) {
  await knex('projects').insert([
    {
      name: 'Poop Project',
      description: 'Heavy Lourdes',
      completed: false
    }
  ]);
};
