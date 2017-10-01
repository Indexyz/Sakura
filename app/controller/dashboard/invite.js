'use strict';

module.exports = app => {
    class DashboardInviteController extends app.Controller {
        * get() {
            const codes = yield this.ctx.service.inviteCode.getUserCode(this.ctx.user);
            yield this.ctx.render('dashboard/invite', { codes });
        }

        * generatorCode() {
            const { number } = this.ctx.request.body;
            let codes = yield this.ctx.utils.list.range(number).map(() => this.ctx.service.inviteCode.create(this.ctx.user));

            codes = codes.map(code => code.code);

            this.ctx.body = { codes };
        }
    }
    return DashboardInviteController;
};
