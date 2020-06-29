const db = require('../data/config');

const find = (id=null) => {
    if (id) {
        return db('resources as r')
            .select('*')
            .where('r.id', id);
    } else {
        return db('resources as r')
            .select('*');
    }
}

const add = (resource) => {
    return db('resources').insert(resource)
        .then(ids => {
            return find(ids[0]);
        });
}

module.exports = {
    find,
    add
}