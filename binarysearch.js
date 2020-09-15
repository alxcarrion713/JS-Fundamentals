let array= [1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94];

function binary_search(arr, value){
    let high = arr.length - 1;
    let low = 0;
    let mid = 0;

    while( low<= high){
        mid = Math.floor((high + low) / 2)
        if(arr[mid]== value){
            return arr[mid];
        } else if (value> arr[mid]){
            low = mid +1;
        } else {
            high = mid - 1;
        }
        
    }
    return -1;
}

let sorted = array.sort(function(a,b){return a-b});

console.log(sorted);
let wasItFound = binary_search(sorted, 87);

console.log(wasItFound);
