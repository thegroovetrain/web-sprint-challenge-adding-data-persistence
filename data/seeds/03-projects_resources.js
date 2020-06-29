
exports.seed = async function(knex) {
  await knex('projects_resources').insert([
    {
      project_id: 1,
      resource_id: 1
    },
    {
      project_id: 1,
      resource_id: 2
    }
  ]);
};
