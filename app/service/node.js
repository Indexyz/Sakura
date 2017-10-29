'use strict';


module.exports = app => {
    class Node extends app.Service {
        * create(name, address, rate, enable, level, kind, detail) {
            const node = new this.ctx.model.Node({
                name,
                address,
                rate,
                enable,
                level,
                detail,
                kind: Number(kind),
            });
            yield node.save();
            return node;
        }

        * delete(id) {
            yield this.ctx.model.Node.findByIdAndRemove(id);
        }

        * get(id) {
            return yield this.ctx.model.Node.findById(id);
        }

        * getUserNode(user) {
            return yield this.ctx.model.Node.find({
                enable: true,
                level: {
                    $lte: user.level,
                },
            });
        }
    }

    return Node;
};
