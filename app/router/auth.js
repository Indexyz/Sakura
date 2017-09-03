'use strict';
module.exports = app => {
    app.get('/auth/login', app.controller.auth.login.get);

    app.get('/auth/register', app.controller.auth.register.get);
    app.post('/auth/register', app.controller.auth.register.post);

    app.get('/auth/code', app.controller.auth.code.get);
};
