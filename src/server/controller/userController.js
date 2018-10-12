const db = require('../postgresql.js')
module.exports = {
  createUser(req, res, next) {
    if(req.body.role === 'user') {
      db.one("INSERT INTO student(name) VALUES ($1) RETURNING (name)", req.body.name)
      .then(data => {
        res.locals.data = data;
        return next();
      })
      .catch(err => {
        console.log('ERROR: ', err)
        return next(err);
      });
    } else{
      db.one("INSERT INTO helper(name) VALUES ($1) RETURNING (name)", req.body.name)
      .then(data => {
        res.locals.data = data;
        return next();
      })
      .catch(err => {
        console.log('ERROR: ', err)
        return next(err);
      });
    }
  },
  verifyUser(req, res, next) {
    db.any('SELECT name FROM student WHERE name = $1', req.body.name)
    .then((data) => {
      if(data.length === 0) {
        return next();
      } else{
        res.locals.data = data;
        return next();
      }
    })
    .catch((err) => {
      console.log('ERROR: ', err)
      next(err);
    })
  },
}