var gulp = require('gulp');
var _ = require('lodash');
var karma = require('karma').server;

//one could also externalize common config into a separate file,
//ex.: var karmaCommonConf = require('./karma-common-conf.js');
var karmaCommonConf = {
  customLaunchers: {
    sl_chrome: {
      base: 'SauceLabs',
      browserName: 'chrome'
    },
    sl_firefox: {
      base: 'SauceLabs',
      browserName: 'firefox'
    }
  },
  sauceLabs: {
    username: 'hashspace',
    accessKey: '9e47b05c-b1de-43ce-b9f0-dc64a3bc5f35',
    startConnect: false,
    testName: 'Timeout tests'
  },
  browsers: ['sl_chrome'],
  frameworks: ['jasmine'],
  files: [
    'src/**/*.js',
    'test/**/*.spec.js'
  ],
  logLevel: 'LOG_INFO'
};

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  karma.start(_.assign({}, karmaCommonConf, {singleRun: true}), done);
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
  karma.start(karmaCommonConf, done);
});

gulp.task('default', ['tdd']);