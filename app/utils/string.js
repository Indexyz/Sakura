'use strict';

module.exports.randomString = (stringLen = 10) => {
    const CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let ret = '';
    while (ret.length !== stringLen) {
        ret += CHAR.charAt(
            Math.floor(
                Math.random() * (CHAR.length + 1)
            )
        );
    }
    return ret;
};
