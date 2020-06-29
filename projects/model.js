const db = require('../data/config');

const find = (id=null) => {
    if (id) {
        return db('projects as p').where('p.id', id);
    } else {
        return db('projects as p');
    }
}

const add = (project) => {
    return db('projects').insert(project)
        .then(ids => {
            return find(ids[0]);
        });
}

const findTasks = (id) => {
    return db('tasks as t')
        .join('projects as p', 't.project_id', 'p.id')
        .select('t.id',
            't.description',
            't.notes', 
            't.completed',
            't.project_id', 
            'p.name as project_name', 
            'p.description as project_descrption')
        .where('p.id', id);
}

const addTask = (task) => {
    return db('tasks').insert(task)
        .then(ids => {
            return findTasks(task.project_id);
        });
}

module.exports = {
    find,
    add,
    findTasks,
    addTask
}