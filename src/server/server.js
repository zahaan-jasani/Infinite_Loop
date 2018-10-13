// initialize connection with PostgreSQL database
const express = require ('express');
const app = express();
const userController = require('./controller/userController');
const postController = require('./controller/postController');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/createuser',
  userController.verifyUser,
  userController.createUser, 
  (req, res) => {
    res.status(200).json(res.locals.data);
  }
)
app.post('/createpost', 
  postController.createPost, 
  (req, res) => {
    res.status(200).json(res.locals.data);
});
app.get('/home', 
  postController.getPosts, 
  (req, res) => {
    res.status(200).json(res.locals.data);
});
app.patch('/status', 
  postController.changeStatus, 
  (req, res) => {
    res.status(200).json(res.locals.data);
});
app.use((err, req, res, next) => {
  res.status(400).send(err);
});
app.use(express.static(__dirname + '/../../dist'));

app.listen(3000, () => {
  console.log('Listening on port 3000...');
} );

