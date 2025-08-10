let mark = 80;
if(mark>100 || mark<0){
    console.log("invalid mark");
}else if(mark>=80 && mark<=100){
    console.log("A+");
}else if(mark>=70){
    console.log("A");
}else if(mark>=60){
    console.log("A-");
}else if(mark>=50){
    console.log("B");
}else if(mark>=40){
    console.log("C");
}else if(mark>=33){
    console.log("D");
}else{
    console.log("F");
}