const fs = require("fs");

class reader {
    static readJsonFile(filePath){
        const rawData = fs.readFileSync(filePath);
        const explorers = JSON.parse(rawData);
        return explorers;
    }
}
module.exports = reader;
