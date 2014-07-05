var gulp = require('gulp');
var gutil = require('gulp-util');
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
    tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER,
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
  console.log('before Karma - console');
  gutil.log('before Karma - gutil');
  throw new Error(process._getActiveHandles());
});

gulp.task('default', ['tdd']);