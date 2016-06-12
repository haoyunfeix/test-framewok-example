# test-framewok-example
a simpe example to describe the test framework

This example introduces how to use grunt + mocha + chai + gtest to take unit test for both nodejs code and native code.

1. grunt
is a javascript task runner, is used to control the work flow, plugins are added to it to perform different tasks. Mocha, chai and gtests are all enabled by plugins.
Links:
http://gruntjs.com/

2. mocha
is a nodejs test framework, and also has mocha plugin for grunt.
useful links:
https://github.com/mochajs/mocha
http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html
grunt-mocha-test is the plugin for grunt:
https://www.npmjs.com/package/grunt-mocha-test

3. chai
Assertion library.

4. jshint
could verify js files using static check.
http://jshint.com/docs/
grunt-contrib-jshint is the grunt plugin:
https://www.npmjs.com/package/grunt-contrib-jshint

5. run shell scripts
this could run shell scripts as a task.  Then gtest could be triggered in this step.
grunt-run plugin:
https://www.npmjs.com/package/grunt-run
