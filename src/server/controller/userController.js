const connection =
  'postgres://lrbqolbi:AoiXpqFJzYSWj75UH2IgIppEF8QLPzGO@elmer.db.elephantsql.com:5432/lrbqolbi';

const pgp = require('pg-promise')(/*options*/);
const db = pgp(connection);

module.exports = {
  createUser(req, res, next) {
    if(req.body.role === 'user') {
      db.one("INSERT INTO user name VALUES ($1) RETURNING (id, name)", req.body.name)
      .then(data => {
        return res.locals.data = data;
      })
      .catch(err => {
        console.log('ERROR: ', err)
        return next(err);
      });
    } else{
      db.one("INSERT INTO helper name VALUES ($1) RETURNING (id, name)", req.body.name)
      .then(data => {
        return res.locals.data = data;
      })
      .catch(err => {
        console.log('ERROR: ', err)
        return next(err);
      });
    }
  },
  verifyUser(req, res, next) {
    db.any("SELECT id, name FROM user WHERE name = $1", req.body.name)
    .then((data) => {
      if(data.length === 0) {
        return next();
      } else{
        return res.json(data);
      }
    })
    .catch((err) => {
      console.log('ERROR: ', err)
      next(err);
    })
  },
}