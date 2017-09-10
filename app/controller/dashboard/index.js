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
            try {
                const traffic = yield this.ctx.service.user.signup(this.ctx.user);
                this.ctx.body = {
                    success: 1, traffic: this.ctx.utils.flow.flowAutoShow(traffic),
                };
            } catch (error) {
                this.ctx.body = { success: 0, error: error.message };
                this.ctx.status = 403;
            }
        }
    }
    return DashboardIndexController;
};
