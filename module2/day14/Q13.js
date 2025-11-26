let counter = 0;

const loader = setInterval(() => {
    console.log("Loading...");
    counter++;

    if (counter === 5) {
        clearInterval(loader);
        console.log("Loaded successfully!");
    }
}, 1000);