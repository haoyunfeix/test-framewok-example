#!/bin/bash

echo "native test running!"
cd `dirname $0`
pwd
g++ -isystem /home/tshao/tools/googletest/googletest/include -I/home/tshao/tools/googletest/googletest/ -pthread -c ./sample1_unittest.cc
g++ -isystem /home/tshao/tools/googletest/googletest/include -I/home/tshao/tools/googletest/googletest/ -pthread -c ./gtest_main.cc 
g++ -o nativetest gtest_main.o sample1_unittest.o -pthread /home/tshao/tools/googletest/googletest/libgtest.a
./nativetest



