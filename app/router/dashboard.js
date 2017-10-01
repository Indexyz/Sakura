'use strict';

module.exports = app => {
    app.get('/dashboard', app.controller.dashboard.index.get);

    app.get('/dashboard/invite', app.controller.dashboard.invite.get);
    app.post('/dashboard/invite/create', app.controller.dashboard.invite.generatorCode);

    app.get('/dashboard/index/signup', app.controller.dashboard.index.signup);
};
