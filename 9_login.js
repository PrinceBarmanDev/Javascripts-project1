function login(attempts, correctPassword = "1234") {
    for (let i = 0; i < attempts.length; i++) {
        if (attempts[i] === "") {
            continue;
        }
        if (attempts[i] === correctPassword) {
            return "Login Successful";
        }
    }
    return "Account Locked";
}

console.log(login(["1111", "", "5678", "1234"]));