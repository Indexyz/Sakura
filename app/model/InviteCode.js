'use strict';
module.exports = app => {
    const { mongoose } = app;

    const codeSchema = new mongoose.Schema({
        code: { type: String, required: true, unique: true },
        used: { type: Boolean, required: true, default: false },
        date: { type: Date, required: true, default: Date.now },
        owner: { type: mongoose.Schema.Types.ObjectId, required: false },
    });

    return mongoose.model('Codes', codeSchema);
};
