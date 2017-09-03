'use strict';

const path = require('path');

module.exports = appInfo => {
    const config = {};

    // should change to your own
    config.keys = appInfo.name + '_1504368413653_2654';

    config.view = {
        mapping: {
            '.nj': 'nunjucks',
        },
        root: [
            path.join(appInfo.baseDir, 'app/view'),
        ].join(','),
        defaultViewEngine: 'nunjucks',
        defaultExtension: '.nj',
    };
    // add your config here

    config.mongoose = {
        url: 'mongodb://127.0.0.1/example',
        options: {},
    };

    config.salt = 'ChangeMe';

    return config;
};
