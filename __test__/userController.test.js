const request = require('supertest');
const App = require('../src/server/server');

const HOST = 'http://localhost:3000';

describe('Test the root path', () => {
  it('It should response the GET method', (done) => {
    request(HOST).get('/')
    .expect('Content-Type', 'text/html; charset=UTF-8')
    .expect(200, done)
  });
});
describe('post', () => {
  it('responds to valid request with 200 status and application/json content type', (done) => {
    request(HOST)
      .get('/home')
      .then((res) => {
        expect(res)
        expect(res.status).toBe(200);
        done()
      })

  });
  it('should return the object created in the database', (done) => {
    const testObj = { name: 'Pablo', role: 'user' };
    request(HOST)
      .post('/createuser')
      .send(testObj)
      .then((res) => {
        expect(res.body.name).toEqual(testObj.name);
        done();
      });
  });
  it('responds to invalid request with error and 400 status', (done) => {
    const testObj = {name: "hello", test: "hi"};
    request(HOST)
      .post('/createuser')
      .send(testObj)
      .then((res) => {
        expect(res.status).toBe(400);
        done()
      })
  })
});

describe('patch', ()=> {
  it('responds to valid request with 200 status and application/json type', (done) => {
    const statusObj = {postid: 1, userid: 1, status: 2};
    request(HOST)
      .patch('/status')
      .send(statusObj)
      .then((res) => {
        expect(res.status).toBe(200);
        done()
      })
  })
  it('it should return the updated object to the client', (done) => {
    const statusObj = {postid: 1, userid: 1, status: 1};
    request(HOST)
      .patch('/status')
      .send(statusObj)
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual({status: 2});
        done()
      })
  })
  it('return status 400 if body is invalid', (done) => {
    const statusObj = {id: 1, state: 2};
    request(HOST)
      .patch('/status')
      .send(statusObj)
      .then((res) => {
        expect(res.status).toBe(400);
        done()
      })
  })
})
