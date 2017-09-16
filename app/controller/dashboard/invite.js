'use strict';

module.exports = app => {
    class DashboardInviteController extends app.Controller {
        * get() {
            yield this.ctx.render('dashboard/invite');
        }
    }
    return DashboardInviteController;
};
