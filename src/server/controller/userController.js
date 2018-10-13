const db = require('../postgresql.js');

module.exports = {
 /**
   * creates new user record and returns the created record
   * @param { Object } req request object 
   * @param { object } res response object
   * @param { function } next function to go to next middlewear 
   */
  createUser(req, res, next) {
    //check request has correct body format
    if(Object.keys(req.body).length === 2 && req.body.name && req.body.role) {
      //if role equals to user, create user 
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
        // if not user create helper
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
    } else {
      return res.status(400).send();
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