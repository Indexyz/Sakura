'use strict';
module.exports = app => {
    const { mongoose } = app;

    const userSchema = new mongoose.Schema({
        userName: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        invite: mongoose.Schema.Types.ObjectId,
        inviteNumber: { type: Number, default: 0 },
    });

    return mongoose.model('Users', userSchema);
};
