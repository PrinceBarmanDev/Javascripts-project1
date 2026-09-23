//Using Continue:
function findNumber(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            continue;
        }
        if (numbers[i] === target) {
            return "Found";
        }
    }
    return "Not Found";
}

console.log(findNumber([-5, 10, -2, 7, 20], 7));

//Using Break:
function findNumber(numbers, target) {
    let result = "Not Found";
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            continue;
        }
        if (numbers[i] === target) {
            result = "Found";
            break;
        }
    }
    return result;
}

console.log(findNumber([-5, 10, -2, 7, 20], 7));