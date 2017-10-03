'use strict';
const r2 = require('r2');
const FormData = require('form-data');

module.exports = app => {
    class Coinhive extends app.Service {
        * verify(token) {
            const form = new FormData();
            form.append('secret', app.config.protect.coinhive.secret);
            form.append('hashes', app.config.protect.coinhive.pre_request);
            form.append('token', token);

            const req = r2.post('https://api.coinhive.com/token/verify', {
                body: form,
            });
            const res = yield req.json;
            return res.success === true;
        }
    }

    return Coinhive;
};
