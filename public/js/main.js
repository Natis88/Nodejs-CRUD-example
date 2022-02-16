const fs = require('fs');
const path = require('path');

module.exports.write = function writeToJson(res, dir, location, db) {
    try {
        fs.writeFileSync(path.join(dir, location), JSON.stringify(db, null, 2), 'utf8');
        console.log("The file was saved!");
    } catch (err) {
        res.send("An error has ocurred when saving the file.");
    }

}