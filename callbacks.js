
// Nested Callbacks 1

// function square(num) {
//   return num * num;
// }
//
// var squared = square(5);

// Nested Callbacks
// function square(num, callback){
//   callback(num*num);
// }
//
// square(5, function(squared) {
// });

//Nested Callbacks 2
// function square(num) {
//   return num * num;
// }
//
// function sum() {
//   var x = 4;
//   var y = 3;
//   var x2 = square(x);
//   var y2 = square(y);
//   var sum = x2 + y2;
//   return sum;
// }
//
// sum();

// var x = 4;
// var y = 3;
//
// function square(num, callback){
//   callback(num*num);
// }
//
// square(x, function(x2){
//   square(y, function(y2) {
//     var sum = x2 + y2;
//     console.log(sum);
//   });
// });

//First wrote
// square(x, function(x2){
//
// };
//
// Then wrote
// square(y, function(y2){
//
// };
//Then put the latter inside the previous



//Answer Nested Callbacks 3
// function square(num, callback) {
//   callback(num * num);
// }
//
// function squareRoot(num, callback) {
//   callback(Math.sqrt(num));
// }
//
// var x = 4;
// var y = 3;
//
// square(x, function(x2) {
//   square(y, function(y2) {
//     var sum = x2 + y2;
//     squareRoot(sum, function(answer) {
//       console.log('The answer is: ' + answer);
//     });
//   });
// });

//Recipe
// square(x, function(x2) {
//
// });
//
// square(y, function(y2) {
//
// });
//
// var sum = x2 + y2;
// squareRoot(sum, function(answer) {
//
// });
//
// console.log('The answer is: ' + answer);

//The 2nd one goes inside the 1st
//repeat


//Timer
function square(num, callback) {
  setTimeout(function() {
    callback(num * num);
  }, 1000);
}

function squareRoot(num, callback) {
  setTimeout(function() {
    callback(Math.sqrt(num));
  }, 500);
}

var x = 4;
var y = 3;

square(x, function(x2) {
  square(y, function(y2) {
    var sum = x2 + y2;
    squareRoot(sum, function(answer) {
      console.log('The answer is: ' + answer);
    });
  });
});
