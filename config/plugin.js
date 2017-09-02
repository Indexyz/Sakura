'use strict';

// had enabled by egg
// exports.static = true;

exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks',
};

exports.view = {
    enable: true,
    package: 'egg-view',
};
exports.i18n = {
    defaultLocale: 'zh-CN',
};

exports.mongoose = {
    enable: true,
    package: 'egg-mongoose',
};
