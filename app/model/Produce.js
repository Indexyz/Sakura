'use strict';
module.exports = app => {
    const { mongoose } = app;

    const produceSchema = new mongoose.Schema({
        traffic: { type: Number, defalut: 0 },
        expire: Date,
        defalut: { type: Boolean, defalut: false },
        cycle: Number,
        used: { type: Number, defalut: 0, required: true },
    });

    return mongoose.model('Produces', produceSchema);
};
