'use strict';
module.exports = app => {
    const { mongoose } = app;

    const logSchema = new mongoose.Schema({
        kid: { type: Number, required: true, default: 0 },
        tiggerUser: mongoose.Schema.Types.ObjectId,
        join: { type: Date, required: true, default: Date.now },
        data: String,
    });

    return mongoose.model('logs', logSchema);
};
