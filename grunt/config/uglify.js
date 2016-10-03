const gruntConstants = require('../constants'),
    SINGLE_QUOTES = 1;

module.exports = function(grunt, options) {

    var isProduction = options.production;

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
        },
        main: {
            options: {
                quoteStyle: SINGLE_QUOTES
            },
            files: (function() {
                var result = {};

                result[`${gruntConstants.SITE_BUILD_DIR}/js/main.js`] = './js/main.js';
                
                return result;
            })()
        }
    };
};