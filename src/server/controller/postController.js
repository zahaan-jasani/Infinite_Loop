const  db  = require('../postgresql.js');

module.exports = {

  getPosts(req, res, next) {
    db.any('SELECT * FROM "post"')
      .then(data => {
        res.locals.data = data;
        return next();
      })
      .catch(err => {
        return next(err);
      });
  },
  createPost(req, res, next) {
    if(Object.keys(req.body).length === 8){
      db.one("INSERT INTO post (createdby, resolvedby, problem, expect, tried, suspect, status, topic) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", [req.body.createdby, req.body.resolvedby, req.body.problem, req.body.expect, req.body.tried, req.body.suspect, req.body.status, req.body.topic])
      .then(data => {
        res.locals.data = data;
        next();
      })
      .catch(err => {
        next(err);
      })
    } else{
      res.status(400).send('Invalid post');
    }
  },
  changeStatus(req, res, next) {
    if(Object.keys(req.body).length === 2){
      db.one("UPDATE post SET status=$1 WHERE id=$2 RETURNING status", [req.body.status + 1 ,req.body.id])
      .then(data => {
        res.locals.data = data;
        next()
      })
      .catch(err => {
        next(err);
      })
    } else{
      res.status(400).send('Invalid status change');
    }
  }
}