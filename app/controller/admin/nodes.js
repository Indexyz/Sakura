'use strict';

module.exports = app => {
    class AdminNodeController extends app.Controller {
        * get(message, error) {
            if (typeof message !== 'string') {
                message = undefined;
            }
            const nodes = yield this.ctx.model.Node.find({});
            yield this.ctx.render('admin/nodes', { nodes, message, error });
        }
        * createNodePage() {
            yield this.ctx.render('admin/create-node');
        }

        * create() {
            const { name, address, rate, enable, level, kid, detail } = this.ctx.request.body;
            try {
                const node = yield this.ctx.service.node.create(name, address, rate, enable, level, kid, detail);
                this.ctx.body = node;
            } catch (e) {
                this.ctx.status = 413;
                this.ctx.body = { error: e.message };
            }
        }
        * delete() {
            const { id } = this.ctx.params;
            try {
                yield this.ctx.service.node.delete(id);
            } catch (e) {
                return yield this.get(undefined, e.message);
            }
            yield this.get(this.ctx.__('admin.nodes.delete.success'));
        }
        * editNodePage() {
            const { id } = this.ctx.params;
            const node = yield this.ctx.service.node.get(id);
            yield this.ctx.render('admin/edit-node', { node });
        }

        * edit() {
            const { id } = this.ctx.request.body;
            const node = yield this.ctx.service.node.get(id);
            Object.assign(node, this.ctx.request.body);
            yield node.save();

            this.ctx.body = node;
        }
    }
    return AdminNodeController;
};
