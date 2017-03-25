// 1. Write a JavaScript function to check whether an `input` is a
//string or not.
// Test Data :
// console.log(is_string('w3resource'));
// true
// console.log(is_string([1, 2, 4, 0]));
// false

var checkType = function(str) {
  return typeof str;
}

console.log(checkType('w3resource'));
true
console.log(checkType([1, 2, 4, 0]));
false


//solution
is_string = function(input) {
  if (Object.prototype.toString.call(input) === '[object String]')
    return true;
  else
    return false;
    };
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));


// 2. Write a JavaScript function to check whether a string is blank or not.
// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
// true
// false
var isBlank = function(str) {
  if (str === "") {
    return true;
  }
  else {
    return false;
  }
}
var isBlank = function(str) {
  return str === "" ? true : false;
}


console.log(isBlank(''));
console.log(isBlank('abc'));

//solution
is_Blank =  function(input) {
        if (input.length === 0)
        return true;
        else
        return false;
      }
console.log(is_Blank(''));
console.log(is_Blank('abc'));

// 3. Write a JavaScript function to split a string and convert it into an
// array of words.
// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]

var strToArr = function (str, separator) {

}

const someString = 'blah hello hi';

const errorHandler = str => {
	console.log('please input a number');
  return str;
};

const stringMinusAFew = (str, numToTakeOut) => {
		return typeof str === 'string' && typeof numToTakeOut === 'number' ? str.slice(0, numToTakeOut) : errorHandler(str);
};

const abbrev_name = str => {
		if (typeof str !== 'string') {
    		return " please give a string";
    }
    const names = str.split(" ");
    const firstName = names[0];
    const firstCharOfLastName = names[1].slice(0,1)
    console.log(`${firstName} ${firstCharOfLastName}.`)

 /*  names = str.split(" ");
    const firstCharOfLastName = names[1].slice(0,1)
    console.log(`${names[0]} ${firstCharOfLastName}.`) */
}
console.log(abbrev_name("Robin Singh"));
/*console.log(stringMinusAFew(someString, null));*/
