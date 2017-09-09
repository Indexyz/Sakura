'use strict';

module.exports = app => {
    class LogoutController extends app.Controller {
        * get() {
            this.ctx.session.user = null;
            this.ctx.redirect('/');
        }
    }
    return LogoutController;
};
