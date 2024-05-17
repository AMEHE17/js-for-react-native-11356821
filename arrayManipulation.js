// Task 1

// Function to process an array
function processArray(array) {
    return array.map(num => {
        if (num % 2 === 0) {
            return num * num; // even numbers squared
        } else {
            return num * 3; // odd numbers triple
        }
    });
}

module.exports = {
    processArray
};

