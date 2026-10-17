// Built-in Module
const os = require('node:os');
console.log("FreeMemory : ",os.freemem());
console.log("Home Directory: ",os.homedir());
// Computer(PC) Name
console.log("HostName: ", os.hostname());
console.log("OS Platform : ", os.platform());
console.log("OS Relase Version : ", os.release());
console.log("Temporary Directory: ",os.tmpdir());
console.log("Total Memory: " ,os.totalmem());
console.log("OS Type : ", os.type());
console.log("OS Uptime: ", os.uptime());
console.log("OS Version: ", os.version());
console.log("User Info: ", os.userInfo());
// Processor
console.log("OS Machine: ", os.machine());

