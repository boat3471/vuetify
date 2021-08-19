const fs = require('fs');
const path = require('path');
const vuetifyPak = require('../package.json');


const apiGeneratorPath = path.resolve(__dirname, '../../api-generator/package.json');
const apiGeneratorPak = require(apiGeneratorPath);
apiGeneratorPak.version = vuetifyPak.version;
fs.writeFileSync(apiGeneratorPath, JSON.stringify(apiGeneratorPak, null, 2))

const modulePublishPath = path.resolve(__dirname, '../../module-publish/package.json');
const modulePublishPak = require(modulePublishPath);
modulePublishPak.version = vuetifyPak.version;
fs.writeFileSync(modulePublishPath, JSON.stringify(modulePublishPak, null, 2))
