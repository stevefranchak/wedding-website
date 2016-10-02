var path = require('path'),
    processDir = process.cwd();

const gruntConstants = require('../constants');

module.exports = {
    indexHtml: {
        src: path.join(processDir, 'index.html'),
        dest: path.join(gruntConstants.SITE_BUILD_DIR, 'index.html')
    }
};