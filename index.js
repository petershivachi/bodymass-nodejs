//Program that calculates the BMI of a person
const readline = require('readline')


const rl  = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 

const bodyMassIndex = (bmi) =>{
    if (bmi >= 18.5 && bmi <= 25){
        console.log('You are at normal weight');
    }else if(bmi < 18){
        console.log('Your weight is below the normal weight');
    }else {
        console.log('Your weight is above the normal weight');
    }
}

rl.question('Enter your height in inches: ', function (x) {
    rl.question('Enter your weight in pounds: ', function (y) {
        let bmi = (parseFloat(y)/(parseFloat(x) * parseFloat(x))) * 703;

        bodyMassIndex(bmi)

        rl.close();
    });
});
