'use strict';

module.exports = app => {
    const { mongoose } = app;

    const userSchema = new mongoose.Schema({
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        invite: mongoose.Schema.Types.ObjectId,
        inviteNumber: { type: Number, default: 0 },
    });

    userSchema.pre('save', function(next) {
        // SHA1 password
        if (!this.isModified('password')) return next();
        this.password = this.service.user.getSaltedPassword(this.password);
        console.log(this.password);
        return next();
    });

    return mongoose.model('Users', userSchema);
};
