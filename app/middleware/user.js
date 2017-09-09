'use strict';

module.exports = () => {
    return function* (next) {
        if (this.session.user) {
            const user = yield this.model.User.findOne({ _id: this.session.user });
            if (!user) {
                this.session.user = null;
            }
            // Set ctx user
            this.user = user;
        }
        return yield next;
    };
};
