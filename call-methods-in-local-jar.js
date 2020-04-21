let java = require("java");

java.classpath.push("./Simple.jar");

let result = java.callStaticMethodSync("acme.Simple", "helloWorld");
console.log(result);

result = java.callStaticMethodSync("acme.Simple", "add", 1, 2);
console.log(result);

result = java.callStaticMethodSync("acme.Simple", "getName");
console.log(result);

