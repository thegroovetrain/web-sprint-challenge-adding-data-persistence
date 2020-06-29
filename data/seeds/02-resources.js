
exports.seed = async function(knex) {
  await knex('resources').insert([
    {
      name: 'Butt',
      description: 'A butt'
    },
    {
      name: 'Toilet',
      description: 'A common commode'
    }
  ]);
};
