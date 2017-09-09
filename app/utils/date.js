'use strict';

function getDay(date) {
    return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
}

function isToday(date) {
    if (date === null) {
        return false;
    }
    if (getDay(date) === getDay(new Date())) {
        return true;
    }
    return false;
}


module.exports = {
    isToday,
    getDay,
};
