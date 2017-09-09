'use strict';

module.exports = app => {
    class LoginController extends app.Controller {
        * get() {
            yield this.ctx.render('auth/login');
        }
        * post() {
            const { email, password } = this.ctx.request.body;
            const user = yield this.ctx.model.User.findOne({
                email,
                password: this.ctx.service.user.getSaltedPassword(password),
            });
            if (user) {
                this.ctx.body = { success: 1 };
                this.ctx.session.user = user._id;
                return;
            }
            this.ctx.status = 404;
            this.ctx.body = { success: 0, error: 'Not found user' };
        }
    }
    return LoginController;
};
