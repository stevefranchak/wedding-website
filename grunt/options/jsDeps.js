/*
 * Since UI JS dependencies may have their own dependencies, the order that dependencies are concatenated
 *  into the final deps.js file must be enforced.
 *
 */

const JS_DEPS_DIR = './js/deps/';

var jsDeps = [
    'jquery',
    'bootstrap',
    'countdown',
    'jquery.matchHeight',
    'modernizr'
];

module.exports = jsDeps.map(
    (jsDep) => `${JS_DEPS_DIR}/${jsDep}.js`
);
