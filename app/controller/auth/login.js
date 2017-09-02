'use strict';

module.exports = app => {
    class LoginController extends app.Controller {
        * get() {
            yield this.ctx.render('auth/login');
        }
    }
    return LoginController;
};
