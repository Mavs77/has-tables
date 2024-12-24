function simpleHash(key) {
    return key.length; //has based on the length of the string
}

console.log(simpleHash("Laurent"))

// Simple Hash Function
function hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i); // Add up the ASCII values of each character. charCodeAt() allows you to get the numeric (unicode) value of a specific character at a given position in a string. 
    }
    return hash % 10; // Get a number between 0-9 (10 shelves). The modulus gives the remainder after dividing by 10 which will likely yield a result between 0 and 9. 
}

// Create a HashMap
const hashMap = {};

// Add data to the HashMap
function addToHashMap(key, value) {
    const index = hash(key); // Use the hash function to find the index
    if (!hashMap[index]) {
        hashMap[index] = []; // Create a bucket if it doesn't exist
    }
    hashMap[index].push({ key, value }); // Add the key-value pair
}

// Retrieve data from the HashMap
function getFromHashMap(key) {
    const index = hash(key); // Find the index using the hash function
    const bucket = hashMap[index]; // Get the bucket
    if (bucket) {
        for (let item of bucket) {
            if (item.key === key) {
                return item.value; // Return the value if the key matches
            }
        }
    }
    return null; // If not found
}

// Store some data
addToHashMap('Alice', 'Loves cats');
addToHashMap('Bob', 'Loves dogs');

// Retrieve data
console.log(getFromHashMap('Alice')); // Output: Loves cats
console.log(getFromHashMap('Bob'));   // Output: Loves dogs
