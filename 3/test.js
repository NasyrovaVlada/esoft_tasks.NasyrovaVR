const validBrackets = require("./brackets");

console.log("():", validBrackets("()"));
console.log("()[]{}:", validBrackets("()[]{}"));
console.log("(]:", validBrackets("(]"));
console.log("([)]:", validBrackets("([)]"));
console.log("{[]}:", validBrackets("{[]}"));
console.log("((()):", validBrackets("((())"));
console.log("пустая строка:", validBrackets(""));
console.log("((:", validBrackets("(("));
console.log(")(", validBrackets(")("));
console.log("привет", validBrackets("привет"));
console.log("1234", validBrackets("1234"));
console.log("(ab)", validBrackets("(ab)"));