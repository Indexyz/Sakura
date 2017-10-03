'use strict';

module.exports = app => {
    app.get('/', 'home.index');

    require('./router/auth')(app);
    require('./router/dashboard')(app);
    require('./router/admin')(app);
};
