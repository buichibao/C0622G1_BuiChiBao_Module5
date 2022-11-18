// @ts-ignore
var fibonaci = function (num) {
    if (num == 0 || num == 1) {
        return num;
    }
    else if (num > 1) {
        return fibonaci(num - 1) + fibonaci(num - 2);
    }
};
var sum = 0;
var size = 4;
var arr = [];
for (var i = 0; i < size; i++) {
    arr.push(fibonaci(i));
    sum += fibonaci(i);
}
console.log(size + " số đầu tiên của dãy fibonaci là" + arr);
console.log("Và có tổng là : " + sum);
