'use strict';


module.exports = app => {
    class InviteCode extends app.Service {
        * create(name, address, rate, enable, level, kid, detail) {
            const node = new this.ctx.model.Node({
                name,
                address,
                rate,
                enable,
                level,
                detail,
                kid: Number(kid),
            });
            yield node.save();
            return node;
        }

        * delete(id) {
            yield this.ctx.model.Node.findByIdAndRemove(id);
        }
    }

    return InviteCode;
};
