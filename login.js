const validCredentials = {
  username: 'admin',
  password: 'password123'
};

function login(username, password) {
  if (typeof username !== 'string' || typeof password !== 'string') {
    return false;
  }

  return username === validCredentials.username && password === validCredentials.password;
}

module.exports = { login };

// Example usage:
// const { login } = require('./login');
// console.log(login('admin', 'password123')); // true