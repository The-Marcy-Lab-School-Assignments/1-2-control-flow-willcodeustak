const { updateSnapshot } = require("../jest.config")

const measureRain = (inches) => {

    if (inches === 0)
        console.log(`drought`)

    if (inches < 2 && inches > 0)
        console.log(`dry`)


    if (inches < 4 && inches >= 2)
        console.log(`average`)

    if (inches < 6 && inches >= 4)
        console.log(`rainy`)

    if (inches > 6)
        console.log(`flood`)


}


measureRain(0)
measureRain(1)
measureRain(3)
measureRain(5)
measureRain(19)

const happyBirthdayPet = (breed, age) => {
    if (breed === 'snake') {
        console.log('Hiss hiss!');
    } else if (breed === 'cat') {
        if (age < 5) {
            console.log('Mew mew!');
        } else {
            console.log('Meow meow!');
        }
    } else if (breed === 'dog') {
        if (age < 5) {
            console.log('Arf arf!');
        } else if (age >= 5 && age < 10) {
            console.log('Woof woof!');
        } else {
            console.log('Boof!');
        }
    } else {
        console.log('Happy birthday!');
    }
};
happyBirthdayPet('snake', 5);
happyBirthdayPet(`cat`, 3)
happyBirthdayPet(`cat`, 6)
happyBirthdayPet(`dog`, 3)
happyBirthdayPet(`dog`, 7)
happyBirthdayPet(`dog`, 15)



const funTypes = (jsType) => {
    if (typeof jsType === 'string') {
        console.log("That's just some text.");
    } else if (typeof jsType === 'number') {
        if (isNaN(jsType)) {
            console.log("Well, now you're just showing off.");
        } else {
            console.log("That's a good number.");
        }
    } else if (typeof jsType === 'boolean') {
        console.log("To bool, or not to bool?");
    } else if (jsType === undefined) {
        console.log("Nothing, but I didn't set that.");
    } else if (jsType === null) {
        console.log("Nothing, and I did set that.");
    } else if (Array.isArray(jsType)) {
        console.log("I order you to be indexed.");
    } else if (typeof jsType === 'object') {
        console.log("Anybody got the key?");
    }
};

funTypes("hello");
funTypes(42);
funTypes(true);
funTypes(undefined);
funTypes(null);
funTypes({});
funTypes([]);
funTypes(NaN);

const rounder = (float, roundingSetting)

let roundSetting = up
let roundSetting = down
let roundSetting = honest


return


// const {
//   measureRain,
//   happyBirthdayPet,
//   funTypes,
//   rounder,
//   fizzBuzzish,
// } = require('./from-scratch');
// const {
//   getRandomIntInRange,
//   coolnessGauge,
//   funkoPopAddictionLevel,
//   getWeatherReport,
//   returnPositiveNegativeZero,
// } = require('./debug');
// const { wildlyBiasedReview } = require('./modify');
