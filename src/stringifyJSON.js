// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // var result = '';
// if input is a number:
  if (typeof obj === 'number') {
    return '' + obj;
  }

  // if input is undefined:
  // if ( obj === undefined) {
  //   return null
  // }
  // if input is Null
    if (obj === null) {
      return 'null'
  }
// if input is boolean
  if (typeof obj === 'boolean') {
    return '' + obj
  }
// if input is string
// if input is an array
// if the input is an obj

  // your code goes here
  // return result;
};
