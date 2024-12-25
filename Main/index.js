// function simpleHash(key) {
//     return key.length; //has based on the length of the string
// }

// console.log(simpleHash("Laurent"))

// // Simple Hash Function
// function hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//         hash += key.charCodeAt(i); // Add up the ASCII values of each character. charCodeAt() allows you to get the numeric (unicode) value of a specific character at a given position in a string. 
//     }
//     return hash % 10; // Get a number between 0-9 (10 shelves). The modulus gives the remainder after dividing by 10 which will likely yield a result between 0 and 9. 
// }

// // Create a HashMap
// const hashMap = {};

// // Add data to the HashMap
// function addToHashMap(key, value) {
//     const index = hash(key); // Use the hash function to find the index
//     if (!hashMap[index]) {
//         hashMap[index] = []; // Create a bucket if it doesn't exist
//     }
//     hashMap[index].push({ key, value }); // Add the key-value pair
// }

// // Retrieve data from the HashMap
// function getFromHashMap(key) {
//     const index = hash(key); // Find the index using the hash function
//     const bucket = hashMap[index]; // Get the bucket
//     if (bucket) {
//         for (let item of bucket) {
//             if (item.key === key) {
//                 return item.value; // Return the value if the key matches
//             }
//         }
//     }
//     return null; // If not found
// }

// // Store some data
// addToHashMap('Alice', 'Loves cats');
// addToHashMap('Bob', 'Loves dogs');

// // Retrieve data
// console.log(getFromHashMap('Alice')); // Output: Loves cats
// console.log(getFromHashMap('Bob'));   // Output: Loves dogs

console.log('connection test')

class HashMap {
    constructor(initialCapacity = 16, loadFactor = 0.75) {
        this.capacity = initialCapacity; // Number of buckets
        this.loadFactor = loadFactor; // When to resize
        this.buckets = Array.from({length: this.capacity}, () => []) // Array of arrays
    }
}

// Hash function with modulo applied in each iteration

function hash(key) {
    let hashCode = 0; 
    const primeNumber = 31; //reduces patterns that might cause two keys with similar characters to map to the same index. 
    for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity; 
    }
    return hashCode
}

// Set a key-value pair 
function set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index]; 
    
    //check if the key already exists
    for (const entry of bucket) {
        if(entry.key === key) {
            entry.value = value; // update value if key exists 
            return; 
        }
    }

    //add new key-value pair
    bucket.push({key, value}); 
    this.size++; 

    //check if resizing is needed
    if(this.size / this.capacity > this.loadFactor) {
        this.resize(); 
    }
}