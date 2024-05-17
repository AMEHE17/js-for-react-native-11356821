// Task 3

let counter = 1;

// the function
function createUserProfiles(names, modNames) {
    const users = [];

    for (let index = 0; index < names.length; index++) {
        const userPro = {
            initialName: names[index],
            modName: modNames[index],
            id: counter++
        };
        users.push(userPro);
    }

    return users;
}

module.exports = {
    createUserProfiles
};
