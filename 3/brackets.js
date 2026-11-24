const pairs = {
    ")": "(",
    "]": "[",
    "}": "{"
};
function validBrackets(a) {
    const stack = [];
    if (a.length % 2 !== 0) {
        return false;
    }
    for (const item of a) {
        if (item === "(" || item === "[" || item === "{") {
            stack.push(item);
        }
        else if (item in pairs) {
            if (stack.pop() !== pairs[item]) {
                return false;
            }
        }
        else {
            return false;
        }
    }   
    if (stack.length === 0) {
        return true;
    } 
    else {
        return false;
    }
}

module.exports = validBrackets;