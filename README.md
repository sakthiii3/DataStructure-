# Data Structures Lab – Interactive C++ Hands-on Application

## Objective
Create an interactive C++ application that demonstrates fundamental data structures and algorithms through hands-on operations. The application is entirely menu-driven, letting students select data structures, perform operations, and visualize the output instantly.

## Technologies
* C++17
* Object-Oriented Programming
* Data Structures
* Algorithms
* CMake

## Data Structures Covered
* **Array**: Linear collection.
* **Linked List**: Singly, Doubly, and Circular implementations.
* **Stack**: Array-based implementation with LIFO semantics.
* **Queue**: Array-based FIFO implementation.
* **Tree**: Binary Search Tree implementation with traversals.

## How to Compile

### Linux/macOS
```bash
mkdir build && cd build
cmake ..
make
./data_structures
```

### Windows
If using MinGW with CMake:
```bash
mkdir build
cd build
cmake -G "MinGW Makefiles" ..
mingw32-make
data_structures.exe
```

## Docker / Render Deployment
A `Dockerfile` is provided that builds the executable.
