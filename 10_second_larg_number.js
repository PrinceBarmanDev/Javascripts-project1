function secondLargest(numbers) {
    let largest = numbers[0];
    let second = numbers[1];
    if (second > largest) {
        let temp = largest;
        largest = second;
        second = temp;
    }
    for (let i = 2; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            second = largest;
            largest = numbers[i];
        }
        else if (numbers[i] > second) {
            second = numbers[i];
        }
    }
    return second;
}

console.log(secondLargest([10, 45, 23, 78, 56]));