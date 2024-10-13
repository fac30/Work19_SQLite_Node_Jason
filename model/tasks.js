const db = require("../database/db.js");

const insert_task = db.prepare(/* sql */`
  INSERT INTO tasks (content, complete)
  VALUES ($content, $complete)
  RETURNING id, content, created_at
`);

function createTask(task) {
  return insert_task.get(task);
}

module.exports = { createTask };