#include "../include/common.h"
#include "../include/arrays.h"

using namespace std;

namespace ArraysModule {

class ArrayManager {
private:
    int* arr;
    int capacity;
    int size;

public:
    ArrayManager(int cap) : capacity(cap), size(0) {
        arr = new int[capacity];
    }

    ~ArrayManager() {
        delete[] arr;
    }

    void display() {
        if (size == 0) {
            cout << "Array is empty.\n";
            return;
        }
        cout << "Array elements: ";
        for (int i = 0; i < size; ++i) {
            cout << arr[i] << " ";
        }
        cout << "\n";
    }

    void insert(int element, int index) {
        if (size >= capacity) {
            cout << "Array is full (Overflow).\n";
            return;
        }
        if (index < 0 || index > size) {
            cout << "Invalid index.\n";
            return;
        }
        for (int i = size; i > index; --i) {
            arr[i] = arr[i - 1];
        }
        arr[index] = element;
        size++;
        cout << "Element inserted.\n";
    }

    void deleteElement(int index) {
        if (size == 0) {
            cout << "Array is empty (Underflow).\n";
            return;
        }
        if (index < 0 || index >= size) {
            cout << "Invalid index.\n";
            return;
        }
        for (int i = index; i < size - 1; ++i) {
            arr[i] = arr[i + 1];
        }
        size--;
        cout << "Element deleted.\n";
    }

    void update(int element, int index) {
        if (index < 0 || index >= size) {
            cout << "Invalid index.\n";
            return;
        }
        arr[index] = element;
        cout << "Element updated.\n";
    }

    void search(int element) {
        for (int i = 0; i < size; ++i) {
            if (arr[i] == element) {
                cout << "Element found at index " << i << ".\n";
                return;
            }
        }
        cout << "Element not found.\n";
    }

    void reverse() {
        for (int i = 0; i < size / 2; ++i) {
            int temp = arr[i];
            arr[i] = arr[size - 1 - i];
            arr[size - 1 - i] = temp;
        }
        cout << "Array reversed.\n";
    }

    void findMax() {
        if (size == 0) return;
        int max_val = arr[0];
        for (int i = 1; i < size; ++i) {
            if (arr[i] > max_val) max_val = arr[i];
        }
        cout << "Maximum element: " << max_val << "\n";
    }

    void findMin() {
        if (size == 0) return;
        int min_val = arr[0];
        for (int i = 1; i < size; ++i) {
            if (arr[i] < min_val) min_val = arr[i];
        }
        cout << "Minimum element: " << min_val << "\n";
    }
};

void menu() {
    ArrayManager* am = nullptr;
    int choice;
    do {
        cout << "\nARRAY OPERATIONS\n";
        cout << "1. Create Array\n";
        cout << "2. Display Array\n";
        cout << "3. Insert Element\n";
        cout << "4. Delete Element\n";
        cout << "5. Update Element\n";
        cout << "6. Search Element\n";
        cout << "7. Reverse Array\n";
        cout << "8. Find Maximum\n";
        cout << "9. Find Minimum\n";
        cout << "0. Back\n";
        cout << "Enter your choice: ";
        if (!(cin >> choice)) {
            clearInput();
            continue;
        }

        if (choice == 1) {
            int cap;
            cout << "Enter array capacity: ";
            cin >> cap;
            if (am) delete am;
            am = new ArrayManager(cap);
            cout << "Array created with capacity " << cap << ".\n";
        } else if (am != nullptr) {
            int val, idx;
            switch(choice) {
                case 2: am->display(); break;
                case 3:
                    cout << "Enter element to insert: "; cin >> val;
                    cout << "Enter index: "; cin >> idx;
                    am->insert(val, idx); break;
                case 4:
                    cout << "Enter index to delete: "; cin >> idx;
                    am->deleteElement(idx); break;
                case 5:
                    cout << "Enter new element: "; cin >> val;
                    cout << "Enter index: "; cin >> idx;
                    am->update(val, idx); break;
                case 6:
                    cout << "Enter element to search: "; cin >> val;
                    am->search(val); break;
                case 7: am->reverse(); break;
                case 8: am->findMax(); break;
                case 9: am->findMin(); break;
            }
        } else if (choice != 0) {
            cout << "Please create an array first.\n";
        }
    } while (choice != 0);

    if (am) delete am;
}

} // namespace ArraysModule
