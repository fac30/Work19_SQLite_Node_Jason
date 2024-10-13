const db = require("../database/db.js");

const insert_task = db.prepare(`
	INSERT INTO tasks (content)
	VALUES (?)
  RETURNING id, content, created_at
`);

function createTask(content) {
  return insert_task.get(content);
}

createTask("Eat a banana");

let tasks = db.prepare("SELECT * FROM tasks").all();
console.log(tasks);

createTask("Send mum flowers");

tasks = db.prepare("SELECT * FROM tasks").all();
console.log(tasks);

module.exports = { createTask };