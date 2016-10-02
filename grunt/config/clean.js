var path = require('path');

const gruntConstants = require('../constants');

module.exports = {
	site: [path.join(gruntConstants.SITE_BUILD_DIR, '*')]
};