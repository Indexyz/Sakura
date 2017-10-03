'use strict';

module.exports = () => {
    // Injuret utils function to ctx (can call in template)
    return function* (next) {
        const utils = [ 'string', 'list', 'math', 'flow', 'date', 'enum' ];
        this.utils = {};
        for (const item of utils) {
            this.utils[item] = require('../utils/' + item);
        }

        return yield next;
    };
};
