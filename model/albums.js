const db = require("../database/db.js");

const insert_album = db.prepare(/* sql */`
  INSERT INTO albums (title, artist, year)
  VALUES ($title, $artist, $year)
  RETURNING id, title, artist, year
`);

function createAlbum(album) {
  return insert_album.get(album);
}

module.exports = { createAlbum };