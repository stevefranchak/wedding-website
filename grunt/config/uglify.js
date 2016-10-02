const gruntConstants = require('../constants');

module.exports = function(grunt, options) {

	var isProduction = options.production || false;

	return {
		options: {
			mangle: isProduction,
			compress: isProduction,
			preserveComments: !isProduction,
			beautify: !isProduction
		},
		jsDeps: {
			files: (function() {
				var result = {};
				result[`${gruntConstants.SITE_BUILD_DIR}/js/deps.js`] = options.jsDeps;
				return result;
			})()
		}
	};
};