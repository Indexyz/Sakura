'use strict';
module.exports = app => {
    const { mongoose } = app;

    const sessionSchema = new mongoose.Schema({
        key: String,
        value: Object,
        maxAge: Number,
    });

    return mongoose.model('_session', sessionSchema);
};
