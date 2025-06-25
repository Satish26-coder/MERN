/*const fs= require('fs');

console.log("staring to read file");
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("file content successfully read using callback");
    console.log("File content:", data);
    console.log("finished reading file"); 
});
console.log("....this message prints before file content because readFile is asynchronous");*/


//promises version of reading a file
const fsPromises = require('fs').promises; // Note the .promises

console.log("\nStarting to read file with Promise...");

fsPromises.readFile('./data.txt', 'utf8')
    .then((data) => {
        // This block runs if the Promise is FULFILLED (successful)
        console.log("File content read successfully (using Promise):");
        console.log(data);
        // You can chain more .then() for sequential async operations
        // return someOtherPromiseFunction(data);
    })
    // .then((processedData) => { ... })
    .catch((error) => {
        // This block runs if the Promise is REJECTED (failed)
        console.error("Error reading file with Promise:", error);
    })
    .finally(() => {
        // This block runs regardless of success or failure (optional)
        console.log("File reading attempt finished (Promise).");
    });

console.log("...This message also prints before Promise resolves!");


// Async/Await version of reading a file with promises


const fspromises = require('fs').promises;

console.log("\n starting to read file with promises");
async function readFileWithAsyncAwait() {
    try {
            const data= await fspromises.readFile('sample.txt', 'utf8');
       console.log("file content successfully read using promises");
        console.log(data);
    
        }catch(err) {
                        console.error("Error reading file:", err);
                    }
    finally{
        console.log("finished reading file with promises");
    }
}

readFileWithAsyncAwait();
console.log("....this message prints before file content because readFile is asynchronous with promises");
