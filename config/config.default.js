'use strict';

const path = require('path');

const KB = 1024,
    MB = KB * KB,
    GB = MB * KB;

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

    config.middleware = [ 'user', 'utils' ];
    config.middleware = [ 'user', 'utils', 'coinhive' ];

    config.coinhive = {
        match(ctx) {
            return ctx.path.startsWith('/auth');
        },
        site_key: '',
        secret: '',
        pre_request: 256,
    }
    // add your config here

    config.mongoose = {
        url: 'mongodb://127.0.0.1/sakura',
        options: {},
    };

    Object.assign(config, {
        salt: 'ChangeMe',
        port: {
            max: 65565,
            min: 10000,
        },
        produce: {
            initTraffic: 10 * GB,
        },
        signup: {
            enable: true,
            // Size is MB
            max: 128,
            min: 32,
        },
        shadowsocks: {
            method: 'rc4-md5',
        },
    });

    return config;
};
