function calculateTotal(num) {
    let total = 0;
    for (let i=0;i<num.length;i++) {
        total=total+num[i];
    }
    return total;
}
function getStatus(total, target=100) {
if (total>=target){
        return "Target reached";
} 
else{
        return "Target not reached";
    }
}
let total = calculateTotal([50, 10, 30]);
let status = getStatus(total);
console.log(total);
console.log(status);
