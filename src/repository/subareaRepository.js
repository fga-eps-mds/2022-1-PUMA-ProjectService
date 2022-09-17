/* eslint-disable no-multi-str */
const db = require('../config/db');

module.exports = {
  addSubarea: (input) => new Promise((resolve, reject) => {
    const { knowledgeAreaId, description } = input;
    db.query(
      'INSERT INTO SUBAREA(knowledgeAreaId, description) VALUES ($1,$2) RETURNING *',
      [knowledgeAreaId, description],
    ).then((response) => {
      resolve(response.rows[0]);
    }).catch((e) => reject(e));
  }),

  addSubjectSubareaRelation: (input) => new Promise((resolve, reject) => {
    const { subareaid, subjectid } = input;
    db.query(
      'INSERT INTO identifies(subareaid, subjectid) VALUES ($1,$2) RETURNING *',
      [subareaid, subjectid],
    ).then((response) => {
      resolve(response.rows);
    })
      .catch((e) => reject(e));
  }),

  getSubareas: () => new Promise((resolve, reject) => {
    db.query(
      'SELECT * from subarea',
    ).then((response) => {
      resolve(response.rows);
    }).catch((e) => reject(e));
  }),

  getSubareasOfSubject: (input) => new Promise((resolve, reject) => {
    const { subjectid } = input;
    db.query(
      'select sab.subareaid, sab.description from subject sb \
      inner join identifies id on sb.subjectid = id.subjectid \
      inner join subarea sab on id.subareaid = sab.subareaid \
      where sb.subjectid = $1',
      [subjectid],
    ).then((response) => {
      resolve(response.rows);
    }).catch((e) => reject(e));
  }),

  removeSubareasOfSubject: (input) => new Promise((resolve, reject) => {
    const { subjectid } = input;
    db.query(
      'delete from identifies id \
      where id.subjectid in \
      ( \
        select sb.subjectid \
        from subject sb \
        inner join identifies id \
        on sb.subjectid = id.subjectid \
        where sb.subjectid = $1 \
      ) \
      ',
      [subjectid],
    ).then((response) => {
      resolve(response.rows);
    }).catch((e) => reject(e));
  }),
};
