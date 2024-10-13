const db = require("../database/db.js");

const select_tasks = db.prepare(/*sql*/ `
  SELECT id, content, created_at, complete FROM tasks
`);

function listTasks() {
  return select_tasks.all();
}

console.log(listTasks());

module.exports = { listTasks };