'use strict';

function* counter(ctx, user, field) {
    let ret = 0;
    for (const item of [ user.initProduce, ...user.produce ]) {
        const produce = yield ctx.model.Produce.findOne({ _id: item });
        if (produce) {
            if (produce[field]) {
                ret += produce[field];
            }
        }
    }
    return ret;
}

module.exports = app => {
    class Produce extends app.Service {
        * getInitProduce() {
            const defaultProduce = yield new this.ctx.model.Produce({
                defalut: true,
                traffic: app.config.produce.initTraffic,
                used: 0,
            }).save();

            return defaultProduce;
        }

        * getUserTraffic(user) {
            return yield counter(this.ctx, user, 'traffic');
        }
        * getUserUsed(user) {
            return yield counter(this.ctx, user, 'used');
        }

        * addTrafficTo(produce, traffic) {
            const tp = yield this.ctx.model.Produce.findOne({ _id: produce });

            tp.traffic += traffic;

            return yield tp.save();
        }
    }
    return Produce;
};
