const axios = require('axios');
const assert = require('assert');
const request = require('supertest');
const shell = require('shelljs');

const controller = require('../src/controller/SubjectController');
const controller1 = require('../src/controller/ProjectController');

const constants = require('./utils/constants');
const subjectMock = constants.subjectMock;
const mockProject = constants.projectMock;

const app = require('../src/app');

/* beforeAll(async () => {
  console.log(process.env.DB_URL)
  shell.exec(`env user=${process.env.DB_USERNAME} db=${process.env.DB_DATABASE} sh database/db_script.sh`);
}); */

describe('Test Subject requests', () => {
  test('get Subjects', async function () {
    jest.setTimeout(30000);
    const res = await request(app).get('/subject').expect(200)
  });

  test('get keyword', async function () {
    jest.setTimeout(30000);
    const res = await request(app).get('/subject/keyword').expect(200)
  });

  test('get subareas', async function () {
    jest.setTimeout(30000);
    const res = await request(app).get('/subareas').expect(200)
  });

  test('get knowledgeareas', async function () {
    jest.setTimeout(30000);
    const res = await request(app).get('/knowledgeareas').expect(200)
  });

  test('get professors', async function () {
    jest.setTimeout(30000);
    const res = await request(app).get('/professors').expect(200)
  });

  test('get Subjects id 1', async function () {
    jest.setTimeout(30000);
    const res = await request(app).get('/subject/1').expect(200)
  });
  /* test('Should get subjects', async function () {
    const response = await axios({
      url: 'http://localhost:3000/subject',
      method: 'get'
    });

    expect(response.status).toBe(200);

    const subjects = response.data;
    expect(subjects).toHaveLength(2);
  });

  test('Should get list of keywords', async function () {
    const response = await axios({
      url: 'http://localhost:3000/subject/keywords',
      method: 'get'
    });

    expect(response.status).toBe(200);    
  })

  test('Should get list of keywords', async function () {
    const response = await axios({
      url: 'http://localhost:3000/subareas',
      method: 'get'
    });

    expect(response.status).toBe(200);    
  })

  test('Should get list of keywords', async function () {
    const response = await axios({
      url: 'http://localhost:3000/knowledgeareas',
      method: 'get'
    });

    expect(response.status).toBe(200);    
  })

  test('Should get list of keywords', async function () {
    const response = await axios({
      url: 'http://localhost:3000/professors',
      method: 'get'
    });

    expect(response.status).toBe(200);    
  })

  test('Should get list of keywords', async function () {
    const response = await axios({
      url: 'http://localhost:3000/subject/1',
      method: 'get'
    });

    expect(response.status).toBe(200);    
  }) */
});