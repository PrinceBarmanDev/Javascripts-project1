function checkEntry(age, hasID) {
    if (age >= 18) {
        if (hasID == true) {
            return "Allowed";
        }
        else {
            return "ID Required";
        }
    }
    else {
        return "Too Young";
    }
}

console.log(checkEntry(20, false));
console.log(checkEntry(20, true));
console.log(checkEntry(16, true));