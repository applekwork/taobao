// var n = parseInt(window.prompt('input'));
// document.write(n);

// var str1 = true;
// var num = parseInt(10,16);
// var num1 = String(num);
// var bool = Boolean(num1);
// // console.log(typenof(num1) + ":" + num1);
// document.write(typeof(bool) + ":" + bool);
// console.log(isNaN(123));
// var num = 123.4567;
// document.write(num.toFixed(3));   
// function sum() {
//     var sum = 0;
//     for(var i =  0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     document.write(sum);
// }
// sum(1,2,3,4,5,6,7,8,9,10);
// function sum(a, b) {
//     // arguments[1]
//     // a = 2;// 形参改变实参改变，但不是同一个东西，两个值右一个映射关系
//     // arguments[0] = 3;
//     // /当 arguments所取的元素超出实参范围，为undefined
//     var num = a + b;
//     return num;
// }
// sum(1);
// function test() {
//     var arr = [];
//     for(var i = 0; i < 10; i++){
//         arr[i] = function () {
//             // console.log(i);
//             document.write(i);
//         }
//     }
//     return arr;
// }
// var myArr = test();
// // 打印结果全为10
/*
function test() {
    var food = "apple";
    var obj = {
        eatFood : function () {
            if(food != "") {
                console.log("I am eating" + " " + food);
                food = "";
            } else {
                console.log("Empty!")
            }
        },
        pushFood : function (foodName) {
          console.log("Food is Already")
          food = foodName;       
        }
    }
    return obj;
}
var person = test();
person.eatFood();
person.eatFood();
person.pushFood("banana");
person.eatFood();
*/
var str = "abc";
str += 1;
var test = typeof(str);
if(test.length == 6) {
    test.sign = "typeof的返回结果可能是String";
}
console.log(test.sign);