#include "../include/common.h"
#include "../include/tree.h"

using namespace std;

namespace TreeModule {

struct TNode {
    int data;
    TNode* left;
    TNode* right;
    TNode(int val) : data(val), left(nullptr), right(nullptr) {}
};

class BST {
    TNode* root;
    
    TNode* insert(TNode* node, int val) {
        if (!node) return new TNode(val);
        if (val < node->data) node->left = insert(node->left, val);
        else if (val > node->data) node->right = insert(node->right, val);
        return node;
    }
    
    void inorder(TNode* node) {
        if (!node) return;
        inorder(node->left);
        cout << node->data << " ";
        inorder(node->right);
    }
    
public:
    BST() : root(nullptr) {}
    void insert(int val) {
        root = insert(root, val);
        cout << "Inserted " << val << "\n";
    }
    void display() {
        cout << "Inorder Traversal: ";
        inorder(root);
        cout << "\n";
    }
};

void menu() {
    BST bst;
    int choice, val;
    do {
        cout << "\nBST OPERATIONS\n";
        cout << "1. Insert\n";
        cout << "2. Inorder Traversal\n";
        cout << "0. Back\n";
        cout << "Enter choice: ";
        if (!(cin >> choice)) { clearInput(); continue; }
        if (choice == 1) { cout << "Value: "; cin >> val; bst.insert(val); }
        else if (choice == 2) bst.display();
    } while (choice != 0);
}

} // namespace TreeModule
