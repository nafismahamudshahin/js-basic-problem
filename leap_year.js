let year = 2000;
let leepYear = false;
if(year%4 == 0){
    leepYear = true
    if(year%100 == 0) leepYear = false

    if(year%400 == 0) leepYear = true
}
if(leepYear) console.log(`${year} is Leap Year.`);
else console.log(`${year} is Not Leap Year.`);