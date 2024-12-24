export const greeting = "Hello. Testing 1, 2, 3!!!"

import { Node } from "./Node.js";

  
class LinkedList {
constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
}

// Append a new node to the end
append(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
    this.head = this.tail = newNode;
    } else {
    this.tail.nextNode = newNode;
    this.tail = newNode;
    }
    this.size++;
}

// Prepend a new node to the start
prepend(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
    this.head = this.tail = newNode;
    } else {
    newNode.nextNode = this.head;
    this.head = newNode;
    }
    this.size++;
}

// Insert a new node at a specific index
insertAt(value, index) {
    //error handling. Check if index is out of bounds 
    if (index < 0 || index > this.size) {
    console.log('Index out of bounds');
    return;
    }
    
    const newNode = new Node(value); //create a new node with the node class 
    
    if (index === 0) {
    this.prepend(value);  // Same as inserting at the head
    } else if (index === this.size) {
    this.append(value);   // Same as appending at the tail
    //applies to any index that is neither the head or the tail 
    } else {
    let current = this.head;
    let previous;
    let count = 0;

    // Traverse the list until we find the right index
    // The loop moves u through the linked list one node at a time until 'count' matches the index
    while (count < index) {
        previous = current;
        current = current.nextNode;
        count++;
    }

    previous.nextNode = newNode;
    newNode.nextNode = current;
    this.size++;
    }
}

// Remove a node at a specific index
removeAt(index) {
    //check index validity 
    if (index < 0 || index >= this.size) {
    console.log('Index out of bounds');
    return;
    }

    if (index === 0) {
    this.head = this.head.nextNode; //just means the exiting head gets replaced by the value indicated by 'nextNode' in the current head object. 
    if (this.size === 1) {
        this.tail = null;  // If there was only one node
    }
    } else {
    let current = this.head;
    let previous;
    let count = 0;

    // Traverse to the node at the given index
    while (count < index) {
        previous = current;
        current = current.nextNode;
        count++;
    }

    previous.nextNode = current.nextNode;  // Basically means the previous node is now point to the node after the current node which will be removed
    if (index === this.size - 1) {
        this.tail = previous;  // If removing the tail
    }
    }

    this.size--; //the size of the list decreases by 1
}

// Convert the list to a string for easy inspection
toString() {
    let current = this.head;
    let result = '';
    //the loop runs as long as current is not null (null = no value)
    while (current) {
    result += `(${current.value}) -> `;
    current = current.nextNode;
    }
    result += 'null';
    return result;
}
}
  

  //export LinkedList class

  export {LinkedList}