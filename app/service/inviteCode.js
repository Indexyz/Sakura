'use strict';
const uuid = require('uuid');

module.exports = app => {
    class InviteCode extends app.Service {
        * create(user) {
            const codeUUID = uuid.v4();
            const code = new this.ctx.model.InviteCode({
                owner: user === null ? null : user._id,
                code: codeUUID,
            });
            yield code.save();
            return code;
        }

        * getAvliablePublicCode() {
            return yield this.ctx.model.InviteCode.find({
                used: false,
                owner: null,
            });
        }
    }
    return InviteCode;
};
