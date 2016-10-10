const gruntConstants = require('../constants');

module.exports = {
    indexHtml: {
        src: './index.html',
        dest: `${gruntConstants.SITE_BUILD_DIR}/index.html`
    },
    img: {
        expand: true,
        cwd: './img',
        src: '**',
        dest: `${gruntConstants.SITE_BUILD_DIR}/img/`
    },
    jsMain: {
        src: './js/main.js',
        dest: `${gruntConstants.SITE_BUILD_DIR}/js/main.js`
    }
};