//assign fizzBuzz30 an arrow function that does not take any inputs.  fizzBuzz30 should output an array of all the numbers from
//1 through 30 replacing numbers divisible by 3 with 'fizz', numbers divisible by 5 with 'buzz' and numbers divisible by 3 and 5 with
//'fizzbuzz'

/*let fizzBuzz30;*/

const fizzBuzz30 = () => {
    let fizz = "fizz";
    let buzz = "buzz";

    let output = [];

    for (let x = 0; x < 31; x++) {

        if (x % 15 === 0 ) {
            console.log(fizz+buzz);
            output.push(fizz+buzz);
        } else if (x % 3 === 0) {

            console.log(fizz);
            output.push(fizz);
        } else if (x % 5 === 0) {

            console.log(buzz);
            output.push(buzz);
        }
    }

    console.log(output);

    return output;
};






//Do not edit
module.exports = fizzBuzz30;