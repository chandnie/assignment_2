const os = require("os")


console.log("OS Architecture: " + os.arch());

console.log("Free Memory: " + (os.freemem() / (Math.pow(1024,3))) + "GB");

console.log("Total OF memory: " + (os.totalmem() / (Math.pow(1024,3))) + "GB");

console.log("OS Platform: " + os.platform());

console.log("Information of user: ");

console.log("User Name: "  + os.userInfo("utf-8").username);

console.log("Directory: "  + os.userInfo("utf-8").homedir);
