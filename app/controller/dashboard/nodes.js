'use strict';

module.exports = app => {
    class DashboardNodeController extends app.Controller {
        * get() {
            const nodes = yield this.ctx.service.node.getUserNode(this.ctx.user);
            yield this.ctx.render('dashboard/nodes', { nodes });
        }

        * display() {
            const { id } = this.ctx.params;
            const node = yield this.ctx.service.node.get(id);
            yield this.ctx.render('dashboard/node-display', { node })
        }
    }
    return DashboardNodeController;
};
