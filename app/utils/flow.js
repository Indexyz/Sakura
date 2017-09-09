'use strict';
const { round } = require('./math');

const KB = 1024,
    MB = KB * KB,
    GB = MB * KB,
    TB = GB * KB,
    PB = TB * KB;

module.exports.flowAutoShow = (value = 0) => {
    if (value > PB) {
        return round(value / PB) + ' PB';
    } else if (value > TB) {
        return round(value / TB) + ' TB';
    } else if (value > GB) {
        return round(value / GB) + ' GB';
    } else if (value > KB) {
        return round(value / KB) + ' KB';
    }
    return round(value) + ' B';
};


module.exports.type = {
    KB, MB, GB, TB, PB,
};
