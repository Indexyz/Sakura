'use strict';

module.exports = app => {
    class RegisterController extends app.Controller {
        * get() {
            yield this.ctx.render('auth/register');
        }
    }
    return RegisterController;
};
