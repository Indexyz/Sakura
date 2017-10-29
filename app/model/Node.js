'use strict';
module.exports = app => {
    const { mongoose } = app;

    const nodeSchema = new mongoose.Schema({
        name: { type: String, required: true, unique: true },
        kind: { type: Number, required: true, default: 0 },
        address: { type: String, required: true },
        isSignalPort: { type: Boolean, defalut: false },
        rate: { type: Number, required: true, default: 1 },
        level: { type: Number, default: 0 },
        enable: { type: Boolean, default: true },
        state: { type: Number, default: 0, required: true },
        detail: String,
    });

    return mongoose.model('Nodes', nodeSchema);
};
