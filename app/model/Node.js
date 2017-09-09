'use strict';
module.exports = app => {
    const { mongoose } = app;

    const nodeSchema = new mongoose.Schema({
        name: { type: String, required: true, unique: true },
        kid: { type: Number, required: true, default: 0 },
        address: { type: String, required: true },
        port: Number,
        isSignalPort: { type: Boolean, defalut: false },
        rate: { type: Number, required: true, default: 1 },
    });

    return mongoose.model('Nodes', nodeSchema);
};
