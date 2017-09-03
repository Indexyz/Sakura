'use strict';
const crypto = require('crypto');

module.exports = app => {
    const { mongoose } = app;

    const userSchema = new mongoose.Schema({
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        invite: mongoose.Schema.Types.ObjectId,
        inviteNumber: { type: Number, default: 0 },
    });

    function getSaltedPassword(password) {
        return crypto.createHmac('sha1', app.config.salt)
            .update(password)
            .digest()
            .toString('base64');
    }

    userSchema.pre('save', function(next) {
        // SHA1 password
        if (!this.isModified('password')) return next();
        this.password = getSaltedPassword(this.password);
        return next();
    });

    return mongoose.model('Users', userSchema);
};
