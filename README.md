# test-framewok-example
a simpe example to describe the test framework

This example introduces how to use grunt + mocha + chai + gtest to take unit test for both nodejs code and native code.

1. grunt
is a javascript task runner, is used to control the work flow, plugins are added to it to perform different tasks. Mocha, chai and gtests are all enabled by plugins.
Links:</br>
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

6. steps to run
a. download this example and under the directory, npm install all dependencies in the package.json file.
Download gtest and compile it as a separate lib, and then change the nativetest.sh inside test/native directory
to use the actual gtest lib in your machine.
b. type "grunt" under the directory. And you will see:
Running "concat:dist1" (concat) task

Running "concat:dist2" (concat) task

Running "jshint:all" (jshint) task
>> 5 files lint free.

Running "mochaTest:test" (mochaTest) task


  Test add function
    ✓ 1+1 = 2 check
    ✓ -1+1=0 check


  2 passing (4ms)


Running "run:nativetest" (run) task
native test running!
/your/directory/test/native
Running main() from gtest_main.cc
[==========] Running 2 tests from 1 test case.
[----------] Global test environment set-up.
[----------] 2 tests from AddTest
[ RUN      ] AddTest.Positive
[       OK ] AddTest.Positive (0 ms)
[ RUN      ] AddTest.Nagetive
[       OK ] AddTest.Nagetive (0 ms)
[----------] 2 tests from AddTest (0 ms total)

[----------] Global test environment tear-down
[==========] 2 tests from 1 test case ran. (0 ms total)
[  PASSED  ] 2 tests.

Done.
