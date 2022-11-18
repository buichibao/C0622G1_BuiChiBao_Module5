
// @ts-ignore
let fibonaci = function (num :number) :number {
    if(num == 0 || num == 1){
        return num;
    }else  if(num>1){
       return  fibonaci(num-1) + fibonaci(num-2);
    }
}

let sum : number = 0;
let size : number = 4;
let arr : Array<number> = [];

for (let i = 0;i<size;i++){
    arr.push(fibonaci(i));
    sum+= fibonaci(i);
}
console.log(size + " số đầu tiên của dãy fibonaci là" +arr);
console.log("Và có tổng là : "+ sum);
