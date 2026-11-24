function deepClone(object) {
    const visited = new WeakMap();

    function clone(value) {
        if (value === null || typeof value !== "object") {
            return value;
        }

        if (visited.has(value)) {
            return visited.get(value);
        }

        let copy;

        if (value instanceof Date) {
            copy = new Date(value.getTime());
        } else if (value instanceof Map) {
            copy = new Map();
        } else if (value instanceof Set) {
            copy = new Set();
        } else if (Array.isArray(value)) {
            copy = [];
        } else {
            copy = {};
        }

        visited.set(value, copy);

        if (value instanceof Map) {
            for (const [key, item] of value) {
                copy.set(clone(key), clone(item));
            }
        }

        if (value instanceof Set) {
            for (const item of value) {
                copy.add(clone(item));
            }
        }

        for (const key of Reflect.ownKeys(value)) {
            copy[key] = clone(value[key]);
        }

        Object.setPrototypeOf(copy, Object.getPrototypeOf(value));

        return copy;
    }

    return clone(object);
}

module.exports = deepClone;