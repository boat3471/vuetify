const fs = require('fs');
const path = require('path');

const packagePath = path.join(__dirname, '..', 'package.json');

const pkg = require(packagePath);
const version = pkg.version || '';
const [, tag = 'latest'] = version.match(/-(.+)\./) || [];

let content = fs.readFileSync(packagePath).toString();

content = content.replace(/"tag":(\s?)"(beta|alpha|rc|(.+))"/, `"tag": "${tag}"`)

fs.writeFileSync(packagePath, content);
