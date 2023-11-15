const register = function (username) {
    console.log(`User ${username} is registered.`);
}

const login = function (username, password) {
    console.log(`User is ${username} and password is ${password}.`);
}


// to export this auth use this 
// module.exports = register;

// to export multiple function

module.exports = {
    register,
    login,
}