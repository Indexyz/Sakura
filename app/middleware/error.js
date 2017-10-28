'use strict';

module.exports = (options, app) => {
    return async function errorHandle(ctx, next) {
        try {
            await next();
        } catch (error) {
            app.emit('error', error, this);
            if (error.status && error.status !== 500) {
                ctx.status = error.status;
            } else {
                ctx.status = 500;
            }
            if (ctx.request.header.accept.indexOf('application/json') !== -1) {
                ctx.body = {
                    success: false,
                    message: error.message,
                };
            } else {
                await ctx.render('error', { error });
            }
        }
    };
};
