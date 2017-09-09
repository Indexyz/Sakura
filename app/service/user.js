'use strict';
const stringUtils = require('../utils/string');
const listUtils = require('../utils/list');
const dateUtils = require('../utils/date');

module.exports = app => {
    class User extends app.Service {
        * getNotUsedPort() {
            const users = yield this.ctx.model.User.find({});
            users.map(user => user.port);
            const portRange = listUtils.range(app.config.port.max, app.config.port.min);
            for (const item of users) {
                portRange.remove(item);
            }

            if (portRange.length === 0) {
                throw new Error('Port pool is empty');
            }

            return portRange[Math.floor(
                Math.random() * (portRange.length + 1)
            )];

        }
        * create(username, password, email, code) {
            const inviteCode = yield this.ctx.model.InviteCode.findOne({ code });

            if (inviteCode) {
                const produce = yield this.ctx.service.produce.getInitProduce();
                const user = new this.ctx.model.User({
                    username,
                    password,
                    email,
                    invite: inviteCode._id,
                    linkPassword: stringUtils.randomString(8),
                    port: yield this.getNotUsedPort(),
                    initProduce: produce._id,
                });

                inviteCode.used = true;
                yield user.save();
                yield inviteCode.save();

                return user;
            }
            throw new Error('Invite code is not found');
        }

        getSaltedPassword(password) {
            return this.ctx.model.User.getSaltedPassword(password);
        }

        * signup(user) {
            console.log('a')
            if (dateUtils.isToday(user.lastSignup)) {
                return 0;
            }
            if (!app.config.signup.enable) {
                return 0;
            }
            let traffic = Math.ceil(
                Math.random() * (app.config.signup.max - app.config.signup.min)
            ) + app.config.signup.min;

            traffic *= this.ctx.utils.flow.type.MB;
            console.log(traffic)
            const docment = yield this.ctx.model.User.findOne({ _id: user._id });

            yield this.ctx.service.produce.addTrafficTo(
                docment.initProduce, traffic
            );
            return traffic;
        }
    }
    return User;
};
