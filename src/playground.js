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

    if (breed === `snake`)
        console.log(`Hiss hiss!`)

    if (breed === `cat` && age < 5)
        console.log(`Mew mew!`)

    if (breed === `cat` && age >= 5)
        console.log(`Meow meow!`)

    if (breed === `dog` && age < 5)
        console.log(`Arf arf!`)

    if (breed === `dog` && age > 5 && age <= 10)
        console.log(`Woof woof!`)



}
happyBirthdayPet('snake', 5);
happyBirthdayPet(`cat`, 3)
happyBirthdayPet(`cat`, 6)
happyBirthdayPet(`dog`, 3)
happyBirthdayPet(`dog`, 7)

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
