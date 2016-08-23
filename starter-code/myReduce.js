// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {
	//define variable i and set it to 0 for your starting point
	var i=0;
	//define a new variable of previousValue;
	var previousValue;
	//if there's no initialValue, then we'll set it equal to previousValue;
	if(typeof(initialValue) == "undefined") {
    i++;
    previousValue = arr[0];
  } else {
    previousValue = initialValue;
  }
//iterate through all indeces in the array:
	for (var i=0; i<arr.length; i++){
		callback(previousValue, arr[i], i, arr){
		//if true, return that value:
			return previousValue;
		}
	}
}


/*
 Best if you don't code out here.
 If you want to check your code, use tests or `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
