const path = require('node:path');

//Return basename
const tempPath = path.basename('C:\\temp\\myfile.html');
const dirPath = path.dirname('C:\\temp\\myfile.html');
const myDirPath = path.dirname(__dirname);
const extensionName = path.extname('C:\\temp\\myfile.html');
const myExtName = path.extname(__filename);
// Returns: 'C:\\temp\\myfile.html'
console.log("BaseName : ",tempPath);
console.log("Directory Name: ",dirPath);
console.log("My Current Directory Name: ",myDirPath);
console.log("Extension Name: ",extensionName);
console.log("My Current File Extension Name: ",myExtName);

