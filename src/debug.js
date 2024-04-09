/*const getRandomIntInRange = (min, max) => {
  if (min > max) throw new Error('min must be less than max');
  return Math.floor(Math.random() * max);
  
};
*/
const getRandomIntInRange = (min, max) => {
  if (min > max) throw new Error("min must be less than max");
  return Math.floor(Math.random() * (max - min) + min);
};
/*
};
//inclusive = starting   exclusive = end point , excluding the number 
*/

const coolnessGauge = (numOfFridges) => {
  return numOfFridges < 4
    ? "You need more fridges."
    : "You are downright chilly!";
};

// console.log(coolnessGauge(6));
// console.log(coolnessGauge(4));
// console.log(coolnessGauge(3));

const funkoPopAddictionLevel = (numOfFunkoPops) => {
  if (numOfFunkoPops === 0) {
    console.log("No pops? Maybe try one.");
  } else if (numOfFunkoPops < 11) {
    console.log("Only a few? Keep having fun!");
  } else if (numOfFunkoPops < 21) {
    console.log("You have a problem.");
  } else if (numOfFunkoPops < 31) {
    console.log("You need help!");
  } else if (numOfFunkoPops >= 31) {
    console.log("You need an intervention!!!");
  }
};
// console.log(funkoPopAddictionLevel(0));
// console.log(funkoPopAddictionLevel(3));
// console.log(funkoPopAddictionLevel(22));

const getWeatherReport = (temperature) => {
  let weatherReport;
  if (temperature > 90) {
    weatherReport = "It's hot and gross out.";
  } else if (temperature > 70) {
    weatherReport = "At least it's a dry heat.";
  } else if (temperature >= 32 && temperature <= 70) {
    weatherReport = "It's not too bad!";
  } else if (temperature < 32) {
    weatherReport = "Wow, it's cold out.";
  }
  console.log(weatherReport);
  console.log("And that's your report!");
  return weatherReport;
};
getWeatherReport(100);

const returnPositiveNegativeZero = (num) => {
  if (num === 0) return "Zero";
  return num > 0 ? "Positive" : "Negative";
};

module.exports = {
  getRandomIntInRange,
  coolnessGauge,
  funkoPopAddictionLevel,
  getWeatherReport,
  returnPositiveNegativeZero,
};
