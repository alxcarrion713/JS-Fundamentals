var arr = [1, -2, 9, 4];


// var max = arr[0];

// for ( var i = 0; i < arr.length; i++){
//     if (arr[i] >= max){
//         max = arr[i];
//         console.log('Setting max to ' + max)

//     }
// }
// console.log(max);

// var min = arr[0];

// for ( var i = 0; i < arr.length; i++){
//     if (arr[i]< min){
//         min = arr[i];
//         console.log('Setting min to ' + min)

//     }
// }
// console.log(min);


var avg = arr[0];
var count = 0;
var total= 0;

for ( var i = 0; i < arr.length; i++){
    if (arr[i] != undefined){
        count ++;
        total += arr[i];
        

    }
}
var avg = total/count;
console.log(avg);



