import fs from "fs";

// create and write in a file
// fs.writeFileSync('./test.txt', "hey how are you");

// read from a file
// const result = fs.readFileSync('./test.txt', 'utf-8');
// console.log(result);

// append to a file
// fs.appendFileSync('./test.txt', " something appended \n");

// make a new directory
// fs.mkdir('./new-folder', { recursive: true }, (err) => {
// 	if (err) throw err;
// 	console.log('Directory created successfully.');
// });

// Note: we have done this above operation by using the synchronous functions, it can also be done using the async functions

// some using async functions
// fs.writeFile('./test.txt', "hey how are you, async", (err) => err);