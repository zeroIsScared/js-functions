/*1) A function named kelvinToFahrenheit with a single parameter named kelvin.
This function should return the temperature value in fahrenheits degrees.*/

function kelvinToFahrenheit(kelvin) {
    return kelvin * 9/5 - 459.67;
}

console.log(kelvinToFahrenheit(750));

/*2) A function named humanAgeInDogYears with a single parameter named myAge.
This function should return the corresponding number of dog years.*/
function humanAgeInDogYears(myAge){
    return (myAge - 2) * 4 + (2*10.5);
}

console.log(humanAgeInDogYears(29));

/*3) A function named answerMyQuestion with a parameter named userName and a second parameter userQuestion.
This function should return the corresponding eight ball answer.*/

function answerMyQuestion(userName, userQuestion){
   
    let randomNamber = Math.floor(Math.random()*8);
    let eightBall = '';

    switch (randomNamber) {
        case 0 :
            eightBall = 'It is certain';
        break;
        case 1 :
            eightBall = 'It is decidedly so';
        break;
        case 2 :
            eightBall ='Reply hazy try again';
        break;
        case 3 :
            eightBall = 'Cannot predict now';
        break;
        case 4 :
            eightBall = 'Do not count on it';
        break;
        case 5 :
            eightBall = 'My sources say no';
        break;
        case 6 :
            eightBall = 'Outlook not so good';
        break;
        case 7 :
            eightBall = 'Signs point to yes';
        break;
        default : 
            eightBall = 'Nothing to say';
        break;
    }
    return  console.log(`${userName} asked: ${userQuestion} Magic Eight Ball's answer: ${eightBall}.`);
}

console.log(answerMyQuestion('Natalia', 'Will I be happy?'));

/*4) A function named raceTime with a parameter named userAge and a second parameter registeredEarly.
This function should return the time the users will start the race.*/

function raceTime(userName, registeredEarly) {

    let runnersAge = 21;

    if (runnersAge > 18 && registeredEarly) { 
        return console.log(`Hello, ${userName}! The race will start at 9:30 am. `);
        } else if (runnersAge > 18 && registeredEarly === false) {
        return  console.log(`Hello, ${userName}! The race will start at 11:am.`);
        }else if (runnersAge < 18) {
        return console.log(`Hello, ${userName}! The race will start at 12:30 am.`);
        } else {
        return console.log(`Hello, ${userName}! Please contact the organisers to find out your running time and race number.`);
            };
}

raceTime('Natalia', false);