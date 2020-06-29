
exports.seed = async function(knex) {
  await knex('tasks').insert([
    {
      project_id: 1,
      description: 'Take off your pants',
      notes: '',
      completed: false
    },
    {
      project_id: 1,
      description: 'Sit on the toilet',
      notes: '',
      completed: false
    },
    {
      project_id: 1,
      description: 'Poop',
      notes: '',
      completed: false
    }
  ]);
};
