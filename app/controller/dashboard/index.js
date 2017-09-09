'use strict';

module.exports = app => {
    class DashboardIndexController extends app.Controller {
        * get() {
            yield this.ctx.render('dashboard/index', {
                traffic: {
                    total: yield this.ctx.service.produce.getUserTraffic(this.ctx.user),
                    used: yield this.ctx.service.produce.getUserUsed(this.ctx.user),
                },
            });
        }

        * signup() {
            const traffic = this.ctx.service.user.signup(this.ctx.user);
            this.ctx.body = { success: 1, traffic }
        }
    }
    return DashboardIndexController;
};
