const os=require('os');

const hostname=os.hostname();
const platform = os.platform();
const arch = os.arch();
const cpu =os.cpus();

console.log(`Hostname = ${hostname}`);
console.log (`platform = ${platform}`);
console.log (`Architechture = ${arch}`);
console.log(`CPU Core = ${cpu}`);