'use strict';
module.exports = app => {
    app.get('/admin', app.controller.admin.index.get);

    app.get('/admin/nodes', app.controller.admin.nodes.get);
    app.get('/admin/nodes/create', app.controller.admin.nodes.createNodePage);
    app.get('/admin/nodes/delete/:id', app.controller.admin.nodes.delete);
    app.get('/admin/nodes/edit/:id', app.controller.admin.nodes.editNodePage);
    app.post('/admin/nodes/create', app.controller.admin.nodes.create);
    app.post('/admin/nodes/edit', app.controller.admin.nodes.edit);
};
