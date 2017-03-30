exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
  fizzBuzz : function(num) => {
    let fbArray = [];
    for(let i = 1; i <= num; i++){

      if( i % 15 == 0 ){
        fbArray.push("fizzbuzz");
      } else if ( i % 5 == 0 ){
        fbArray.push("Buzz");
      } else if ( i % 3 == 0 ){
        fbArray.push("Fizz");
      } else {
        fbArray.push(i);
      }

    }
      console.log(fbArray)
      return fbArray;

  }
};
