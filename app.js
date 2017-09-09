'use strict';

module.exports = app => {
    app.sessionStore = new (require('./app/extend/session-mongo'))(app);
};
