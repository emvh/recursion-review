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
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  var result = [];
  // if input is an array
  if (Array.isArray(obj)) {
    // iterate over elements of array
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return '[' + result.join(',') + ']';
  }

  // if the input is an obj
  if (typeof obj === 'object') {
    for (var key in obj) {
      if (typeof obj === 'function' || obj === undefined) {
        continue;
      }
      return '{' + stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + '}';
    }
  }

  // your code goes here
  // return result;
};
