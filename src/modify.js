const wildlyBiasedReview = (location) => {
  // Guard clause
  if (!location) {
    console.log('Invalid location');
    return;
    /*confused since putting anything other than NYC will prompt 
    "yea that place is nice". So is guard clause just somthing to set up for
    //future additions, aka when things are properly assigned and the code will then
    know what is and is not a location.
*/
  }

  if (location === 'NYC') {
    console.log('THE GREATEST CITY IN THE WORLD');
    console.log('THE CITY THAT NEVER SLEEPS');
    console.log('WOW WHAT A CITY');
  } else {
    console.log('Yea that place is cool I guess');
  }
};

module.exports = {
  wildlyBiasedReview,
};


wildlyBiasedReview(`BOSTON`)
wildlyBiasedReview(`NYC`)