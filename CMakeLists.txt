cmake_minimum_required(VERSION 3.10)
project(DataStructuresLab)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

include_directories(include)

file(GLOB_RECURSE SOURCES
    "main.cpp"
    "arrays/*.cpp"
    "linkedlist/*.cpp"
    "stack/*.cpp"
    "queue/*.cpp"
    "tree/*.cpp"
    "heap/*.cpp"
    "graph/*.cpp"
    "searching/*.cpp"
    "sorting/*.cpp"
    "hashing/*.cpp"
    "recursion/*.cpp"
    "challenges/*.cpp"
    "simulator/*.cpp"
)

add_executable(data_structures ${SOURCES})
