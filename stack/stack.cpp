#include "../include/common.h"
#include "../include/stack.h"

using namespace std;

namespace StackModule {

class StackArray {
    int* arr;
    int top;
    int capacity;
public:
    StackArray(int cap) : capacity(cap), top(-1) { arr = new int[capacity]; }
    ~StackArray() { delete[] arr; }
    void push(int val) {
        if (top == capacity - 1) { cout << "Stack Overflow\n"; return; }
        arr[++top] = val;
        cout << "Pushed " << val << "\n";
    }
    void pop() {
        if (top == -1) { cout << "Stack Underflow\n"; return; }
        cout << "Popped " << arr[top--] << "\n";
    }
    void peek() {
        if (top == -1) { cout << "Stack is empty\n"; return; }
        cout << "Top element is " << arr[top] << "\n";
    }
    void display() {
        if (top == -1) { cout << "Stack is empty\n"; return; }
        cout << "Stack: ";
        for (int i = top; i >= 0; --i) cout << arr[i] << " ";
        cout << "\n";
    }
};

void menu() {
    StackArray* sa = nullptr;
    int choice;
    do {
        cout << "\nSTACK OPERATIONS\n";
        cout << "1. Create Stack (Array)\n";
        cout << "2. Push\n";
        cout << "3. Pop\n";
        cout << "4. Peek\n";
        cout << "5. Display\n";
        cout << "0. Back\n";
        cout << "Enter choice: ";
        if (!(cin >> choice)) { clearInput(); continue; }

        if (choice == 1) {
            int cap; cout << "Capacity: "; cin >> cap;
            if (sa) delete sa;
            sa = new StackArray(cap);
        } else if (sa != nullptr) {
            int val;
            switch(choice) {
                case 2: cout << "Value: "; cin >> val; sa->push(val); break;
                case 3: sa->pop(); break;
                case 4: sa->peek(); break;
                case 5: sa->display(); break;
            }
        } else if (choice != 0) {
            cout << "Create a stack first.\n";
        }
    } while (choice != 0);
    if (sa) delete sa;
}

} // namespace StackModule
