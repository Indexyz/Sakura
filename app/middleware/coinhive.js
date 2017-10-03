'use strict';

module.exports = options => {
    return function* (next) {
        if (this.request.method === 'POST') {
            if (options.site_key !== '') {
                const { token } = this.request.body;
                if (!(yield this.service.coinhive.verify(token))) {
                    this.status = 401;
                    this.body = { success: 0, error: this.__('auth.errors.tokenError') };
                    return;
                }
            }
        }
        return yield next;
    };
};
