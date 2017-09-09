'use strict';
class SessionStore {
    constructor(app) {
        this.app = app;
    }
    * get(key) {
        const res = yield this.app.model.Session.findOne({
            key,
        });
        return res.value;
    }
    * set(key, value, maxAge) {
        const oldDocment = yield this.app.model.Session.findOne({ key });
        if (!oldDocment) {
            const docment = new this.app.model.Session({
                key,
                value,
                maxAge,
            });

            try {
                yield docment.save();
            } catch (err) {
                /**
                * DO NOTHING
                * Sometimes some application like CURL or others do not accept cookies
                * than it will let key been null, the save will failure, it's fine.
                */
            }
            return;
        }
        oldDocment.value = value;
        oldDocment.maxAge = maxAge;
        yield oldDocment.save();
    }
    * destroy(key) {
        yield this.app.model.Session.remvoe({ key });
    }
}

module.exports = SessionStore;
