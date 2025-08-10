var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let large = numbers[0]
numbers.forEach(num=>{
    if(num>large)large = num;
})
console.log(large);