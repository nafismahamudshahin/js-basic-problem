var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let newArr = []
for(let i = 0;i<numbers.length;i++){
    if(!newArr.find(num=> num == numbers[i]))
        newArr.push(numbers[i])
}

numbers = newArr
console.log(numbers);