// Task 3

let counter = 1;

// the function
function createUserProfiles(names, modifiedNames) {
    const users = [];

    for (let index = 0; index < names.length; index++) {
        const userPro = {
            originalName: names[index],
            modifiedName: modifiedNames[index],
            id: counter++
        };
        users.push(userPro);
    }

    return users;
}

module.exports = {
    createUserProfiles
};
