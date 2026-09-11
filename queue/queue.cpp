#include "../include/common.h"
#include "../include/queue.h"

using namespace std;

namespace QueueModule {

class QueueArray {
    int* arr;
    int front, rear, capacity;
public:
    QueueArray(int cap) : capacity(cap), front(-1), rear(-1) { arr = new int[capacity]; }
    ~QueueArray() { delete[] arr; }
    void enqueue(int val) {
        if (rear == capacity - 1) { cout << "Queue Full\n"; return; }
        if (front == -1) front = 0;
        arr[++rear] = val;
        cout << "Enqueued " << val << "\n";
    }
    void dequeue() {
        if (front == -1 || front > rear) { cout << "Queue Empty\n"; return; }
        cout << "Dequeued " << arr[front++] << "\n";
    }
    void display() {
        if (front == -1 || front > rear) { cout << "Queue Empty\n"; return; }
        cout << "Queue: ";
        for (int i = front; i <= rear; i++) cout << arr[i] << " ";
        cout << "\n";
    }
};

void menu() {
    QueueArray* qa = nullptr;
    int choice;
    do {
        cout << "\nQUEUE OPERATIONS\n";
        cout << "1. Create Queue\n";
        cout << "2. Enqueue\n";
        cout << "3. Dequeue\n";
        cout << "4. Display\n";
        cout << "0. Back\n";
        cout << "Enter choice: ";
        if (!(cin >> choice)) { clearInput(); continue; }

        if (choice == 1) {
            int cap; cout << "Capacity: "; cin >> cap;
            if (qa) delete qa;
            qa = new QueueArray(cap);
        } else if (qa != nullptr) {
            int val;
            switch(choice) {
                case 2: cout << "Value: "; cin >> val; qa->enqueue(val); break;
                case 3: qa->dequeue(); break;
                case 4: qa->display(); break;
            }
        } else if (choice != 0) {
            cout << "Create a queue first.\n";
        }
    } while (choice != 0);
    if (qa) delete qa;
}

} // namespace QueueModule
