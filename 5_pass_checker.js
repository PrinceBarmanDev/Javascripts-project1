function checkPassword(passwords) {
    let correctPassword = "1234";
    let i = 0;
    do {
        if (passwords[i] === correctPassword) {
            return "Password Correct";
        }
        i++;
    } while (i < passwords.length);
    return "Password Failed";
}

console.log(checkPassword(["1111", "5678", "1234"]));