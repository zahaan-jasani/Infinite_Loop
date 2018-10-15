const connection = 'postgres://rxhbrrie:nAsV0LK2CtUTm7S5L2IGj52SEcgiSGgE@elmer.db.elephantsql.com:5432/rxhbrrie';
const pgp = require('pg-promise')(/*options*/);
const db = pgp(connection);

module.exports = db;