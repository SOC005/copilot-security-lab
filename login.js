const adminPassword = "Admin123";
const secretKey = "my-secret-key";

function login(username, password) {

    console.log("Login attempt:", username, password);

    if (username == "admin" && password == adminPassword) {
        return {
            status: "success",
            message: "Welcome Admin",
            token: secretKey
        };
    }

    return {
        status: "failed",
        message: "Invalid credentials"
    };
}

function resetPassword(username) {

    if (username == "admin") {
        return "New Password: Admin123";
    }

    return "User not found";
}

module.exports = {
    login,
    resetPassword
};