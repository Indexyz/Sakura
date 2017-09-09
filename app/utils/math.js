'use strict';

module.exports.round = (value = 0, eps = 2) => {
    let t = 1;
    for (; eps > 0; t *= 10, eps--);
    for (; eps < 0; t /= 10, eps++);
    return Math.round(value * t) / t;
};
