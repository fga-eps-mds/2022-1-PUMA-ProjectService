const axios = require('axios');
const controller = require('../src/controller/SubjectController');
const controller1 = require('../src/controller/ProjectController');

const constants = require('./utils/constants');
const subjectMock = constants.subjectMock;
const mockProject = constants.projectMock;

const assert = require('assert');

describe('Test Subject requests', () => {
  test('get Subjects', async function () {
    jest.setTimeout(30000);
    controller.getSubjects().then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    });
  });

  test('get Professors', async function () {
    jest.setTimeout(30000);
    controller.getProfessors().then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    });
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