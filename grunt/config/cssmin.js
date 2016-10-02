const gruntConstants = require('../constants');

module.exports = function(grunt, options) {
    var isProduction = options.production;

    return {
        main: {
            files: (function() {
                var result = {};

                if (isProduction) {
                    result[`${gruntConstants.SITE_BUILD_DIR}/css/main.css`] = `${gruntConstants.SITE_BUILD_DIR}/css/main.css`;
                }

                return result;
            })()
        }
    };
};