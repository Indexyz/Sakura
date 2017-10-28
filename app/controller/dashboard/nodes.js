'use strict';

module.exports = app => {
    class DashboardNodeController extends app.Controller {
        * get() {
            yield this.ctx.render('dashboard/nodes')
        }
    }
    return DashboardNodeController;
};
