# test-framewok-example
a simpe example to describe how to setup the test framework

This example introduces how to use grunt + mocha + chai + gtest to take unit test for both nodejs code and native code.

1. grunt
is a javascript task runner, is used to control the work flow, plugins are added to it to perform different tasks. Mocha, chai and gtests are all enabled by plugins.
Links:</br>
http://gruntjs.com/

2. mocha
is a nodejs test framework, and also has mocha plugin for grunt.
useful links:</br>
https://github.com/mochajs/mocha</br>
http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html</br>
grunt-mocha-test is the plugin for grunt:</br>
https://www.npmjs.com/package/grunt-mocha-test</br>

3. chai
Assertion library.

4. jshint
could verify js files using static check.</br>
http://jshint.com/docs/</br>
grunt-contrib-jshint is the grunt plugin:</br>
https://www.npmjs.com/package/grunt-contrib-jshint</br>

5. run shell scripts</br>
this could run shell scripts as a task.  Then gtest could be triggered in this step.</br>
grunt-run plugin:</br>
https://www.npmjs.com/package/grunt-run</br>

6. steps to run</br>
a. download this example and under the directory, npm install all dependencies in the package.json file.
You may only need to npm install grunt globally first and then run "npm install" under the directory.
Download gtest and compile it as a separate lib, and then change the nativetest.sh inside test/native directory
to use the actual gtest lib in your machine.</br>
b. type "grunt" under the directory. And you will see:</br>
  Running "concat:dist1" (concat) task</br>
  Running "concat:dist2" (concat) task</br>
  Running "jshint:all" (jshint) task</br>
  >> 5 files lint free.</br>

  Running "mochaTest:test" (mochaTest) task</br>

  Test add function</br>
    ✓ 1+1 = 2 check</br>
    ✓ -1+1=0 check</br>

  2 passing (4ms)</br>

  Running "run:nativetest" (run) task</br>
  native test running!</br>
  /your/directory/test/native</br>
  Running main() from gtest_main.cc</br>
  [==========] Running 2 tests from 1 test case.</br>
  [----------] Global test environment set-up.</br>
  [----------] 2 tests from AddTest</br>
  [ RUN      ] AddTest.Positive</br>
  [       OK ] AddTest.Positive (0 ms)</br>
  [ RUN      ] AddTest.Nagetive</br>
  [       OK ] AddTest.Nagetive (0 ms)</br>
  [----------] 2 tests from AddTest (0 ms total)</br>

  [----------] Global test environment tear-down</br>
  [==========] 2 tests from 1 test case ran. (0 ms total)</br>
  [  PASSED  ] 2 tests.</br>

  Done.</br>

  
