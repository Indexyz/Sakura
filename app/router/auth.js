'use strict';
module.exports = app => {
    app.get('/auth/login', app.controller.auth.login.get);
    app.post('/auth/login', app.controller.auth.login.post);

    app.get('/auth/register', app.controller.auth.register.get);
    app.post('/auth/register', app.controller.auth.register.post);

    app.get('/auth/logout', app.controller.auth.logout.get);

    app.get('/auth/code', app.controller.auth.code.get);
};
