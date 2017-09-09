'use strict';

module.exports = app => {
    class HomeController extends app.Controller {
        * index() {
            // yield this.ctx.service.inviteCode.create(null);
            yield this.ctx.render('main');
        }
    }
    return HomeController;
};
