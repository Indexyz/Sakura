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
        join: { type: Date, required: true, default: Date.now },
        lastSignup: Date,
        isAdmin: { type: Boolean, default: false },
        level: { type: Number, default: 0 },

        // For shadowsocks connect
        port: { type: Number, required: true },
        linkPassword: { type: String, required: true },
        method: { type: String, required: true, default: app.config.shadowsocks.method },

        // Bill system produces
        initProduce: mongoose.Schema.Types.ObjectId,
        produce: Array,
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
        // this.password = this.ap
        this.password = getSaltedPassword(this.password);
        console.log(this.password);
        return next();
    });

    const model = mongoose.model('Users', userSchema);

    // Bind method to model, because schema.methods is wrong
    model.getSaltedPassword = getSaltedPassword;
    return model;
};
