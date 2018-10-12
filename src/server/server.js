// initialize connection with PostgreSQL database
const connection =
  'postgres://lrbqolbi:AoiXpqFJzYSWj75UH2IgIppEF8QLPzGO@elmer.db.elephantsql.com:5432/lrbqolbi';

const pgp = require('pg-promise')(/*options*/);
const db = pgp(connection);

