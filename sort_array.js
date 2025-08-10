let arr = [15,14,3,2,4,6,7,19,12,11,10,9,20,8,5,17,13,1];
for(let l = 0;l<arr.length-1;l++){
    let swapped = false;
    for(let i =0;i<arr.length-1;i++)
        if(arr[i]>arr[i+1]){
            let temp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = temp;
            swapped = true;
        }
    if(!swapped)break;
}
console.log(arr);