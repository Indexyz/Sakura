'use strict';
module.exports = app => {
    app.get('/auth/login', app.controller.auth.login.get);
    app.get('/auth/register', app.controller.auth.register.get);
};
