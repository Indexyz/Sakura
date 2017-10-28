'use strict';

module.exports = {
    getNodeLink(node, user) {
        const originLink = `${user.method}:${user.linkPassword}@${node.address}:${user.port}`;
        return 'ss://' + new Buffer(originLink).toString('base64') + '#' + encodeURIComponent(node.name);
    }
};
