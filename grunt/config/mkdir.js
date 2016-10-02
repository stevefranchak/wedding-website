var path = require('path');

const gruntConstants = require('../constants');

module.exports = {
    site: {
        options: {
            create: [gruntConstants.SITE_BUILD_DIR]
        }
    },
    siteDirs: {
        options: {
            create: ['js', 'css', 'img'].map((dir) => {return path.join(gruntConstants.SITE_BUILD_DIR, dir);})
        }
    }
};