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


// Task 2

// Function to modify array of strings based on corresponding numbers
function formatArrayStrings(arraystr, arraynum) {
    return arraystr.map((str, i) => {
        if (arraynum[i] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

module.exports = {
    processArray,
    formatArrayStrings
};
