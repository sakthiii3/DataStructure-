#include "../include/common.h"
#include "../include/linkedlist.h"

using namespace std;

namespace LinkedListModule {

// --- Singly Linked List ---
struct SNode {
    int data;
    SNode* next;
    SNode(int val) : data(val), next(nullptr) {}
};

class SinglyLinkedList {
    SNode* head;
public:
    SinglyLinkedList() : head(nullptr) {}
    ~SinglyLinkedList() {
        while (head) {
            SNode* temp = head;
            head = head->next;
            delete temp;
        }
    }
    void insertBeginning(int val) {
        SNode* newNode = new SNode(val);
        newNode->next = head;
        head = newNode;
        cout << "Inserted " << val << " at beginning.\n";
    }
    void insertEnd(int val) {
        SNode* newNode = new SNode(val);
        if (!head) {
            head = newNode;
        } else {
            SNode* temp = head;
            while (temp->next) temp = temp->next;
            temp->next = newNode;
        }
        cout << "Inserted " << val << " at end.\n";
    }
    void display() {
        if (!head) { cout << "List is empty.\n"; return; }
        SNode* temp = head;
        while (temp) {
            cout << temp->data << " -> ";
            temp = temp->next;
        }
        cout << "NULL\n";
    }
};

// --- Doubly Linked List ---
struct DNode {
    int data;
    DNode* prev;
    DNode* next;
    DNode(int val) : data(val), prev(nullptr), next(nullptr) {}
};

class DoublyLinkedList {
    DNode* head;
public:
    DoublyLinkedList() : head(nullptr) {}
    void insertEnd(int val) {
        DNode* newNode = new DNode(val);
        if (!head) {
            head = newNode;
        } else {
            DNode* temp = head;
            while (temp->next) temp = temp->next;
            temp->next = newNode;
            newNode->prev = temp;
        }
        cout << "Inserted " << val << " at end.\n";
    }
    void display() {
        if (!head) { cout << "List is empty.\n"; return; }
        DNode* temp = head;
        while (temp) {
            cout << temp->data << " <-> ";
            temp = temp->next;
        }
        cout << "NULL\n";
    }
};

// --- Circular Linked List ---
struct CNode {
    int data;
    CNode* next;
    CNode(int val) : data(val), next(nullptr) {}
};

class CircularLinkedList {
    CNode* tail;
public:
    CircularLinkedList() : tail(nullptr) {}
    void insertEnd(int val) {
        CNode* newNode = new CNode(val);
        if (!tail) {
            tail = newNode;
            tail->next = tail;
        } else {
            newNode->next = tail->next;
            tail->next = newNode;
            tail = newNode;
        }
        cout << "Inserted " << val << " at end.\n";
    }
    void display() {
        if (!tail) { cout << "List is empty.\n"; return; }
        CNode* temp = tail->next;
        do {
            cout << temp->data << " -> ";
            temp = temp->next;
        } while (temp != tail->next);
        cout << "(HEAD)\n";
    }
};

void sllMenu() {
    SinglyLinkedList sll;
    int choice, val;
    do {
        cout << "\nSINGLY LINKED LIST\n";
        cout << "1. Insert Beginning\n";
        cout << "2. Insert End\n";
        cout << "3. Display\n";
        cout << "0. Back\n";
        cout << "Enter choice: ";
        if (!(cin >> choice)) { clearInput(); continue; }
        if (choice == 1) { cout << "Value: "; cin >> val; sll.insertBeginning(val); }
        else if (choice == 2) { cout << "Value: "; cin >> val; sll.insertEnd(val); }
        else if (choice == 3) sll.display();
    } while (choice != 0);
}

void dllMenu() {
    DoublyLinkedList dll;
    int choice, val;
    do {
        cout << "\nDOUBLY LINKED LIST\n";
        cout << "1. Insert End\n";
        cout << "2. Display\n";
        cout << "0. Back\n";
        cout << "Enter choice: ";
        if (!(cin >> choice)) { clearInput(); continue; }
        if (choice == 1) { cout << "Value: "; cin >> val; dll.insertEnd(val); }
        else if (choice == 2) dll.display();
    } while (choice != 0);
}

void cllMenu() {
    CircularLinkedList cll;
    int choice, val;
    do {
        cout << "\nCIRCULAR LINKED LIST\n";
        cout << "1. Insert End\n";
        cout << "2. Display\n";
        cout << "0. Back\n";
        cout << "Enter choice: ";
        if (!(cin >> choice)) { clearInput(); continue; }
        if (choice == 1) { cout << "Value: "; cin >> val; cll.insertEnd(val); }
        else if (choice == 2) cll.display();
    } while (choice != 0);
}

void menu() {
    int choice;
    do {
        cout << "\nLINKED LIST OPERATIONS\n";
        cout << "1. Singly Linked List\n";
        cout << "2. Doubly Linked List\n";
        cout << "3. Circular Linked List\n";
        cout << "0. Back\n";
        cout << "Enter choice: ";
        if (!(cin >> choice)) {
            clearInput();
            continue;
        }
        switch(choice) {
            case 1: sllMenu(); break;
            case 2: dllMenu(); break;
            case 3: cllMenu(); break;
        }
    } while (choice != 0);
}

} // namespace LinkedListModule
