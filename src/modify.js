const wildlyBiasedReview = (location) => {
  if (!location) {
    console.log('Invalid location provided');
    return;
  }

}

if (location === 'NYC') {
  console.log('THE GREATEST CITY IN THE WORLD');
  console.log('THE CITY THAT NEVER SLEEPS');
  console.log('WOW WHAT A CITY');
} else {
  console.log('Yea that place is cool I guess');
}


module.exports = {
  wildlyBiasedReview,
};


wildlyBiasedReview(`BOSTON`)
wildlyBiasedReview(`NYC`)
