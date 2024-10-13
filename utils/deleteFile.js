const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../db.sqlite');

fs.unlink(filePath, (err) => {
    if (err) {
        console.error(`Error deleting file: ${err.message}`);
        return;
    }
    console.log('File deleted successfully');
});