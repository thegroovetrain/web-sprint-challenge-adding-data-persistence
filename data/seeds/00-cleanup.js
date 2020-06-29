exports.seed = async function(knex) {
  await knex('tasks').truncate();
  await knex('projects_resources').truncate();
  await knex('resources').truncate();
  await knex('projects').truncate();
};
