// Import openDB function from the 'idb' library
import { openDB } from 'idb';

// Define an asynchronous function to initialize the database
const initdb = async () =>
  openDB('jate', 1, {
    // Set up the database schema during the upgrade event
    upgrade(db) {
      // Check if the 'jate' object store already exists
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // If not, create the 'jate' object store with auto-incrementing keys
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // Open the 'jate' database with version 1
  const jateDB = await openDB("jate", 1);
  // Start a read-write transaction on the 'jate' object store
  const tx = jateDB.transaction("jate", "readwrite");
  // Access the 'jate' object store
  const store = tx.objectStore("jate");
  // Put the content into the object store with a predefined id (1 in this case)
  const request = store.put({ id: 1, value: content });
  // Wait for the put operation to complete and log the result
  const result = await request;
  console.log("Successfully saved in the DB", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // Open the 'jate' database with version 1
  const jateDB = await openDB("jate", 1);
  // Start a read-only transaction on the 'jate' object store
  const tx = jateDB.transaction("jate", "readonly");
  // Access the 'jate' object store
  const store = tx.objectStore("jate");
  // Retrieve all the content from the object store
  const request = store.getAll();
  // Wait for the getAll operation to complete and log the result
  const result = await request;
  console.log("Successfully get all the data from DB", result);
  // Return the retrieved content
  return result.value;
};

// Initialize the database when the module is imported
initdb();
