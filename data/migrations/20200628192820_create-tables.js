
exports.up = async function(knex) {
    await knex.schema.createTable('projects', table => {
        table.increments();
        table.string('name').notNull();
        table.text('description');
        table.boolean('completed').notNull();
    });

    await knex.schema.createTable('resources', table => {
        table.increments();
        table.string('name').notNull();
        table.text('description');
    });

    await knex.schema.createTable('projects_resources', table => {
        table.integer('project_id')
            .references('id').inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.integer('resource_id')
            .references('id').inTable('resources')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.primary(['project_id', 'resource_id']);
    });

    await knex.schema.createTable('tasks', table => {
        table.increments();
        table.integer('project_id')
            .references('id').inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.text('description').notNull();
        table.text('notes');
        table.boolean('completed').notNull();
    })

};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('tasks');
    await knex.schema.dropTableIfExists('projects_resources');
    await knex.schema.dropTableIfExists('resources');
    await knex.schema.dropTableIfExists('projects');
};
