'use strict';

module.exports = app => {
    class CodeController extends app.Controller {
        * get() {
            const codes = yield this.ctx.service.inviteCode.getAvliablePublicCode();
            yield this.ctx.render('auth/code', {
                codes,
            });
        }
    }
    return CodeController;
};
