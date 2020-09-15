for ( var numbers = 1; numbers <= 100; numbers++) {  //Lists numbers to 100

    
    if (numbers % 15 === 0 ) {  //if number is divisible by 5 or 3 prints FizzBuzz
        console.log("FizzBuzz") }
    else if (numbers % 5 === 0) { //if number is divisible by 5 prints Buzz
        console.log("Buzz") }
    else if (numbers % 3 === 0 ) { //if number is divisible by 3 prints Fizz
        console.log("Fizz") }
    else {
        console.log(numbers) } // if neither prints the number
    
    }