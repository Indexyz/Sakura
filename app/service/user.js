'use strict';
module.exports = app => {
    class User extends app.Service {
        * create(username, password, email, code) {
            const inviteCode = yield this.ctx.model.InviteCode.findOne({ code });
            if (inviteCode) {
                const user = new this.ctx.model.User({
                    username,
                    password,
                    email,
                    invite: inviteCode._id,
                });

                inviteCode.used = true;
                yield user.save();
                yield inviteCode.save();

                return user;
            }
            throw new Error('Invite code is not found');
        }
    }
    return User;
};
