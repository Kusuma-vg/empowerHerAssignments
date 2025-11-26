console.log("Begin"); 

setTimeout(() => { 
    console.log("Timeout Task"); 
}, 0); 

Promise.resolve().then(() => { 
    console.log("Promise Task"); 
}); 
console.log("End");

//Synchronous code runs first.
//Promise.resolve().then(...) schedules its callback into the microtask queue.
//setTimeout(..., 0) schedules its callback into the macrotask (task) queue.
//When the call stack is empty (after synchronous code finishes), the event loop runs all microtasks before it runs the next macrotask