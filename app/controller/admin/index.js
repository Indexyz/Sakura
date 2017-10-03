'use strict';

module.exports = app => {
    class AdminIndexController extends app.Controller {
        * get() {
            yield this.ctx.render('admin/index');
        }

    }
    return AdminIndexController;
};
