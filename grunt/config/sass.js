const gruntConstants = require('../constants');

module.exports = function(grunt, options) {
    var isProduction = options.production;

    return {
        options: {
            outputStyle: isProduction ? 'compact' : 'expanded',
            sourceMap: !isProduction
        },
        main: {
            files: (function() {
                var result = {};

                result[`${gruntConstants.SITE_BUILD_DIR}/css/main.css`] = './scss/main.scss';
                
                return result;
            })()
        }
    };
};