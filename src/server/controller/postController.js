//server exported in order to close database after tests are done
const  app  = require('../postgresql.js');

module.exports = {

  /**
   * gets all posts from SQL database, returns array of posts to client
   * @param {Object} req request object 
   * @param {Object} res response object
   * @param {function} next sends req and res to next middleware
   */
  getPosts(req, res, next) {
    app.any('SELECT * FROM "post"')
      .then(data => {
        res.locals.data = data;
        return next();
      })
      .catch(err => {
        return next(err);
      });
  },
  /**
   * creates post in database, sending relevant info to be saved
   * @param {object} req request object
   * @param {object} res response object
   * @param {function} next sends req and res to next middleware
   */
  createPost(req, res, next) {
    if(Object.keys(req.body).length === 8){
      db.one("INSERT INTO post (createdby, problem, expect, tried, suspect, status, topic) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", [req.body.createdby, req.body.problem, req.body.expect, req.body.tried, req.body.suspect, req.body.status, req.body.topic])
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
  /**
   * change status by incrementing status id by one, indicating open -> claimed, or claimed -> closed.
   * If the post is being claimed by fellow of other user, that fellow/user's id is added to the 'resolvedby' column of post.
   * @param {object} req request object
   * @param {object} res response object
   * @param {function} next sends req and res to next middleware
   */
  changeStatus(req, res, next) {
    if(Object.keys(req.body).length === 3){
      db.one("UPDATE post SET status=$1, resolvedby=$2 WHERE id=$3 RETURNING status", [req.body.status + 1, req.body.userid, req.body.postid])
      .then(data => {
        res.locals.data = data;
        next();
      })
      .catch(err => {
        next(err);
      })
    } else{
      res.status(400).send('Invalid status change');
    }
  }
}