const db = require("../database/db.js");

const insert_album = db.prepare("INSERT INTO albums (content) VALUES (?)");

function createAlbum(content) {
  insert_album.run(content);
}

module.exports = { createAlbum };