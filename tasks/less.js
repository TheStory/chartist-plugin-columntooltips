/**
 * less
 * ======
 *
 * Compile less file to css
 *
 * Link: https://github.com/gruntjs/grunt-contrib-uglify
 */

'use strict';

module.exports = function(grunt) {
  return {
    dist: {
      options: {
        plugins: [
          new(require('less-plugin-autoprefix'))({ browsers: ["last 2 versions"] }),
          new(require('less-plugin-clean-css'))({})
        ],
      },
      files: {
        'dist/css/chartist-plugin-columntooltips.css': 'src/less/chartist-plugin-columntooltips.less'
      }
    }
  };
};
