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
      this.buckets = Array.from({ length: this.capacity }, () => []); // Array of arrays
      this.size = 0; // Tracks the number of key-value pairs
    }
  
    // Hash function with modulo applied in each iteration
    hash(key) {
      let hashCode = 0;
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
      }
      return hashCode;
    }
  
    // Set a key-value pair
    set(key, value) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
  
      // Check if the key already exists
      for (const entry of bucket) {
        if (entry.key === key) {
          entry.value = value; // Update value if key exists
          return;
        }
      }
  
      // Add new key-value pair
      bucket.push({ key, value });
      this.size++;
  
      // Check if resizing is needed
      if (this.size / this.capacity > this.loadFactor) {
        this.resize();
      }
    }
  
    // Get a value by key
    get(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
      for (const entry of bucket) {
        if (entry.key === key) {
          return entry.value;
        }
      }
      return null;
    }
  
    // Check if a key exists
    has(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
      return bucket.some(entry => entry.key === key);
    }
  
    // Remove a key-value pair
    remove(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i].key === key) {
          bucket.splice(i, 1);
          this.size--;
          return true;
        }
      }
      return false;
    }
  
    // Get the number of stored keys
    length() {
      return this.size;
    }
  
    // Clear all entries
    clear() {
      this.buckets = Array.from({ length: this.capacity }, () => []);
      this.size = 0;
    }
  
    // Get all keys
    keys() {
      const keysArray = [];
      for (const bucket of this.buckets) {
        for (const entry of bucket) {
          keysArray.push(entry.key);
        }
      }
      return keysArray;
    }
  
    // Get all values
    values() {
      const valuesArray = [];
      for (const bucket of this.buckets) {
        for (const entry of bucket) {
          valuesArray.push(entry.value);
        }
      }
      return valuesArray;
    }
  
    // Get all entries
    entries() {
      const entriesArray = [];
      for (const bucket of this.buckets) {
        for (const entry of bucket) {
          entriesArray.push([entry.key, entry.value]);
        }
      }
      return entriesArray;
    }
  
    // Resize the hash map when load factor is exceeded
    resize() {
      const oldBuckets = this.buckets;
      this.capacity *= 2; // Double the capacity
      this.buckets = Array.from({ length: this.capacity }, () => []);
      this.size = 0; // Reset size and re-add entries
  
      for (const bucket of oldBuckets) {
        for (const entry of bucket) {
          this.set(entry.key, entry.value);
        }
      }
    }
  }

  const test = new HashMap() // or HashMap() if using a factory

  test.set('apple', 'red')
  test.set('banana', 'yellow')
  test.set('carrot', 'orange')
  test.set('dog', 'brown')
  test.set('elephant', 'gray')
  test.set('frog', 'green')
  test.set('grape', 'purple')
  test.set('hat', 'black')
  test.set('ice cream', 'white')
  test.set('jacket', 'blue')
  test.set('kite', 'pink')
  test.set('lion', 'golden')

  console.log(test.buckets[1][0].value)
 

  