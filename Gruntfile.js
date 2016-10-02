var path = require('path');

module.exports = function(grunt) {

  // measures the time each task takes
  require('time-grunt')(grunt);

  // load grunt config
  require('load-grunt-config')(grunt, {
  	configPath: path.join(process.cwd(), 'grunt', 'config'),
  	jitGrunt: {
  		customTasksDir: path.join(process.cwd(), 'grunt', 'tasks')
  	}
  });

};