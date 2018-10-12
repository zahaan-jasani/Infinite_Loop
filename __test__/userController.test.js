const request = require('supertest');
const App = require('../src/server/server');

const HOST = 'http://localhost:3000';

describe('Test the root path', () => {
  it('It should response the GET method', (done) => {
    request(HOST).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});


describe('post', () => {
  it('responds to valid request with 200 status and application/json content type', (done) => {
    request(HOST)
      .get('/games')
      .expect('Content-Type', /application\/json/)
      .expect(200, done);
  });
  it('should return the object created in the database', (done) => {
    const testObj = { name: 'Pablo' };
    request(HOST)
      .post('/createUser')
      .send(testObj)
      .then((res) => {
        expect(res.body.name).toEqual(testObj.name);
        done();
      });
  });
  it('responds to invalid request with error and 400 status', (done) => {
    const testObj = {name: "hello", test: "hi"};
    request(HOST)
      .post('/createUser')
      .send(testObj)
      .then((res) => {
        expect(res.status).toBe('400');
      })
  })
});
