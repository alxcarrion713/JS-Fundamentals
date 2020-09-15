function bsort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let y =0; y< arr.length - i; y ++){
            if(arr[y]> arr[y+1]){
                [arr[y], arr[y+1]] = [ arr[y+1], arr[y]]
            }
        }
    }
    return arr
}
const arr= [20,10,5,7,3,5,9,22,23,55,67]
console.log(bsort(arr))