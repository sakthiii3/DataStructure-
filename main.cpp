#include "common.h"
#include <cmath>
#include <thread>
#include <chrono>
#include "arrays.h"
#include "linkedlist.h"
#include "stack.h"
#include "queue.h"
#include "tree.h"
#include "heap.h"
#include "graph.h"
#include "searching.h"
#include "sorting.h"
#include "hashing.h"
#include "recursion.h"
#include "challenges.h"
#include "hospital.h"

using namespace std;

void displayMainMenu() {
    cout << "\n=============================================\n";
    cout << "          DATA STRUCTURES LAB\n";
    cout << "=============================================\n";
    cout << "Welcome to the Interactive C++ Learning Lab!\n";
    cout << "Choose a topic and perform hands-on operations.\n";
    cout << "---------------------------------------------\n";
    cout << "1. Arrays\n";
    cout << "2. Linked Lists\n";
    cout << "3. Stack\n";
    cout << "4. Queue\n";
    cout << "5. Trees & BST\n";
    cout << "6. Heap / Priority Queue\n";
    cout << "7. Graph\n";
    cout << "8. Searching Algorithms\n";
    cout << "9. Sorting Algorithms\n";
    cout << "10. Hashing\n";
    cout << "11. Recursion\n";
    cout << "12. Algorithm Complexity (Theory)\n";
    cout << "13. Hands-on Challenges\n";
    cout << "14. Real-World Simulator\n";
    cout << "0. Exit\n";
    cout << "---------------------------------------------\n";
    cout << "Enter choice: ";
}

void complexityMenu() {
    cout << "\n--- ALGORITHM COMPLEXITY ---\n";
    cout << "Big O: Upper bound (Worst Case)\n";
    cout << "Big Omega: Lower bound (Best Case)\n";
    cout << "Big Theta: Tight bound (Average Case)\n\n";
    cout << "Common Complexities:\n";
    cout << "O(1) - Constant time\n";
    cout << "O(log n) - Logarithmic time (e.g., Binary Search)\n";
    cout << "O(n) - Linear time (e.g., Linear Search)\n";
    cout << "O(n log n) - Linearithmic time (e.g., Merge Sort)\n";
    cout << "O(n^2) - Quadratic time (e.g., Bubble Sort)\n";
    cout << "O(2^n) - Exponential time\n";
    cout << "O(n!) - Factorial time\n\n";
    
    cout << "Enter 'n' to see approximate operations (0 to exit): ";
    long long n;
    while(cin >> n && n != 0) {
        cout << "n = " << n << "\n";
        cout << "O(1)        : 1\n";
        cout << "O(log n)    : ~" << (n > 0 ? std::to_string((long long)(std::log2(n))) : "N/A") << "\n";
        cout << "O(n)        : " << n << "\n";
        cout << "O(n log n)  : ~" << (n > 0 ? std::to_string((long long)(n * std::log2(n))) : "N/A") << "\n";
        cout << "O(n^2)      : " << n * n << "\n";
        cout << "Enter 'n' to see approximate operations (0 to exit): ";
    }
}

int main() {
    int choice;
    do {
        displayMainMenu();
        if (!(cin >> choice)) {
            if (cin.eof()) {
                cout << "\n[Non-interactive environment detected (EOF). Sleeping to keep process alive...]\n";
                std::this_thread::sleep_for(std::chrono::hours(24*365));
                break;
            }
            clearInput();
            cout << "Invalid input. Please enter a number.\n";
            continue;
        }

        switch (choice) {
            case 1: ArraysModule::menu(); break;
            case 2: LinkedListModule::menu(); break;
            case 3: StackModule::menu(); break;
            case 4: QueueModule::menu(); break;
            case 5: TreeModule::menu(); break;
            case 6: HeapModule::menu(); break;
            case 7: GraphModule::menu(); break;
            case 8: SearchingModule::menu(); break;
            case 9: SortingModule::menu(); break;
            case 10: HashingModule::menu(); break;
            case 11: RecursionModule::menu(); break;
            case 12: complexityMenu(); break;
            case 13: ChallengesModule::menu(); break;
            case 14: HospitalModule::menu(); break;
            case 0: cout << "Exiting Data Structures Lab. Goodbye!\n"; break;
            default: cout << "Invalid choice. Try again.\n";
        }
    } while (choice != 0);

    return 0;
}
