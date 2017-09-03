'use strict';

module.exports = app => {
    class RegisterController extends app.Controller {
        * get() {
            yield this.ctx.render('auth/register');
        }

        * post() {
            const { username, email, code, password } = this.ctx.request.body;
            try {
                yield this.ctx.service.user.create(username, password, email, code);
                this.ctx.body = { success: true };
            } catch (err) {
                this.ctx.status = 403;
                this.ctx.body = { success: false, error: err.message };
            }
        }
    }
    return RegisterController;
};
