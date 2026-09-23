function menuChoice(choice) {
    switch (choice) {
        case 1:
            return "Start Game";

        case 2:
            return "Load Game";

        case 3:
            return "Settings";

        case 4:
            return "Exit";

        default:
            return "Invalid Choice";
    }
}

console.log(menuChoice(1));
console.log(menuChoice(2));
console.log(menuChoice(3));
console.log(menuChoice(4));
console.log(menuChoice(5));