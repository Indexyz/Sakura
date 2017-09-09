'use strict';

module.exports.range = (end = 1, begin = 0, step = 1) => {
    const ret = [];
    let x;
    for (x = begin; (end - x) * step > 0; x += step) {
        ret.push(x);
    }

    return ret;
};
